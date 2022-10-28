///<reference types = "cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve cpmpletar o pré cadastro com sucesso', () => {
        cy.get('#reg_email') .type(faker.internet.email())
        cy.get('#reg_password') .type('Teste@M1234*')
        cy.get(':nth-child(4) > .button') .click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a') .click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-EditAccountForm > :nth-child(8)').click()
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')


    });
    
});