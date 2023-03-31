import { mount } from 'cypress/react';
import { IAssets } from 'src/services/assets/assets.service';

import { AssetsHealthComponent } from './AssetsHealth';

describe('suit tests for AssetsHealthComponent', () => {
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

	it('should render the component with the assets data', () => {
		mount(<AssetsHealthComponent assetsList={assetsList} />);

		cy.get('.assets-health__title').should(
			'have.text',
			'Gráfico de saúde atual dos ativos'
		);
		cy.get('.highcharts-container')
			.should('be.visible')
			.within(() => {
				cy.get('.highcharts-series')
					.should('have.length', 1)
					.within(() => {
						cy.get('.highcharts-point').should('have.length', 3);
						cy.get('.highcharts-point:nth-child(1)').should('exist');
						cy.get('.highcharts-point:nth-child(2)').should('exist');
						cy.get('.highcharts-point:nth-child(3)').should('exist');
					});
				cy.get('.highcharts-xaxis-labels text')
					.should('have.length', 3)
					.then((labels) => {
						expect(labels[0].textContent).to.equal('Asset 1');
						expect(labels[1].textContent).to.equal('Asset 2');
						expect(labels[2].textContent).to.equal('Asset 3');
					});
			});
	});

	it('should render the component without assets data', () => {
		mount(<AssetsHealthComponent assetsList={undefined} />);
		cy.get('.assets-health__title').should(
			'have.text',
			'Gráfico de saúde atual dos ativos'
		);
		cy.get('.highcharts-point').should('have.length', 0);
	});
});
