import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';

import { IAssets } from '../../../../services/assets/assets.service';
import './AssetsHealth.scss';

type AssetsHealthProps = {
	assetsList: IAssets[] | undefined;
};

export const AssetsHealthComponent = ({ assetsList }: AssetsHealthProps) => {
	const [assets, setAssets] = useState(assetsList);

	const options = {
		title: null,
		chart: {
			type: 'column',
			height: '300px',
		},
		plotOptions: {
			column: {
				colorByPoint: true,
			},
		},
		yAxis: {
			title: {
				text: 'Saúde do ativo',
			},
			min: 0,
			max: 100,
		},
		series: [
			{
				showInLegend: false,
				name: 'Saúde do ativo',
				data: assets?.map((item) => {
					return item.healthscore;
				}),
			},
		],
		xAxis: {
			categories: assets?.map((item) => {
				return item.name;
			}),
		},
	};

	return (
		<div className="assets-health">
			<span className="assets-health__title">
				Gráfico de saúde atual dos ativos
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
