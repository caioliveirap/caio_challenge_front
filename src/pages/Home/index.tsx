import { Card } from 'antd';
import { useQuery } from 'react-query';
import { Loading } from 'src/components/LoadingComponent/Loading';
import { AssetsHealthComponent } from 'src/pages/Assets/Components/AssetsHealth/AssetsHealth';
import { AssetsStatusComponent } from 'src/pages/Assets/Components/AssetsStatus/AssetsStatus';
import { getAllAssets } from 'src/services/assets/assets.service';
import { TabTitle } from 'src/utils';

import './home.scss';

export const Home = () => {
	TabTitle('Dashboard');

	const { isLoading, data } = useQuery('assetsData', async () => {
		const result = await getAllAssets();
		return result;
	});

	if (isLoading) return <Loading />;

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
