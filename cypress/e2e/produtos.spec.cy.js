///<reference types = "cypress"/>

describe('funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[ class="product-block grid"]')
            //.first()
            .eq(3)
            .click()

    });

    it.only('deve selecionar um item ao carrinho ', () => {
        var quantidade = 2

        cy.get('[ class="product-block grid"]')
        .eq(3)
            .click()
            cy.get('.button-variable-item-XL').click()
            cy.get('.button-variable-item-Blue').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)


    });

});