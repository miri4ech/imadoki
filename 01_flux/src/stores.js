import { appDispatcher } from './appDispatcher.js'
import { ActionType } from './actions.js'

//Storeを作成
export const nameStore = { name: '', onChange: null }
export const messageStore = { message: '', onChange: null }

//ActionとStoreを結びつける
appDispatcher.register(payload => {
    if (payload.actionType === ActionType.CHANGE_NAME) {
        nameStore.name = payload.value
        nameStore.onChange()
    }
})

appDispatcher.register(payload => {
    if (payload.actionType === ActionType.SUBMIT_NAME) {
        messageStore.message = 'Hi, ' + nameStore.name + ' How are you doing? :)'
        messageStore.onChange()
    }
})

