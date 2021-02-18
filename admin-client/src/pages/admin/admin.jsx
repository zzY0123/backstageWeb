import React, { Component } from 'react'
// import {Redirect} from 'react-router-dom'

import LeftNav from '../../components/leftNav/leftNav'
import Header from '../../components/header/header'

import { Layout } from 'antd';
const {Footer, Sider, Content } = Layout;

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
      		  		<Header>Header</Header>
      		  		<Content>Content</Content>
      		  		<Footer>Footer</Footer>
      			</Layout>
   			</Layout>
		)
	}
}

export default Admin