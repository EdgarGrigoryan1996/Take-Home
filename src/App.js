import Welcome from "./pages/welcome/Welcome";
import Perconal from "./pages/personal/Personal"
import Birthday from "./pages/birthday/Birthday"
import Agreement from "./pages/agreement/Agreement"
import User from "./pages/user/User"
import Header from "./Shared/Header";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import { useSelector } from "react-redux"
import { useEffect } from "react"
function App() {
	const state = useSelector((state) => {
		return state
	})
	useEffect(() => {
		console.log(state)
	}, [state])
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="main-wrapper">
					<Routes>
						<Route exact path="/" element={<Welcome />}></Route>
						<Route path="/perconal" element={<Perconal />}></Route>
						<Route path="/dob" element={<Birthday />}></Route>
						<Route path="/agreement" element={<Agreement />}></Route>
						<Route path="/user" element={<User />}></Route>
					</Routes>
				</div>
			</div>

		</Router>

	);
}

export default App;
