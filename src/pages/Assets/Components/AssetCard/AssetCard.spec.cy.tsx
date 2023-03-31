import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';

import { AssetCardComponent } from './AssetCard';

describe('suit tests for AssetCardComponent', () => {
	const assetInfo: any = {
		id: 1,
		name: 'Asset 1',
		image: 'https://example.com/image.jpg',
		status: 'inOperation',
		specifications: {
			maxTemp: 100,
			rpm: 2000,
			power: 10,
		},
	};

	beforeEach(() => {
		mount(
			<MemoryRouter>
				<AssetCardComponent assetInfo={assetInfo} />
			</MemoryRouter>
		);
	});

	it('should render the asset name', () => {
		cy.get('.asset-card-description__title').should('contain', assetInfo.name);
	});

	it('should render the asset status tag', () => {
		cy.get('.asset-card-description__title')
			.siblings()
			.should('contain', 'Em operação');
	});

	it('should render the asset specifications', () => {
		cy.get('.asset-card-specifications__details').should('contain', '100 °C');
		cy.get('.asset-card-specifications__details').should('contain', '2000 RPM');
		cy.get('.asset-card-specifications__details').should('contain', '10 kWh');
	});
});
