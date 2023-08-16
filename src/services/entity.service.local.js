
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import {  entity as gData } from '../../data/entity.js'

const STORAGE_KEY = 'entity'

export const entityService = {
    query,
    getById,
    save,
    remove,
    getEmptyData,
    addDataMsg
}
window.cs = entityService


async function query(filterBy = { txt: '', price: 0 }) {
    var entities = await storageService.query(STORAGE_KEY)
    if (!entities) {
        utilService.saveToStorage(STORAGE_KEY,gData)
        entities = gData
    }
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        entities = entities.filter(entity => regex.test(entity.vendor) || regex.test(entity.description))
    }
    if (filterBy.price) {
        entities = entities.filter(entity => entity.price <= filterBy.price)
    }
    return entities
}

function getById(dataId) {
    return storageService.get(STORAGE_KEY, dataId)
}

async function remove(dataId) {
    await storageService.remove(STORAGE_KEY, dataId)
}

async function save(entity) {
    var savedData
    if (entity._id) {
        savedData = await storageService.put(STORAGE_KEY, entity)
    } else {
        // Later, owner is set by the backend
        entity.owner = userService.getLoggedinUser()
        savedData = await storageService.post(STORAGE_KEY, entity)
    }
    return savedData
}

async function addDataMsg(dataId, txt) {
    // Later, this is all done by the backend
    const entity = await getById(dataId)
    if (!entity.msgs) entity.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    entity.msgs.push(msg)
    await storageService.put(STORAGE_KEY, entity)

    return msg
}

function getEmptyData() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// Initial entity
// ;(async ()=>{
//     await storageService.post(STORAGE_KEY, {vendor: 'Subali Karov 1', price: 180})
//     await storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 240})
// })()