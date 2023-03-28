import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const settedRoutes = createBrowserRouter([
	{
		path: '/',
		element: <span>test</span>,
	},
]);

export const ProjectRoutes = () => {
	return (
		<>
			<RouterProvider router={settedRoutes} />
		</>
	);
};
