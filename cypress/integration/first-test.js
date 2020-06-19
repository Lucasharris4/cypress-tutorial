describe('first test', () => {
    it('should load the page', () => {
        cy.visit('http://localhost:4200/form');
    });

    it("should enter stuff into firstName box", () => {
        cy.get('#firstNameBox').type("testing 123");
    })
});