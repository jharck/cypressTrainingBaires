describe('Home Page Tests', () => {

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test

    // Nice HW: Create your form in english and open the demo page in english 
    // (remember: english is default and it doesn't show in the url. tip: ternary operation might do the trick here)
    cy.visit(`https://www.instructure.com/${Cypress.env('language')}`)
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
    // HW: now that we will have more test cases, perhaps we should have a common way of navigating to the demo page


    it('It should navigate to the DEMO page and fill the form', () => {
      cy.get('#block-getademo').contains('SOLICITAR UNA DEMO').click()
      cy.url().should('include', 'request-demo')

      // https://docs.cypress.io/api/commands/then#Syntax
      cy.get('form.webform-submission-form').then(() => {
        cy.fixture(`demo-form/${Cypress.env('language')}.json`).then((form) => {
          cy.get(buildSelector('edit-first-name')).type(form.firstName)
          cy.get(buildSelector('edit-last-name')).type(form.lastName)
          cy.get(buildSelector('edit-email')).type(form.email)
          cy.get(buildSelector('edit-phone')).type('7777-8888')

          // HW: assert El Salvador and Brasil exists on the dropdown
          cy.get(buildSelector('edit-country')).select('El Salvador').should('have.value', 'El Salvador')

          // HW: You will probably have to fix some data-* when switching the form to portuguese
          cy.get(buildSelector(`edit-job-title-${Cypress.env('language')}`)).select('Director').should('have.value', 'Director')
          cy.get(buildSelector('edit-organization')).type('Organizacion')
          cy.get(buildSelector(`edit-organization-type-${Cypress.env('language')}`))
          cy.get(buildSelector('edit-how-can-we-help'))
          cy.get(buildSelector('edit-fte-range'))

          // HW: How to select/mark a checkbox?
          cy.get(buildSelector('edit-consent'))

          // HW: Submit the form
          // HW: Assert that the form navigates to some page, or give some specific message!
          cy.get(buildSelector('edit-submit')).click()
          cy.get('.messages')
          cy.get('.messages__list > :nth-child(1)')
        })
      })
    })

    it('Should throw error if one or more required fields missing', () => {
      // HW: Assert the error messages
    })
  })
})

// ES5 function declaration
// function(param) {
//   return 'something'
// }

// ES6 long function declaration
// const fn = (param) => {
//   return 'something'
// }

// ES6 short fn declaration
const buildSelector = elementIdentifier => `[data-drupal-selector="${elementIdentifier}"]`