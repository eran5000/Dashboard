import { entityService } from '../services/entity.service.local'
// import { entityService } from '../services/entity.service'

export function getActionRemoveData(dataId) {
    return {
        type: 'removeData',
        dataId
    }
}
export function getActionAddData(entity) {
    return {
        type: 'addData',
        entity
    }
}
export function getActionUpdateData(entity) {
    return {
        type: 'updateData',
        entity
    }
}
export function getActionAddDataMsg(dataId) {
    return {
        type: 'addDataMsg',
        dataId,
        txt: 'Stam txt'
    }
}

export const dataStore = {
    state: {
        entities: [],
        dates: [],
        payments: [],
        searches: [],
        rpm: [],
        alerts: []
    },
    getters: {
        entities({ entities }) {
            console.log(entities);
            return entities
        },
        chartsData({dates, payments, searches, rpm, alerts}) {
            return {dates, payments, searches, rpm, alerts}
        }
    },
    mutations: {
        setDatas(state, { entities }) {
            state.entities = entities
        },
        addData(state, { entity }) {
            state.entities.push(entity)
        },
        updateData(state, { entity }) {
            const idx = state.entities.findIndex(c => c._id === entity._id)
            state.entities.splice(idx, 1, entity)
        },
        removeData(state, { dataId }) {
            state.entities = state.entities.filter(entity => entity._id !== dataId)
        },
        addDataMsg(state, { dataId, msg }) {
            const entity = state.entities.find(entity => entity._id === dataId)
            if (!entity.msgs) entity.msgs = []
            entity.msgs.push(msg)
        },
        setSort(state, { sortBy }) {
            console.debug('♠️ ~ file: data.store.js:60 ~ setSort ~ sortBy:', sortBy)

            state.entities.sort((a, b) => (a[sortBy.key] - b[sortBy.key]) * sortBy.dir)
            console.log('state.entities:', state.entities)

        },
        setChartsData({entities, dates, payments, searches, rpm, alerts}) {
            entities.map((entity,idx) => {
                if (idx < 5) {
                    dates.push(new Date (entity.date).toLocaleDateString("es-CL").slice(0,5))
                    payments.push( Math.floor(entity.payment))
                    searches.push(Math.floor(entity.searches))
                    rpm.push(Math.floor(entity.rpm))
                    alerts.push(entity.alerts)
                }
            })
            console.log(dates, payments, searches, rpm, alerts)
        }
    },
    actions: {
        async addData(context, { entity }) {
            try {
                entity = await entityService.save(entity)
                context.commit(getActionAddData(entity))
                return entity
            } catch (err) {
                console.log('dataStore: Error in addData', err)
                throw err
            }
        },
        async updateData(context, { entity }) {
            try {
                entity = await entityService.save(entity)
                context.commit(getActionUpdateData(entity))
                return entity
            } catch (err) {
                console.log('dataStore: Error in updateData', err)
                throw err
            }
        },
        async loadEntities(context) {
            try {
                const entities = await entityService.query()
                context.commit({ type: 'setDatas', entities })
            } catch (err) {
                console.log('dataStore: Error in loadDatas', err)
                throw err
            }
        },
        async removeData(context, { dataId }) {
            try {
                await entityService.remove(dataId)
                context.commit(getActionRemoveData(dataId))
            } catch (err) {
                console.log('dataStore: Error in removeData', err)
                throw err
            }
        },
        async addDataMsg(context, { dataId, txt }) {
            try {
                const msg = await entityService.addDataMsg(dataId, txt)
                context.commit({ type: 'addDataMsg', dataId, msg })
            } catch (err) {
                console.log('dataStore: Error in addDataMsg', err)
                throw err
            }
        },
        // async sortEntities({ commit, dispatch }, { sortBy }) {
        //     console.log('sortBy:', sortBy)
        //     commit({ type: 'setSortBy', sortBy })
        //     // dispatch('loadItems')

        // }

    }
}