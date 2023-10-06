/// <reference types="Cypress" />

describe('contact form specs', () => {
	it('should submit contact form', () => {
		cy.visit('http://127.0.0.1:5173/about');
		cy.get('[data-cy="contact-input-message"]').type('My message');
		cy.get('[data-cy="contact-input-name"]').type('My name');
		// cy.get('[data-cy="contact-input-email"]').type('My email@gmail.com');

		// If instead of a click, we also want to check to submit the form by pressing enter.
		// then we can add it to the type function as an attribute in the end as follows:
		cy.get('[data-cy="contact-input-email"]').type(
			'My email@gmail.com{enter}'
		);

		// cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
		// cy.get('[data-cy="contact-btn-submit"]').should(
		// 	'not.have.attr',
		// 	'disabled'
		// );
		// cy.get('[data-cy="contact-btn-submit"]')
		// 	.contains('Send Message')
		// 	.should('not.have.attr', 'disabled'); // works the same way as above.

		// If we want to work with an element instead of an Cypress Chainable object,
		// we can make use of .then()
		// this returns the subject element of the get.
		// e.g.: cy.get('div').then((el) => ...) in this case here returns the subject element div
		// cy.get('[data-cy="contact-btn-submit"]').then((el) => {
		// 	expect(el.attr('disabled')).to.be.undefined;
		// 	expect(el.text()).to.equal('Send Message');
		// });

		// cy.get('[data-cy="contact-btn-submit"]').click();
		// cy.get('[data-cy="contact-btn-submit"]').contains('Sending');
		// cy.get('[data-cy="contact-btn-submit"]').should(
		// 	'have.attr',
		// 	'disabled'
		// );

		// For the repeated button selections, we can store them in a variable,
		// But this doesnt store the element itself in the variable, it is Cypress Chainable object.
		// Therefore, it might not always work as expected.
		// const btn = cy.get('[data-cy="contact-btn-submit"]');
		// btn.click();
		// btn.contains('Sending');
		// btn.should('have.attr', 'disabled');

		// Few disadvantages of this approach of storing in variables,
		// 1. Timing and asynchronous behaviour of Cypress
		// 2. DOM changes : the element which is stored might have changed
		// 3. Command Queuing
		// 4. Messes up with Automatic retries.

		// Other recommended approach is to use Alias (this works always as expected)
		cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
		// cy.get('@submitBtn').click();
		cy.get('@submitBtn').contains('Sending');
		cy.get('@submitBtn').should('have.attr', 'disabled');
	});
});
