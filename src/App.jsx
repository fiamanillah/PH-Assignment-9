import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="prose max-w-none">
			<h1 className="text-red-400">Hello</h1>
			<Outlet />
		</div>
	);
}

export default App;
