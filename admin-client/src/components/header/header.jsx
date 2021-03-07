import React, {Component} from 'react'

import {formateDate} from '../../utils/dateUtils'
import {reqWeather} from '../../api/index'

import './header.css'

class Header extends Component {
	state = {
		currentTime: formateDate(Date.now()),
		weatherImageSrc: '',
		weather: '',
	}

	render () {

		const {currentTime, weatherImageSrc, weather} = this.state

		return (
			<div className='header-wrapper'>
				<div className='header-top'>
					<span>欢迎，admin</span>
					<a href="javascript;">退出</a>
				</div>
				<div className='header-bottom'>
					<div className="header-bottom-left">
						首页
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

	getRealTime = () => {
		setInterval(() => {
			const currentTime = formateDate(Date.now())
			this.setState({currentTime})
		}, 1000)
	}

	getWeather = async() => {
		const {weatherImageSrc, weather} = await reqWeather('深圳')
		this.setState({weatherImageSrc, weather})
	}
}

export default Header