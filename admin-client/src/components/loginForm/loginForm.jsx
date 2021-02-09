import React, { Component } from 'react'

import {Form, Input, Button} from 'antd'
import {
	UserOutlined,
	LockOutlined,
} from '@ant-design/icons';

import './loginFrom.css'

class LoginFrom extends Component {
	render () {
		return (
			<section className='login-content'>
				<span className='content-title'>用户登录</span>
				<Form 
					className='login-from'
					onSubmit={this.handleSubmit}
				>
					<Form.Item
						label="账号"
						name="username"
						rules={[{required: true, message: '请输入账号！'}]}
						className='username-input'
					>
						<Input
							placeholder="账号"
							prefix={<UserOutlined style={{color: 'rgba(0, 0, 0, .25)'}} />}
						/>
					</Form.Item>
					<Form.Item
						label="密码"
						name="password"
						rules={[{required: true, message: '请输入密码!'}]}
					>
						<Input.Password 
							placeholder="密码"
							prefix={<LockOutlined style={{color: 'rgba(0, 0, 0, .25)'}} />}
						/>
					</Form.Item>
					<Form.Item className='login-button-wrapper'>
						<Button type="primary" htmlType="submit" className='login-button-submit'>
							登录
						</Button>
						<Button type="primary" htmlType="submit" className='login-button-reset'>
							清空
						</Button>
					</Form.Item>
				</Form>
			</section>
		)
	}

	handleSubmit = (event) => {

	}
}

export default LoginFrom