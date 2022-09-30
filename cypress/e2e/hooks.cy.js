/// <reference types="cypress" />

describe('Hooks', () => {
    let datosLogin, datosTarea;

    before("prueba error", () => {
        cy.fixture('datosUsuario').then(data => {
            datosLogin = data;
        })

        /*cy.fixture('datosTarea').then(data => {
            datosTarea = data;
        })*/
    })

    beforeEach("PreRequisitos", () => {
        cy.visit('https://pushing-front.vercel.app/');
        cy.get("#registertoggle").dblclick();
    })

    it("Deberia mostrar un error al no encontrar el usuario", () => {
        cy.get('#user').type(datosLogin.datosInvalidos.user)
        cy.get('#pass').type(datosLogin.datosInvalidos.pass)
        cy.get('#submitForm').click()
        cy.get('p').first().should('have.text', (datosLogin.mensajeError) )
    })



    /*beforeEach("beforeEach", () =>{
        cy.log("Before Each")
    })

    it("Primer Test", () =>{
        cy.log("Primer Test")
    })

    it("Segundo Test", () =>{
        cy.log("Primer Test")
    })*/


})