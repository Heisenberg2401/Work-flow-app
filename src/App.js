import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header'

import Login from './Login'
import Signup from './Signup'
import CreateWorkflow from './workflow'
import Flowview from './Flowview'



function App() {

  
	
	return (
		<Router className="App">
			<div className="App">	
				<Switch>
					<Route path = "/Login">
						<Login />
					</Route>
					<Route path = "/Flowview">
						<Flowview />
					</Route>
					<Route path = "/create">
						<CreateWorkflow />
					</Route>
          <Route path = "/Signup">
						<Signup />
					</Route>
					<Route path = "/">	
          <Header />

					</Route>
				</Switch>
			</div>
		</Router>

	)

}

export default App