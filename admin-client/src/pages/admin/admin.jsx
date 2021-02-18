import React, { Component } from 'react'
// import {Redirect} from 'react-router-dom'

import LeftNav from '../../components/leftNav/leftNav'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

import './admin.css'


import { Layout } from 'antd';
const {Sider, Content} = Layout;

class Admin extends Component {
	render () {
		// const user = memoryUtils.user
		// if (!user || !user._id) {
		// 	return <Redirect to='/login'/>
		// }

		return (
			<Layout className='wrapper'>
      			<Sider>
					<LeftNav />
				</Sider>
      			<Layout>
					<Header />
					<Content style={{backgroundColor: '#fff'}}>content</Content>
					<Footer />
      			</Layout>
   			</Layout>
		)
	}
}

export default Admin