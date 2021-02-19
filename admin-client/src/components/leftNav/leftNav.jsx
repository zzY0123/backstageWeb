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
       			    <Menu.Item key="/home" icon={<PieChartOutlined />}>
						<Link to='/home'>
       						首页	
						</Link>
          			</Menu.Item>
          			<SubMenu key="sub1" icon={<MailOutlined />} title="商品">
          				<Menu.Item key="/category">
							<Link to='/category'>
								品类管理
							</Link>
						</Menu.Item>
            			<Menu.Item key="/product">
							<Link to='/product'>
								商品管理
							</Link>
						</Menu.Item>
          			</SubMenu>	
					<Menu.Item key="/user" icon={<DesktopOutlined />}>
						<Link to='/user'>
      	    				用户管理
						</Link>
          			</Menu.Item>
					<Menu.Item key="/role" icon={<DesktopOutlined />}>
						<Link to='/role'>
      	    				角色管理
						</Link>
          			</Menu.Item>	
					<SubMenu key="sub2" icon={<MailOutlined />} title="图形图表">
          				<Menu.Item key="/bar">
							<Link to='/charts/bar'>
								柱状图
							</Link>
						</Menu.Item>
            			<Menu.Item key="/line">
							<Link to='/charts/line'>
								折线图
							</Link>
						</Menu.Item>
            			<Menu.Item key="/pie">
							<Link to='/charts/pie'>
								饼状图
							</Link>
						</Menu.Item>
          			</SubMenu>
        		</Menu>
			</div>
		)
	}
}

export default LeftNav