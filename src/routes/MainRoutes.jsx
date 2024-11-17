import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Page1 from "../pages/Page1";
import Error from "../pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "page1",
				element: <Page1 />,
			},
		],
	},
	{
		path: "/404",
		element: <Error />,
	},
]);

function MainRoutes() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default MainRoutes;
