import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import menuList from '../../../config/menuConfig'
import LinkButton from '../../common/link-button'
import {formateDate} from '../../../utils/dateUtils'
import {reqWeather} from '../../../api/index'

import './style.css'

import {Modal} from 'antd'
import {ExclamationCircleOutlined} from '@ant-design/icons'
const {confirm} = Modal;
		
class Header extends Component {
	state = {
		currentTime: formateDate(Date.now()),
		weatherImageSrc: '',
		weather: '',
	}

	

	render () {
		const {currentTime, weatherImageSrc, weather} = this.state
		const title = this.getTitle()

		return (
			<div className='header-wrapper'>
				<div className='header-top'>
					<span>欢迎，admin</span>
					<LinkButton onClick={this.logout}>退出</LinkButton>
				</div>
				<div className='header-bottom'>
					<div className="header-bottom-left">
						{title}
					</div>
					<div className="header-bottom-right">
						<span>{currentTime}</span>
						<img src={weatherImageSrc} alt="weather"/>
						<span>{weather}</span>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.getRealTime()
		this.getWeather()
	}

	componentWillUnmount() {
		clearInterval(this.intervalId)
	}

	getRealTime = () => {
		this.intervalId = setInterval(() => {
			const currentTime = formateDate(Date.now())
			this.setState({currentTime})
		}, 1000)
	}

	getWeather = async() => {
		const {weatherImageSrc, weather} = await reqWeather('深圳')
		this.setState({weatherImageSrc, weather})
	}

	getTitle = () => {
		const path = this.props.location.pathname
		let title = ''
		menuList.forEach(item => {
			if (item.key === path) {
				title = item.title
			} else if (item.children) {
				const cItem = item.children.find(cItem => cItem.key===path)
				if (cItem) {
					title = cItem.title
				}
			}
		})
		return title
	}

	logout = () => {
		confirm({
    		icon: <ExclamationCircleOutlined />,
    		content: '确定退出吗？',
    		onOk: ()  => {
				this.props.history.replace('/login')
			},
		})
	}
}

export default withRouter(Header) 