import { Card } from 'antd';
import dayjs from 'dayjs';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import timeline from 'highcharts/modules/timeline';
import { IAssets } from 'src/services/assets/assets.service';

// import './AssetTimeline.scss';

type AssetTimelineProps = {
	assetInformation: IAssets | undefined;
};

export const AssetTimelineComponent = ({
	assetInformation,
}: AssetTimelineProps) => {
	HighchartsExporting(Highcharts);
	timeline(Highcharts);

	const statusTags: any = {
		inAlert: 'Em alerta',
		inDowntime: 'Em manutenação',
		inOperation: 'Em operação',
		unplannedStop: 'Parada indesejada',
		plannedStop: 'Parada planejada',
	};

	const statusColors: any = {
		inAlert: '#ff726f',
		inDowntime: '#95CEFF',
		inOperation: '#90ED7D',
		unplannedStop: '#ff726f',
		plannedStop: '#95CEFF',
	};

	const options = {
		title: {
			text: 'Histórico de saúde do ativo',
		},
		chart: {
			type: 'timeline',
		},
		xAxis: {
			visible: false,
		},
		yAxis: {
			visible: false,
		},
		// series: [
		// 	{
		// 		data: [
		// 			{
		// 				name: '2000: Orbiting of an asteroid',
		// 				description:
		// 					'14 February 2000, first orbiting of an asteroid (433 Eros).',
		// 			},
		// 			{
		// 				name: '2005: Landing on Titan.',
		// 				description:
		// 					'14 January 2005, first soft landing on Titan also first soft landing in the outer Solar System.',
		// 			},
		// 			{
		// 				name: '2011: Orbit of Mercury',
		// 				description: '18 March 2011, first spacecraft to orbit Mercury.',
		// 			},
		// 			{
		// 				name: '2015: Food eaten in space',
		// 				description:
		// 					'10 August 2015, first food grown in space and eaten (lettuce).',
		// 			},
		// 			{
		// 				name: '2019: Black hole photograph',
		// 				description:
		// 					'10 April 2019, first direct photograph of a black hole and its vicinity.',
		// 			},
		// 			{
		// 				name: '2020: Private spaceflight',
		// 				description:
		// 					'30 May 2020, first orbital human spaceflight launched by a private company (SpaceX).',
		// 			},
		// 		],
		// 	},
		// ],
		series: [
			{
				data: assetInformation?.healthHistory.map((item: any) => {
					return {
						name: dayjs(item.timestamp).format('DD/MM/YYYY HH:mm:ss'),
						label: statusTags[item.status],
						description: statusTags[item.status],
						color: statusColors[item.status],
					};
				}),
			},
		],
	};

	// const options = {
	// 	title: {
	// 		text: null,
	// 	},

	// 	series: [
	// 		{
	// 			type: 'timeline',
	// 			data: [1, 2, 3],
	// 		},
	// 	],
	// };

	return (
		<div className="asset-card__container">
			<Card
				style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
				// bodyStyle={{ padding: '8px', width: '100%' }}
				// hoverable={true}
			>
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
					containerProps={{ style: { width: '100%' } }}
				/>

				{/* <div className="asset-card__content">
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
				</div> */}
			</Card>
		</div>
	);
};
