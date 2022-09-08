describe('Home Page Tests', () => {

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.instructure.com/es')
  })

  it('It should navigate to the DEMO page', () => {
    
    cy.get('#block-getademo').contains('SOLICITAR UNA DEMO').click()
    cy.url().should('include', 'request-demo')
  })

  describe('Div block for Cookies policies', () => {
    it('should Accept the Cookies for the website', () => {
      cy.get('#onetrust-accept-btn-handler').contains('I Accept').click()
      cy.get('#onetrust-accept-btn-handler').should('not.exist')
    })

    it('should Accept the Cookies for the website', () => {
      cy.get('#onetrust-policy-text').should('include', 'By continuing to browse or by clicking')
    })
  })

})