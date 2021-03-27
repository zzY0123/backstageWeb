import React, {Component} from 'react'

import LoginFrom from '../../components/common/login-form'

import logo from '../../assets/image/login/logo.png'

import './style.css'

class Login extends Component {
	render () {
		return (
			<div className='login-wrapper'>
				<header className='login-header'>
					<img src={logo} alt="logo" className='header-logo' />
					<span className='header-title'>富胜纸业管理系统</span>
				</header>
				<LoginFrom />
			</div>
		)
	}
}

export default Login