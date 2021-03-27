import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import menuList from '../../../config/menuConfig'

import logo from '../../../assets/image/leftNav/logo.png'

import './style.css' 

import {Menu} from 'antd'
const {SubMenu} = Menu;

class LeftNav extends Component {
	componentWillMount () {
		this.menuNodes = this.getMenuNodes(menuList)
	}

	render () {
		const path = this.props.location.pathname
		const openKey = this.openKey

		return (
			<div className='left-nav-wrapper'>
				<Link to='/' className='left-nav-header-wrapper'>
					<header className='left-nav-header'>
						<img src={logo} alt='logo' />
						<h1>富胜纸业管理系统</h1>
					</header>
				</Link>
				<Menu
          			mode="inline"
          			theme="dark"
					selectedKeys={[path]}
					defaultOpenKeys={[openKey]}
       			>
					{
						this.menuNodes
					}
			    </Menu>
			</div>
		)
	}

	getMenuNodes = (menuList) => {
		const path = this.props.location.pathname
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
				const childrenItem = nodeItem.children.find(cItem => cItem.key === path)
				if (childrenItem) this.openKey = nodeItem.key
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

export default withRouter(LeftNav) 