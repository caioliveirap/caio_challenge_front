import { mount } from 'cypress/react';
import { IUser } from 'src/services/users/users.service';

import { UserFormComponent } from './UserForm';

describe('suit tests for UserFormComponent', () => {
	const initialValues: IUser = {
		id: 1,
		name: 'Unit 1',
		companyId: 123,
		unitId: 2,
		email: 'user@gmail.com',
	};

	it('displays initial values', () => {
		mount(
			<UserFormComponent
				initialValues={initialValues}
				autoCloseModal={cy.stub()}
				showMessage={cy.stub()}
			/>
		);
		cy.get('#basic_name').should('have.value', 'Unit 1');
		cy.get('#basic_companyId').should('have.value', '123');
		cy.get('#basic_unitId').should('have.value', 2);
		cy.get('#basic_email').should('have.value', 'user@gmail.com');

		cy.contains('Editar').should('exist');
	});

	it('submits edit form', () => {
		mount(
			<UserFormComponent
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
		cy.get('#basic_unitId').clear().type('2');
		cy.get('#basic_email').clear().type('user2@gmail.com');

		cy.contains('Editar').click();
	});

	it('submits add form', () => {
		mount(
			<UserFormComponent
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
		cy.get('#basic_unitId').clear().type('3');
		cy.get('#basic_email').clear().type('user3@gmail.com');
		cy.contains('Adicionar').click();
	});

	it('should return email error', () => {
		mount(
			<UserFormComponent
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
		cy.get('#basic_unitId').clear().type('3');
		cy.get('#basic_email').clear().type('userwrongemail');
		cy.contains('Adicionar').click();
		cy.get('.ant-form-item-explain-error').should(
			'have.text',
			'Por favor insira um email válido!'
		);
	});
});
