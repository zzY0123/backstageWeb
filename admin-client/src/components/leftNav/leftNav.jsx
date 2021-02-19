import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/image/leftNav/logo.png'

import './leftNav.css' 

import { Menu } from 'antd'
import {
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

class LeftNav extends Component {
	render () {
		return (
			<div className='left-nav-wrapper'>
				<Link to='/' exact className='left-nav-header-wrapper'>
					<header className='left-nav-header'>
						<img src={logo} alt='logo' />
						<h1>富胜纸业管理系统</h1>
					</header>
				</Link>
				<Menu
          			mode="inline"
          			theme="dark"
       			>	
       			    <Menu.Item key="1" icon={<PieChartOutlined />}>
       					首页
          			</Menu.Item>
          			<SubMenu key="sub1" icon={<MailOutlined />} title="商品">
          				<Menu.Item key="2">品类管理</Menu.Item>
            			<Menu.Item key="3">商品管理</Menu.Item>
          			</SubMenu>	
					<Menu.Item key="4" icon={<DesktopOutlined />}>
          				用户管理
          			</Menu.Item>
					<Menu.Item key="5" icon={<DesktopOutlined />}>
          				角色管理
          			</Menu.Item>
        		</Menu>
			</div>
		)
	}
}

export default LeftNav