import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import LeftNav from '../../components/common/left-nav'
import Header from '../../components/common/header'
import Footer from '../../components/common/footer'
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import User from '../user/user'
import Role from '../role/role'
import Bar from '../charts/bar/bar'
import Line from '../charts/line/line'
import Pie from '../charts/pie/pie'

import './style.css'

import {Layout} from 'antd';
const {Sider, Content} = Layout;

class Admin extends Component {
	render () {
		// const user = memoryUtils.user
		// if (!user || !user._id) {
		// 	return <Redirect to='/login'/>
		// }

		return (
			<Layout className='admin-wrapper'>
      			<Sider>
					<LeftNav />
				</Sider>
      			<Layout>
					<Header />
					<Content className='content'>
						<Switch>
							<Route path='/home' component={Home} />
							<Route path='/category' component={Category} />
							<Route path='/product' component={Product} />
							<Route path='/user' component={User} />
							<Route path='/role' component={Role} />
							<Route path='/charts/bar' component={Bar} />
							<Route path='/charts/line' component={Line} />
							<Route path='/charts/pie' component={Pie} />
							<Redirect to='/home' />
						</Switch>
					</Content>
					<Footer />
      			</Layout>
   			</Layout>
		)
	}
}

export default Admin