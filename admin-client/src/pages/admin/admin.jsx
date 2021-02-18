import React, { Component } from 'react'
// import {Redirect} from 'react-router-dom'

import LeftNav from '../../components/leftNav/leftNav'
import Header from '../../components/header/header'
import Content from '../../components/content/content'
import Footer from '../../components/footer/footer'


import { Layout } from 'antd';
const {Sider} = Layout;

class Admin extends Component {
	render () {
		// const user = memoryUtils.user
		// if (!user || !user._id) {
		// 	return <Redirect to='/login'/>
		// }

		return (
			<Layout style={{height: '100%'}}>
      			<Sider>
					<LeftNav />
				</Sider>
      			<Layout>
					<Header />
					<Content />
					<Footer />
      			</Layout>
   			</Layout>
		)
	}
}

export default Admin