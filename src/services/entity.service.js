import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

export const entityService = {
    query,
    getById,
    save,
    remove,
    getEmptyData,
    addDataMsg
}

window.cs = entityService // for console usage

async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get('entity', filterBy)
}
function getById(entityId) {
    return httpService.get(`entity/${entityId}`)
}

async function remove(entityId) {
    return httpService.delete(`entity/${entityId}`)
}
async function save(entity) {
    var savedData
    if (entity._id) {
        savedData = await httpService.put(`entity/${entity._id}`, entity)
    } else {
        savedData = await httpService.post('entity', entity)
    }
    return savedData
}

async function addDataMsg(entityId, txt) {
    const savedMsg = await httpService.post(`entity/${entityId}/msg`, {txt})
    return savedMsg
}


function getEmptyentity() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}