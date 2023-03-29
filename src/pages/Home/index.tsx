import { Card } from 'antd';
import { useQuery } from 'react-query';

import { AssetsHealthComponent } from '../../components/AssetsHealth/AssetsHealth';
import { AssetsStatusComponent } from '../../components/AssetsStatus/AssetsStatus';
import { getAllAssets } from '../../services/assets/assets.service';
import './home.scss';

export const Home = () => {
	const { isLoading, data } = useQuery('assetsData', async () => {
		const result = await getAllAssets();
		return result;
	});

	return (
		<div className="homepage">
			<Card loading={isLoading}>
				<AssetsHealthComponent assetsList={data} />
			</Card>
			<Card loading={isLoading}>
				<AssetsStatusComponent assetsList={data} />
			</Card>
		</div>
	);
};
