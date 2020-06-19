describe('first test', () => {
    //https://www.npmjs.com/package/cypress-log-to-output

    before(() => {
        
    })
    
    beforeEach(() => {
        Cypress.Screenshot.defaults({
            screenshotOnRunFailure: false,
          });
        cy.visit('localhost:8080/index.html');
    });

    it('should load the page', ()=> {
        cy.exec('echo foo');
        cy.log('log is working')
        cy.get('h1').contains('Welcome to');
    });

    it('should retry five times and if the value is ever 2 then the test will pass', () => {
        cy.window().then((win) => {   cy.spy(win.console, "error") })

        console.log('current retry', Cypress.currentTest.currentRetry());
        if (Cypress.currentTest.currentRetry() > 0) {
            cy.log("retry occuring");
        }
        cy.get('p').contains('2');
    })
});