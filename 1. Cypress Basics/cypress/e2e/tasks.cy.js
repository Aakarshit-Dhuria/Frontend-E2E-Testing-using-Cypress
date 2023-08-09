/// <reference types="Cypress" />;

describe('tasks managemenet spec', () => {
	it('should open and close the new task modal', () => {
		cy.visit('http://127.0.0.1:5173/');

		cy.contains('Add Task').click();
		cy.get('.modal');
		cy.get('.backdrop').click({ force: true });
		cy.get('.modal').should('not.exist');
		cy.get('.backdrop').should('not.exist');

		cy.contains('Add Task').click();
		cy.contains('Cancel').click();
		cy.get('.modal').should('not.exist');
		cy.get('.backdrop').should('not.exist');
	});

	it('should add a new task', () => {
		cy.visit('http://127.0.0.1:5173/');

		cy.contains('Add Task').click();
		cy.get('.modal');
		cy.get('.modal #title').type('New Task');
		cy.get('.modal #summary').type('Some description');
		cy.get('.modal').contains('Add Task').click();

		cy.get('.modal').should('not.exist');
		cy.get('.backdrop').should('not.exist');

		cy.get('.task').should('have.length', 1);
		cy.get('.task h2').contains('New Task');
		cy.get('.task p').contains('Some description');
		// cy.get('.task h2').should('have.text', 'New Task');
		// cy.get('.task p').should('have.text', 'Some description');
	});

	it('should validate user input', () => {
		cy.visit('http://127.0.0.1:5173/');

		cy.contains('Add Task').click();
		cy.get('.modal').contains('Add Task').click();
		cy.contains('Please provide values');
	});

	it('should correctly add multiple tasks', () => {
		cy.visit('http://127.0.0.1:5173/');

		cy.contains('Add Task').click();
		cy.get('.modal #title').type('Task 1');
		cy.get('.modal #summary').type('First Task');
		cy.get('.modal').contains('Add Task').click();

		cy.contains('Add Task').click();
		cy.get('.modal #title').type('Task 2');
		cy.get('.modal #summary').type('Second Task');
		cy.get('.modal').contains('Add Task').click();

		cy.get('.task').eq(0).contains('Task 1'); // can also use first() instead of eq(0)
		cy.get('.task').eq(1).contains('Task 2'); // can also use last() instead of eq(1)
	});
});
