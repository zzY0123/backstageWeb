import React, {Component} from 'react'

import {
	Card,
	Button,
	Table,
} from 'antd'

class Role extends Component {
	state = {
		roles: []
	}

	render() {
		const title = (
			<span>
				<Button type='primary'>创建角色</Button>
				<Button type='primary' disabled>设置权限</Button>
			</span>
		)

		const {roles} = this.state

		return (
			<Card title={title}>
				<Table
					bordered
					rowKey='_id'
					dataSource={roles}
					columns={this.columns}
					pagination={{defaultPageSize: 5, showQuickJumper: true}}
				/>
			</Card>
		)
	}

	componentWillUnmount () {
		this.initColumns()
	}

	initColumns = () => {
		this.columns = [
			{
				title: '角色名称',
				dataIndex: 'name'
			},
			{
				title: '创建时间',
				dataIndex: 'create_time'
			}, 
			{
				title: '授权时间',
				dataIndex: 'auth_time'
			},
			{
				title: '授权人',
				dataIndex: 'auth_name'
			}
		]

	}
}

export default Role
