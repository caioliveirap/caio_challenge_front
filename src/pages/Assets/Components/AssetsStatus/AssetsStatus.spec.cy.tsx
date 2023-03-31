import { mount } from 'cypress/react';
import { IAssets } from 'src/services/assets/assets.service';

import { AssetsStatusComponent } from './AssetsStatus';

describe('suit tests for AssetsStatusComponent', () => {
	const assetsList: IAssets[] = [
		{
			assignedUserIds: [],
			companyId: 0,
			healthHistory: {},
			healthscore: 80,
			id: 0,
			image: '',
			metrics: {
				totalCollectsUptime: 0,
				totalUptime: 0,
				lastUptimeAt: '',
			},
			model: '',
			name: 'Asset 1',
			sensors: [],
			specifications: {
				maxTemp: 0,
				power: 0,
				rpm: 0,
			},
			status: '',
			unitId: 0,
		},
		{
			assignedUserIds: [],
			companyId: 0,
			healthHistory: {},
			healthscore: 90,
			id: 0,
			image: '',
			metrics: {
				totalCollectsUptime: 0,
				totalUptime: 0,
				lastUptimeAt: '',
			},
			model: '',
			name: 'Asset 2',
			sensors: [],
			specifications: {
				maxTemp: 0,
				power: 0,
				rpm: 0,
			},
			status: '',
			unitId: 0,
		},
		{
			assignedUserIds: [],
			companyId: 0,
			healthHistory: {},
			healthscore: 70,
			id: 0,
			image: '',
			metrics: {
				totalCollectsUptime: 0,
				totalUptime: 0,
				lastUptimeAt: '',
			},
			model: '',
			name: 'Asset 3',
			sensors: [],
			specifications: {
				maxTemp: 0,
				power: 0,
				rpm: 0,
			},
			status: '',
			unitId: 0,
		},
	];

	beforeEach(() => {
		mount(<AssetsStatusComponent assetsList={assetsList} />);
	});

	it('should render the component', () => {
		cy.get('.assets-health').should('be.visible');
	});

	it('should render the title', () => {
		cy.get('.assets-health__title').should(
			'have.text',
			'Gráfico de status atual dos ativos'
		);
	});

	it('should render the chart', () => {
		cy.get('.assets-health__chart').find('svg').should('be.visible');
	});
});
