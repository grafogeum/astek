import { DefaultLayout } from "./layouts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<nav>
				<Link to="/">Home</Link>
			</nav>
			<Routes>
				<Route path="/" element={<DefaultLayout />} />
				<Route path="*" element={<div>Error....</div>} />
			</Routes>
		</Router>
	);
}

export default App;
