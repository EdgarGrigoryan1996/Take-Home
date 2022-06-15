import Welcome from "./pages/welcome/Welcome";
import Header from "./Shared/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="main-wrapper">
				<Welcome />

			</div>
		</div>
	);
}

export default App;
