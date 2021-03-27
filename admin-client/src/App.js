import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Login from './pages/login'
import Admin from './pages/admin'

class App extends Component {
	render () {
		return (
			<Router>
				<Switch>
					<Route path='/login' component={Login}></Route>
					<Route path='/' component={Admin}></Route>
				</Switch>
			</Router>
		)
	}

}

export default App