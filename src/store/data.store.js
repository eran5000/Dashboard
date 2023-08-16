import { dataService } from '../services/data.service.local'
// import { dataService } from '../services/data.service'

export function getActionRemoveData(dataId) {
    return {
        type: 'removeData',
        dataId
    }
}
export function getActionAddData(data) {
    return {
        type: 'addData',
        data
    }
}
export function getActionUpdateData(data) {
    return {
        type: 'updateData',
        data
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
        datas: []
    },
    getters: {
        datas({datas}) { return datas },
    },
    mutations: {
        setDatas(state, { datas }) {
            state.datas = datas
        },
        addData(state, { data }) {
            state.datas.push(data)
        },
        updateData(state, { data }) {
            const idx = state.datas.findIndex(c => c._id === data._id)
            state.datas.splice(idx, 1, data)
        },
        removeData(state, { dataId }) {
            state.datas = state.datas.filter(data => data._id !== dataId)
        },
        addDataMsg(state, { dataId , msg}) {
            const data = state.datas.find(data => data._id === dataId)
            if (!data.msgs) data.msgs = []
            data.msgs.push(msg)
        },
    },
    actions: {
        async addData(context, { data }) {
            try {
                data = await dataService.save(data)
                context.commit(getActionAddData(data))
                return data
            } catch (err) {
                console.log('dataStore: Error in addData', err)
                throw err
            }
        },
        async updateData(context, { data }) {
            try {
                data = await dataService.save(data)
                context.commit(getActionUpdateData(data))
                return data
            } catch (err) {
                console.log('dataStore: Error in updateData', err)
                throw err
            }
        },
        async loadDatas(context) {
            try {
                const datas = await dataService.query()
                context.commit({ type: 'setDatas', datas })
            } catch (err) {
                console.log('dataStore: Error in loadDatas', err)
                throw err
            }
        },
        async removeData(context, { dataId }) {
            try {
                await dataService.remove(dataId)
                context.commit(getActionRemoveData(dataId))
            } catch (err) {
                console.log('dataStore: Error in removeData', err)
                throw err
            }
        },
        async addDataMsg(context, { dataId, txt }) {
            try {
                const msg = await dataService.addDataMsg(dataId, txt)
                context.commit({type: 'addDataMsg', dataId, msg })
            } catch (err) {
                console.log('dataStore: Error in addDataMsg', err)
                throw err
            }
        },

    }
}