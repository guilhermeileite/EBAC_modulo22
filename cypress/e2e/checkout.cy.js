describe('Exercicio módulo 23', () => {
    it('fluxo de checkout', () => {
      cy.login('Jasen_Donnelly3@hotmail.com', 'text123')
  
      cy.addItemInCart(2970, 34, 'Blue', 2)
  
      cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
      cy.get('.checkout-button').click()
      cy.get('#payment_method_cod').click()
      cy.get('#terms').click()
      cy.get('#place_order').click()
  
      cy.contains('Obrigado. Seu pedido foi recebido.').should('be.visible')
    })
  })