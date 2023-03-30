import {
	Route,
	RouterProvider,
	Routes,
	createBrowserRouter,
} from 'react-router-dom';
import { AssetDetail } from 'src/pages/Assets/AssetDetails';
import { AssetList } from 'src/pages/Assets/AssetList';
import { Workorder } from 'src/pages/Workorders';

import { Home } from '../pages/Home';

const settedRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/ativos/:id',
		element: <AssetDetail />,
	},
	{
		path: '/ativos',
		element: <AssetList />,
	},
]);

export const ProjectRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/ativos/:id" element={<AssetDetail />}></Route>
				<Route path="/ativos" element={<AssetList />}></Route>
				<Route path="/ordem-de-servico" element={<Workorder />}></Route>
			</Routes>
		</>
	);
};
