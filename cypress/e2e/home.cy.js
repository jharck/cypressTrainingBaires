describe('Home Page Tests', () => {

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.instructure.com/es')
  })

  describe('Div block for Cookies policies', () => {
  //   it('should Accept the Cookies for the website', () => {
  //     cy.get('#onetrust-accept-btn-handler').contains('I Accept').click()
  //     cy.get('#onetrust-accept-btn-handler').should('not.exist')
  //   })

    it('should Accept the Cookies for the website', () => {
      cy.get('#onetrust-banner-sdk').should('contain', 'By continuing to browse')
    })
  })

  describe('Access the DEMO form', () => {
  
    it('It should navigate to the DEMO page and fill the form', () => {
    
      cy.get('#block-getademo').contains('SOLICITAR UNA DEMO').click()

      cy.url().should('include', 'request-demo')

      cy.get('#edit-first-name--2').type('Javier')

      cy.get('#edit-last-name--2').type('Romero')

      cy.get('#edit-email--2').type('javier@test.com')

      cy.get('#edit-phone--2')

      cy.get('#edit-country--2').select('El Salvador').should('have.value', 'El Salvador')

      cy.get('#edit-job-title-es--2')

      cy.get('#edit-organization--2')

      cy.get('#edit-organization-type-es--2')

      cy.get('#edit-fte-range-es--2')

      cy.get('#edit-consent--2')

      cy.get('#edit-submit--2').click()
    })

  })

  

})