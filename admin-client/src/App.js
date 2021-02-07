import React, {Component} from 'react'
import {Button, message} from 'antd'

class App extends Component {
	render () {
		return <Button type='primary' onClick='this.handleClick'>Button</Button>
	}

	handleClick = () => {
		message.success('success')
	}
}

export default App