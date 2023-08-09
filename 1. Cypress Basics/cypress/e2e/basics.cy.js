/// <reference types="Cypress" />;

describe('main page specs', () => {
	it('should render the main page image', () => {
		cy.visit('http://127.0.0.1:5173/');
		// cy.get('.main-header img'); // this works fine
		cy.get('.main-header').find('img'); // this works same as above
		// cy.get('.main-header').get('img') // this wont work as expected.
	});

	it('should have a page title', () => {
		cy.visit('http://127.0.0.1:5173/');
		cy.get('h1').should('have.length', 1);
		cy.get('h1').contains('My Cypress Course Tasks');
	});

	it('should have a page find', () => {
		cy.visit('http://127.0.0.1:5173/');
		cy.get('main').find('#task-control').find('select');
	});
});
