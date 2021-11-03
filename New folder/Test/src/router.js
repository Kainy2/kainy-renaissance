/** @format */

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Home from "./pages/home"

const MainRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"  />
			</Switch>
		</Router>
	)
}

export default MainRouter
