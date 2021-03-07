import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd'

export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')

export const reqAddUser = (user) => ajax('/manage/user/add', user, 'POST')

export const reqWeather = (city) => {
	return new Promise((resolve, reject) => {
		const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
		jsonp(url, {}, (error, data) => {
			console.log('1', error, data)
			if (!error && data.status === 'success') {
				const {dayPictureUrl, weather} = data.results[0].weather_data[0]
				resolve({dayPictureUrl, weather})
			} else {
				message.error('获取天气信息失败')
			}
		})
	})

}

reqWeather('深圳')