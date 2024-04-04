/// <reference types="cypress" />



describe('Teste de Autenticação', () => {
    it('Teste para fluxo de checkout', () => {
        // fazendo login
        cy.login('guilhermeleite@ebac.com', 'senhateste12345')
        // adicionando produtos ao carrinho  
        cy.visit('http://lojaebac.ebaconline.art.br/product/aether-gym-pant/')
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.single_add_to_cart_button').click()
        // fazendo o checkout
        cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
        cy.get('.checkout-button').click()
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.checkout('Guilherme', 'Leite', 'Microsoft', 'Avenida Paulista, 2000', 'São Paulo', '00000222', '999999999', 'guilhermeleite@ebac.com')
        cy.contains('Obrigado. Seu pedido foi recebido.').should('be.visible')
    })
})