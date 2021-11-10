/// <reference types="cypress" />

context('Desktop', () => {

    describe('First part', () => {
        beforeEach(() => {
            cy.viewport('iphone-5')
            
        })

        it('Visible ohne logo', () => {
            cy.visit('https://sosrecargaclaro.com.br/')
            cy.get('img').should('be.visible').and('exist')
        })
    })
})
