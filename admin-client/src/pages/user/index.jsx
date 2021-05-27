import React, { Component } from 'react'

import {
	Card,
	Button,
	Table,
	Model,
} from 'antd'

class User extends Component {
	render() {

		const title = <Button type='primary'>创建用户</Button>

		return (
			<Card title={title}></Card>
		)
	}
}

export default User