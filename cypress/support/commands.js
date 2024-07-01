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

Cypress.Commands.add('login', (email, password) => {
    const fd = new FormData();
    fd.append('username', email)
    fd.append('password', password)
    fd.append('woocommerce-login-nonce', "4f4ce69f63")
    fd.append('r_wp_http_referer', "/minha-conta/")
    fd.append('login', 'Login')

    cy.request({
        url: 'http://lojaebac.ebaconline.art.br/minha-conta/',
        method: 'POST',
        body: fd
    })
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
})

Cypress.Commands.add('addItemInCart', (productId, color, size, quantity) => {
    cy.intercept('POST', '/users*', {
        statusCode: 201,
        body: {
            product_id: productId,
            attribute_size: size,
            attribute_color: color,
            quantity: quantity
        },
    })

    cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
})