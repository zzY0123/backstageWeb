import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import menuList from '../../config/menuConfig'

import logo from '../../assets/image/leftNav/logo.png'

import './leftNav.css' 

import { Menu } from 'antd'
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
					{
						this.getMenuNodes(menuList)
					}
			    </Menu>
			</div>
		)
	}

	getMenuNodes = (menuList) => {
		return menuList.map(nodeItem => {
			if (!nodeItem.children) {
				return (
					<Menu.Item key={nodeItem.key} icon={nodeItem.icon}>
						<Link to={nodeItem.key}>
							{nodeItem.title}
						</Link>
					</Menu.Item>
				)
			} else {
				return (
					<SubMenu key={nodeItem.key} icon={nodeItem.icon} title={nodeItem.title}>
						{
							this.getMenuNodes(nodeItem.children)
						}
          			</SubMenu>
				)
			}
		})
	}
}

export default LeftNav