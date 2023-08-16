
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'data'

export const dataService = {
    query,
    getById,
    save,
    remove,
    getEmptyData,
    addDataMsg
}
window.cs = dataService


async function query(filterBy = { txt: '', price: 0 }) {
    var datas = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        datas = datas.filter(data => regex.test(data.vendor) || regex.test(data.description))
    }
    if (filterBy.price) {
        datas = datas.filter(data => data.price <= filterBy.price)
    }
    return datas
}

function getById(dataId) {
    return storageService.get(STORAGE_KEY, dataId)
}

async function remove(dataId) {
    await storageService.remove(STORAGE_KEY, dataId)
}

async function save(data) {
    var savedData
    if (data._id) {
        savedData = await storageService.put(STORAGE_KEY, data)
    } else {
        // Later, owner is set by the backend
        data.owner = userService.getLoggedinUser()
        savedData = await storageService.post(STORAGE_KEY, data)
    }
    return savedData
}

async function addDataMsg(dataId, txt) {
    // Later, this is all done by the backend
    const data = await getById(dataId)
    if (!data.msgs) data.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    data.msgs.push(msg)
    await storageService.put(STORAGE_KEY, data)

    return msg
}

function getEmptyData() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// Initial data
// ;(async ()=>{
//     await storageService.post(STORAGE_KEY, {vendor: 'Subali Karov 1', price: 180})
//     await storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 240})
// })()