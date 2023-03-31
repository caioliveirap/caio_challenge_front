import { Route, Routes } from 'react-router-dom';
import { AssetDetail } from 'src/pages/Assets/Components/AssetDetails';
import { AssetList } from 'src/pages/Assets/Components/AssetList';
import { Units } from 'src/pages/Units';
import { Users } from 'src/pages/Users';
import { Workorder } from 'src/pages/Workorders';

import { Home } from '../pages/Home';

export const ProjectRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/ativos/:id" element={<AssetDetail />}></Route>
				<Route path="/ativos" element={<AssetList />}></Route>
				<Route path="/ordem-de-servico" element={<Workorder />}></Route>
				<Route path="/unidades" element={<Units />}></Route>
				<Route path="/usuarios" element={<Users />}></Route>
			</Routes>
		</>
	);
};
