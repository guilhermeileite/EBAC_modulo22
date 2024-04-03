/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
const email = faker.internet.email()

describe('Teste de Autenticação', () => {
  it('Suíte de teste para fluxo de criação de conta,', () => {
    cy.visit('/')
    cy.get('.icon-user-unfollow').click()
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type('senhateste123')
    cy.get(':nth-child(4) > .button').click()
    cy.contains('A partir do painel de controle de sua conta, você pode ver suas compras recentes').should('be.visible')
  })
})