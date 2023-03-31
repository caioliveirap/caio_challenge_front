import { mount } from 'cypress/react';
import dayjs from 'dayjs';
import { IAssets } from 'src/services/assets/assets.service';

import { AssetInfoComponent } from './AssetInfo';

describe('suit tests for AssetInfoComponent', () => {
	const assetInformation: IAssets = {
		id: 1,
		name: 'Asset 1',
		image: 'https://example.com/image.jpg',
		status: 'inOperation',
		sensors: ['sensor1', 'sensor2'],
		metrics: {
			lastUptimeAt: '',
			totalCollectsUptime: 100,
			totalUptime: 20.5,
		},
		specifications: {
			maxTemp: 100,
			rpm: 2000,
			power: 10,
		},
		healthscore: 90,
		assignedUserIds: [],
		companyId: 0,
		healthHistory: undefined,
		model: '',
		unitId: 0,
	};

	beforeEach(() => {
		mount(<AssetInfoComponent assetInformation={assetInformation} />);
	});

	it('should render the asset name', () => {
		cy.get('.ant-descriptions-item-label').contains('Nome');
		cy.get('.ant-descriptions-item-content').contains(assetInformation.name);
	});

	it('should render the asset specifications', () => {
		cy.get('.ant-descriptions-item-label').contains('Especificações');
		cy.get('.ant-descriptions-item-content').contains(
			`Temperatura máxima: ${assetInformation.specifications.maxTemp}`
		);
		cy.get('.ant-descriptions-item-content').contains(
			`Potência do equipamento ${assetInformation.specifications.maxTemp}`
		);
		cy.get('.ant-descriptions-item-content').contains(
			`Rotações ${assetInformation.specifications.maxTemp}`
		);
	});

	it('should render the total collects', () => {
		cy.get('.ant-descriptions-item-label').contains('Total de coletas');
		cy.get('.ant-descriptions-item-content').contains(
			`${assetInformation.metrics.totalCollectsUptime.toFixed(0)}`
		);
	});

	it('should render the total uptime', () => {
		cy.get('.ant-descriptions-item-label').contains('Horas coletadas');
		cy.get('.ant-descriptions-item-content').contains(
			`${assetInformation.metrics.totalUptime.toFixed(2)}`
		);
	});

	it('should render the last uptime', () => {
		cy.get('.ant-descriptions-item-label').contains('Última coleta');
		cy.get('.ant-descriptions-item-content').contains(
			dayjs(assetInformation.metrics.lastUptimeAt).format('DD/MM/YYYY HH:mm:ss')
		);
	});

	it('should render the sensors', () => {
		cy.get('.ant-descriptions-item-label').contains('Sensores');
		assetInformation.sensors.forEach((sensor) => {
			cy.get('.ant-tag').contains(sensor);
		});
	});
});
