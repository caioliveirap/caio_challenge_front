import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Sidenav } from '../components/Sidenav/Sidenav';

const settedRoutes = createBrowserRouter([
	{
		path: '/',
		element: <span>test</span>,
	},
]);

export const ProjectRoutes = () => {
	return (
		<>
			<Sidenav />
			<RouterProvider router={settedRoutes} />
		</>
	);
};
