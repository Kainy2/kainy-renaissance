/** @format */



import React from 'react';

import AllUsers from "./components/AllUsers"
import Sidebar from "./components/Sidebar"

const App =() => {
	return (
		<div ClassName='flex'>
			<div>
				Hello world
			<Sidebar />
			</div>
			<div>

			<AllUsers />
			</div>
 		</div>
	)
}

export default App
