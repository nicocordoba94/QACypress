/// <reference types="cypress" />
import {ComprobarBotones} from '../support/pages/comprobarBotones'

describe('Ejercicio 6', () => {

    const comprobarBotones = new ComprobarBotones();

    it("Actividad complementaria 6", () => {
        cy.visit('https://pushing-front.vercel.app');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get('#sendTask').click();
        cy.get("#all").should("exist"); //Remplazar con un metodo en su pagina correspondiente
        cy.get("#completed").should("exist"); //Remplazar con un metodo en su pagina correspondiente
        cy.get("#active").should("exist"); //Remplazar con un metodo en su pagina correspondiente
        cy.get("#removeAll").should("exist"); //Remplazar con un metodo en su pagina correspondiente
    });

})
