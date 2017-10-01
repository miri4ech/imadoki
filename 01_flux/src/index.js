import React from 'react'
import ReactDOM from 'react-dom'
import { Actions } from './actions.js'
import { nameStore, messageStore } from './stores.js'

//Viewの定義
class AppView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			message: ''
		}
		//StoreとViewを結びつける
		nameStore.onChange = () => {
			this.setState({ name: nameStore.name })
		}
		messageStore.onChange = () => {
			this.setState({ message: messageStore.message })
		}
	}
	//ViewではActionを投げる
	render() {
		return (
			<div>
				<div>
					<input
						value={this.state.name}
						onChange={(e)=> Actions.changeName(e.target.value)}
					/>
					<button onClick={(e) => Actions.submitName()}>Register</button>
				</div>
				<br />
				<div>{this.state.message}</div>
			</div>
		)

	}

}

ReactDOM.render(<AppView />, document.getElementById('root'))
