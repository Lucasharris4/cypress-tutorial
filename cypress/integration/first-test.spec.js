describe('first test', () => {
    it('should load the page', () => {
        cy.visit('http://localhost:4200/form');
    });

    it("should enter stuff into firstName box", () => {
        cy.get('#firstNameBox').type("Bruce");
    });

    it("should enter stuff into lastName box", () => {
        cy.get('#lastNameBox').type("Wayne");
    });

    it("should select angular in the radio buttons", () => {
        cy.get("input[formControlName=framework][value=react]").click();
        cy.pause();
    });
});

describe('second test', () => {
    before('', () => {
        cy.visit('/form');
    });

    it("should display a message after submit", () => {
        cy.get('.message').should('be.empty');
        cy.get('button').contains('Submit').click();
        cy.get('.message').should('have.contain', 'Submitted, thanks for your input!');
    });
})