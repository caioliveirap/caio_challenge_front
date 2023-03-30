import { useQuery } from 'react-query';
import { AssetCardComponent } from 'src/components/AssetCard/AssetCard';
import { Loading } from 'src/components/LoadingComponent/Loading';
import { getAllAssets } from 'src/services/assets/assets.service';

import '../ativos.scss';

export const AssetList = () => {
	const { isLoading, data } = useQuery('assetsData', async () => {
		const result = await getAllAssets();
		return result;
	});

	if (isLoading) return <Loading />;

	return (
		<div className="assets">
			<div className="assets-list">
				<div className="assets-list__cards">
					{data?.map((asset) => {
						return <AssetCardComponent assetInfo={asset}></AssetCardComponent>;
					})}
				</div>
			</div>
		</div>
	);
};