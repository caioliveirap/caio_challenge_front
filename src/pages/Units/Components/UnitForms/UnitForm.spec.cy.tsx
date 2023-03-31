import { mount } from 'cypress/react';

import { UnitFormComponent } from './UnitForm';

describe('suit tests for UnitFormComponent', () => {
	const initialValues = { id: 1, name: 'Unit 1', companyId: 123 };

	it('displays initial values', () => {
		mount(
			<UnitFormComponent
				initialValues={initialValues}
				autoCloseModal={cy.stub()}
				showMessage={cy.stub()}
			/>
		);
		cy.get('#basic_name').should('have.value', 'Unit 1');
		cy.get('#basic_companyId').should('have.value', '123');
		cy.contains('Editar').should('exist');
	});

	it('submits edit form', () => {
		mount(
			<UnitFormComponent
				initialValues={initialValues}
				autoCloseModal={cy.stub()}
				showMessage={cy.stub()}
			/>
		);
		cy.intercept('PUT', '/api/units/1', (req) => {
			req.reply(200);
			expect(req.body.name).to.equal('Unit 2');
			expect(req.body.companyId).to.equal(456);
		});
		cy.get('#basic_name').clear().type('Unit 2');
		cy.get('#basic_companyId').clear().type('456');
		cy.contains('Editar').click();
	});

	it('submits add form', () => {
		mount(
			<UnitFormComponent
				initialValues={undefined}
				autoCloseModal={cy.stub()}
				showMessage={cy.stub()}
			/>
		);
		cy.intercept('POST', '/api/units', (req) => {
			req.reply(200);
			expect(req.body.name).to.equal('Unit 3');
			expect(req.body.companyId).to.equal(789);
		});

		cy.get('#basic_name').clear().type('Unit 3');
		cy.get('#basic_companyId').clear().type('789');
		cy.contains('Adicionar').click();
	});
});
