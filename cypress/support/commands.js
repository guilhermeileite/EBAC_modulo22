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

Cypress.Commands.add('addItemInCart', (size, color, quantity, addToCart, productId, variationId) => {

    const formData = new FormData();
    formData.append('attribute_size', size);
    formData.append('attribute_color', color);
    formData.append('quantity', quantity);
    formData.append('add_to_cart', addToCart);
    formData.append('product_id', productId);
    formData.append('variation_id', variationId);

    cy.intercept('POST', 'http://lojaebac.ebaconline.art.br/minha-conta/', {
        statusCode: 201,

    })

    cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
})