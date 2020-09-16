/// <reference types="Cypress"/>

context('Lojas Americanas', () => {
 
    beforeEach(() => { 
        cy.visit('www.americanas.com.br')
        cy.wait(500) //Tempo para carregar a pagina
    })

    describe('Parte 1', () => {

        it('Validar a mensagem de e-mail já cadastrado)', () => {
            cy.get('.usr-icon').click() //Clique no icone 
            cy.get('.usr-signup').click() //Clique em "Cliente novo? Cadastrar"
            cy.get('#email-input').type('teste@hotmail.com') //Incluir email no campo email
            cy.get('#password-input').type('1234qwert').click() //Incluir senha no campo senha
            cy.get('.submit-button').click() //Clique no botao "Criar seu cadastro"
            cy.get('#email .inputGroup-error ').contains('E-mail já cadastrado') //Valida msg de email ja cadastrado
        })

        it('Inserir uma senha com 2 caracteres e validar as mensagens: "Senha Fraca")', () => {
            cy.get('.usr-icon').click() //Clique no icone 
            cy.get('.usr-signup').click() //Clique em "Cliente novo? Cadastrar"
            cy.get('#password-input').type('QW').click() //Incluir senha no campo senha
            cy.get('.passwordWrapper-msg').contains('fraca') //Valida label "fraca"
        })
        
        it.only('Inserir um CPF inválido e validar a mensagem: "CPF inválido")', () => {
            cy.get('.usr-icon').click() //Clique no icone 
            cy.get('.usr-signup').click() //Clique em "Cliente novo? Cadastrar"
            cy.get('#email-input').type('jocadadextra@hotmail.com') //Incluir email no campo email
            cy.get('#password-input').type('1234qwert@#$').click() //Incluir senha no campo senha
            cy.get('#cpf-input').type('11111111111') //Incluir numero cpf
            cy.get('.submit-button').click() //Clique no botao "Criar seu cadastro"
            cy.get('#cpf .inputGroup-error ').contains('CPF inválido.') //Valida msg de CPF inválido.
        })
    })

    describe('Parte 2', () => {

        it('Cadastro com sucesso")', () => {
            cy.get('.usr-icon').click() //Clique no icone 
            cy.get('.usr-signup').click() //Clique em "Cliente novo? Cadastrar"
            cy.get('#email-input').type('renatolifesgood123@hotmail.com') //Incluir email no campo email
            cy.get('#password-input').type('1234qwert@#$').click() //Incluir senha no campo senha
            cy.get('#cpf-input').type('38273729508') //Incluir numero cpf
            cy.get('#name-input').type('Reginaldo Carlos Pereira') //Incluir o nome da pessoa
            cy.get('#birthday-input').type('18051990') //Incluir data de nasc.
            cy.get('#gender_M').click({force: true}) //Clique no genero masculino
            cy.get('#phone-input').type('19993349988') //Incluir numero de contato
            cy.get('.submit-button').click() //Clique no botao "Criar seu cadastro"
            cy.get('.usr-icon').should('be.visible') //Confirma que esta na home verificando a existencia do botao de usuario
            
            cy.get('#h_search-input').type('Moto G6').click() //Faz a busca por "Moto G6" na home
            cy.contains('Smartphone Motorola Moto G6').click() //Busca e clica pela label "Smartphone Motorola Moto G6"
            cy.get('#btn-buy').click() //Inclui na cesta de compras clicando no botão "Comprar"
            cy.get('#btn-continue').click() //Clica no botão "Continuar"
            cy.get("input[name='productQuantity']").type('2') //Edita 2 unidades do produto
            cy.get('.basket-productPrice').should('be.lessThan', 5000) //Valida é menor que 5000 mil
            cy.get('.summary-totalInstallments').contains('em ate 12x') //Valida se a compra pode ser dividida em até 12x\
        })
    })
})



