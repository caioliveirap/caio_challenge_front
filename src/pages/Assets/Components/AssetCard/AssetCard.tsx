import { Button, Card, Descriptions, Progress, Tag } from 'antd';
import { Image } from 'antd';
import { useState } from 'react';
import { BsSpeedometer } from 'react-icons/bs';
import { FaBolt, FaTemperatureHigh } from 'react-icons/fa';
import { redirect, useNavigate } from 'react-router-dom';
import { IAssets } from 'src/services/assets/assets.service';

import './AssetCard.scss';

type AssetCardProps = {
	assetInfo: IAssets | undefined;
};

export const AssetCardComponent = ({ assetInfo }: AssetCardProps) => {
	const [asset, setAssetCard] = useState(assetInfo);
	const navigate = useNavigate();

	const statusTags: any = {
		inAlert: <Tag color="red">Em alerta</Tag>,
		inDowntime: <Tag color="blue">Em manutenação</Tag>,
		inOperation: <Tag color="green">Em operação</Tag>,
	};
	console.log(asset);
	return (
		<div className="asset-card__container">
			<Card
				style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
				bodyStyle={{ padding: '8px', width: '100%' }}
				hoverable={true}
			>
				<div className="asset-card__content">
					<Image src={asset?.image} />
					<div className="asset-card-description">
						<span className="asset-card-description__title">{asset?.name}</span>
						{statusTags[asset?.status as any]}
					</div>
					<div className="asset-card-specifications">
						<span className="asset-card-specifications__title">
							Especificações
						</span>
						<div className="asset-card-specifications__details">
							{asset?.specifications.maxTemp && (
								<span>
									<FaTemperatureHigh color="#bf0000" />
									{asset?.specifications.maxTemp} °C
								</span>
							)}

							{asset?.specifications.rpm &&
								asset?.specifications.rpm !== null && (
									<span>
										<BsSpeedometer color="#00008B" />
										{asset?.specifications.rpm} RPM
									</span>
								)}
							{asset?.specifications.power ? (
								<span>
									<FaBolt color="#f9da35" />
									{asset?.specifications.power} kWh
								</span>
							) : null}
						</div>
					</div>

					<Button
						className="asset-card-description__button"
						size="small"
						type="primary"
						onClick={() => {
							console.log(redirect(`/ativos/${asset?.id}`));
							navigate(`/ativos/${asset?.id}`);
						}}
					>
						Ver detalhes
					</Button>
				</div>
			</Card>
		</div>
	);
};
