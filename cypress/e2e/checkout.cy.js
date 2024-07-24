describe('Exercicio módulo 23', () => {
    it('fluxo de checkout', () => {  
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#reg_email').type('guilhermeleite@ebac.com')
      cy.get('#reg_password').type('Aluno@ebac2024')  
      cy.visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket')
      cy.addItemInCart2('Ingrid Running Jacket', 'XS', 'Blue', 2, '2559', '2559', '2580')
      
    })
  })

  