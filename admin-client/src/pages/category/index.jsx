import React, {Component} from 'react'

import {
	Card,
	Table,
	Button,
} from 'antd'
import {
	PlusOutlined,
} from '@ant-design/icons'

class Category extends Component {
	render () {
		const title = 'title'

		const extra = (
			<Button type='primary'>
				<PlusOutlined type='plus' />
				添加
			</Button>
		)

		const dataSource = [
			{
			  key: '1',
			  name: '胡彦斌',
			  age: 32,
			  address: '西湖区湖底公园1号',
			},
			{
			  key: '2',
			  name: '胡彦祖',
			  age: 42,
			  address: '西湖区湖底公园1号',
			},
		]
		  
		const columns = [
			{
			  title: '姓名',
			  dataIndex: 'name',
			  key: 'name',
			},
			{
			  title: '操作',
			  dataIndex: 'age',
			  key: 'age',
			},
		]
		  

		return (
			<div>
				<Card title={title} extra={extra}>
      				<Table
						dataSource={dataSource}
						columns={columns}   
					/>
    			</Card>
			</div>
		)
	}
}

export default Category
