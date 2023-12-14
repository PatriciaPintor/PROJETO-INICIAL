/// <reference types = "cypress"/>

// funcionalidade

describe('buscar dispositivos', () => {
    // cenarios de teste - 1

    it('Buscar lista do dispositivos', () => {
        cy.request({
            method:'Get',
            url:'https://api.restful-api.dev/objects',
            failOnStatusCode:false
        })
            .then((resultado) => {
             })
      
    })

    // cenarios de teste - 2

    it('Buscar dispositivo inexistente', () => {
        cy.request({
        method:'Get',
        url:'https://api.restful-api.dev/objects/23334444555',
        failOnStatusCode:false
    })
        .then((resultado) => {
            console.log(resultado)
        })
  })

    // cenarios de teste - 3

    it.only('Buscar dispositivo especifico', () => {
        cy.request({
            method:'Get',
            url:'https://api.restful-api.dev/objects/7',
            failOnStatusCode:false
        })
            .then((resultado) => {
                expect(resultado.status).equal(200)
                expect(resultado.body).not.empty
                expect(resultado.body.id).equal('7')

            })

    })

})