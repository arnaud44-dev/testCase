
describe(`Test Case`, () => {
  before(() => {
    cy.visit('fr/me/settings/account')
    //login and password
    cy.get('#email_login').type('inqom.qaautomationapplicant@gmail.com');
    cy.get('#password').type('o5N,d5ZR@R7^');
    // click button
    cy.get('[data-testid="login-button-submit"]').click();
    // upload photo
    const filepath = '/img/inqom.png'
    cy.findByText('Importer une image').attachFile(filepath, { subjectType: 'drag-n-drop' });
  })

  it("_profile-avatar data are updated", () => {
    // check photo uploaded
    cy.get('#avatar').should('be.visible')
      .find('img')
      .should('have.attr', 'src')
  })
})
