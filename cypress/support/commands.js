// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => { 
    const formdata = new FormData() 
    formdata.append('log', usuario) 
    formdata.append('pwd', senha) 
    formdata.append('wp-submit', 'Acessar') 
    formdata.append('redirect_to', `/wp-admin`) 
    formdata.append('testcookie', 1) 
    cy.request({ url: `/wp-login.php`, method: "POST", body: formdata }) 
    cy.visit('minha-conta') 

});

Cypress.Commands.add('checkout', (nome, sobrenome, empresa, endereco, cidade, cep, telefone, email) => { 
    cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').type(empresa)
        cy.get('#select2-billing_country-container')
        cy.get('#billing_address_1').type(endereco)
        cy.get('#billing_city').type(cidade)
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
        cy.get('#billing_email').type(email)
        cy.get('#place_order').click()
});