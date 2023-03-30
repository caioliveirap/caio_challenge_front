import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';

import { IAssets } from '../../services/assets/assets.service';
import './AssetsStatus.scss';

type AssetsStatusProps = {
	assetsList: IAssets[] | undefined;
};

export const AssetsStatusComponent = ({ assetsList }: AssetsStatusProps) => {
	const getChartData = () => {
		const statusName: any = {
			inAlert: 'Em alerta',
			inDowntime: 'Em manutenação',
			inOperation: 'Em operação',
		};

		const statusCounts: any = {
			inAlert: 0,
			inDowntime: 0,
			inOperation: 0,
		};

		const statusColors: any = {
			inAlert: '#ff726f',
			inDowntime: '#95CEFF',
			inOperation: '#90ED7D',
		};

		assets?.forEach((item) => {
			statusCounts[item.status]++;
		});

		const newObject = Object.keys(statusCounts).map((status) => {
			return {
				name: statusName[status],
				y: statusCounts[status],
				color: statusColors[status],
			};
		});
		return newObject;
	};

	const [assets, setAssets] = useState(assetsList);
	const [pieChartData, setPieChartData] = useState(getChartData());

	const options = {
		title: null,
		chart: {
			type: 'pie',
			height: '300px',
		},
		series: [
			{
				name: 'Status',
				data: pieChartData,
			},
		],
	};

	console.log(assets);
	console.log(pieChartData);

	return (
		<div className="assets-health">
			<span className="assets-health__title">
				Gráfico de status atual dos ativos
			</span>
			<div className="assets-health__chart">
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
					containerProps={{ style: { width: '100%' } }}
				/>
			</div>
		</div>
	);
};
