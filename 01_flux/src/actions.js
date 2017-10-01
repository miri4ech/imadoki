import { appDispatcher } from './appDispatcher.js'

//Actionを作成
export const ActionType = {
	CHANGE_NAME: 'CHANGE_NAME',
	SUBMIT_NAME: 'SUBMIT_NAME'
}

//Dispatcherに情報を投げる
export const Actions = {
	changeName: (name) => {
		if(name===null) return
		appDispatcher.dispatch({
			actionType: ActionType.CHANGE_NAME,
			value: name
		})
	},
	submitName: () => {
		appDispatcher.dispatch({
			actionType: ActionType.SUBMIT_NAME
		})
	}
}