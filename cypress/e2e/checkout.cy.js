describe('Exercicio módulo 23', () => {
    it('fluxo de checkout', () => {  
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#reg_email').type('guilhermeleite@ebac.com')
      cy.get('#reg_password').type('Aluno@ebac2024')  
      cy.addItemInCart2('Ingrid Running Jacket', 'XS', 'Blue', 2, '2559', '2559', '2580')
      cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
      cy.get('.checkout-button').click()
      cy.get('#payment_method_cod').click()
      cy.get('#terms').click()
      cy.get('#place_order').click()
      cy.contains('Obrigado. Seu pedido foi recebido.').should('be.visible')
    })
  })

  