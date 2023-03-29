import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../pages/Home';

const settedRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

export const ProjectRoutes = () => {
	return (
		<>
			<RouterProvider router={settedRoutes} />
		</>
	);
};
