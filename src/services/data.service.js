import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

export const dataService = {
    query,
    getById,
    save,
    remove,
    getEmptyData,
    addDataMsg
}

window.cs = dataService // for console usage

async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get('data', filterBy)
}
function getById(dataId) {
    return httpService.get(`data/${dataId}`)
}

async function remove(dataId) {
    return httpService.delete(`data/${dataId}`)
}
async function save(data) {
    var savedData
    if (data._id) {
        savedData = await httpService.put(`data/${data._id}`, data)
    } else {
        savedData = await httpService.post('data', data)
    }
    return savedData
}

async function addDataMsg(dataId, txt) {
    const savedMsg = await httpService.post(`data/${dataId}/msg`, {txt})
    return savedMsg
}


function getEmptyData() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}