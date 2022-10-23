///<reference types = "cypress"/>

context('Revis Cypress login', () => {

    it('Deve fazer o login com sucesso', () => {

        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.page-title').should ('contain','Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain','A partir do painel')
        
 
    });


    it ('Deve exibir uma mensagem de erro ao digitar senha errada', () => {

        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('error@texte')
        cy.get('.woocommerce-form > .button').click ()
        
        cy.get('.woocommerce-error > li').should('contain','Erro: A senha')
    });
    

    it('Deve exibir uma mensagem de erro ao digital e-mail errado', () => {

        
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('error_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail')

        
    });


    it('Deve exibir mensagem de cadastro com sucesso', () => {

        cy.get('#reg_email').type('eduardo.maltas.oliveira3006@gmil.com')
        cy.get('#reg_password').type('Minhacasacaiu1')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.page-title').should('contain','Minha conta')


        
    });
});