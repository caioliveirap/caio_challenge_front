import { Button, Card } from 'antd';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from 'src/components/LoadingComponent/Loading';
import { AssetInfoComponent } from 'src/pages/Assets/Components/AssetInfo/AssetInfo';
import { getSingleAsset } from 'src/services/assets/assets.service';
import { TabTitle } from 'src/utils';

import '../ativos.scss';

export const AssetDetail = () => {
	TabTitle('Detalhes dos Ativos');

	const navigate = useNavigate();
	const params = useParams();

	const { isLoading, data } = useQuery(['assetDetail', params.id], async () => {
		const result = await getSingleAsset(Number(params.id));
		return result;
	});

	if (isLoading) return <Loading />;

	return (
		<div className="asset-details">
			<Button
				type="primary"
				icon={<AiOutlineArrowLeft />}
				onClick={() => {
					navigate('/ativos');
				}}
			>
				Voltar a lista
			</Button>
			<Card loading={isLoading} bodyStyle={{ padding: '0' }}>
				<AssetInfoComponent assetInformation={data} />
			</Card>
		</div>
	);
};
