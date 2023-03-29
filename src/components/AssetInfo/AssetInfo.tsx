import { Descriptions, Progress, Tag } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { IAssets } from 'src/services/assets/assets.service';

import './AssetInfo.scss';

type AssetInfoProps = {
	assetInformation: IAssets | undefined;
};

export const AssetInfoComponent = ({ assetInformation }: AssetInfoProps) => {
	const [asset, setAssetInfo] = useState(assetInformation);
	const statusTags: any = {
		inAlert: <Tag color="red">Em alerta</Tag>,
		inDowntime: <Tag color="blue">Em manutenação</Tag>,
		inOperation: <Tag color="green">Em operação</Tag>,
	};
	return (
		<div className="asset-info__container">
			<img src={asset?.image} alt="" />

			<div className="asset-info__content">
				<Descriptions title="Detalhes do ativo" bordered>
					<Descriptions.Item span={3} label="Nome">
						{asset?.name}
					</Descriptions.Item>
					<Descriptions.Item span={3} label="Especificações">
						{asset?.specifications.maxTemp && (
							<>Temperatura máxima: {asset?.specifications.maxTemp} </>
						)}
						{asset?.specifications.power && (
							<>
								<br />
								Potência do equipamento {asset?.specifications.maxTemp}{' '}
							</>
						)}
						<br />
						{asset?.specifications.rpm && (
							<>
								<br />
								Rotações {asset?.specifications.maxTemp}{' '}
							</>
						)}
					</Descriptions.Item>
					<Descriptions.Item span={3} label="Total de coletas">
						{asset?.metrics.totalCollectsUptime.toFixed(0)}
					</Descriptions.Item>
					<Descriptions.Item span={3} label="Horas coletadas">
						{asset?.metrics.totalUptime.toFixed(2)}
					</Descriptions.Item>
					<Descriptions.Item span={3} label="Última coleta">
						{dayjs(asset?.metrics.lastUptimeAt).format('DD/MM/YYYY HH:mm:ss')}
					</Descriptions.Item>
					<Descriptions.Item span={3} label="Sensores">
						{asset?.sensors.map((sensor) => {
							return <Tag color="blue">{sensor}</Tag>;
						})}
					</Descriptions.Item>
					<Descriptions.Item span={3} label="Status">
						{statusTags[asset?.status as any]}
					</Descriptions.Item>
					<Descriptions.Item span={3} label="Saúde">
						<Progress percent={asset?.healthscore} />
					</Descriptions.Item>
				</Descriptions>
			</div>
		</div>
	);
};
