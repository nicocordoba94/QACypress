/// <reference types="cypress" />

describe('Segunda Entrega', () => {
    let user, pass, numero, datosLogin;

    before("before", () => {
        cy.fixture('datosUsuario').then(data => {
            datosLogin = data;
        })
	    numero = Math.floor(Math.random() * 1000);
    });

    beforeEach("beforeEach", () => {
        cy.visit('https://pushing-front.vercel.app/');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type(datosLogin.datosValidos.user)
        cy.get('#pass').type(datosLogin.datosValidos.pass)
        cy.get('#submitForm').click()
    })

    xit("Agregar 5 tareas a la lista To Do", () => {
        cy.get('#todolistlink').click();
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero}`);
        cy.get('#sendTask').click();
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero+1}`);
        cy.get('#sendTask').click();
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero+2}`);
        cy.get('#sendTask').click();
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero+3}`);
        cy.get('#sendTask').click();
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero+4}`);
        cy.get('#sendTask').click();
    })

    xit("Verificar existencia", () => {
        cy.get('#todolistlink').click();
        cy.get('#all').should('exist');
        cy.get('#completed').should('exist');
        cy.get('#active').should('exist');
        cy.get('#removeAll').should('exist');
	
    })

    xit("Agregar 2 tareas, completarlas y eliminar la segunda", () => {
        cy.get('#todolistlink').click();
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero}`);
        cy.get('#sendTask').click();
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero+1}`);
        cy.get('#sendTask').click();
        cy.contains(`Tarea Pendiente Nro: ${numero}`).click()
        cy.contains(`Tarea Pendiente Nro: ${numero+1}`).click();
        cy.get('li.css-vn850v:nth-child(2) > div:nth-child(1) > button:nth-child(2)').last().click();
    })

    it("Agregar 2 tareas y eliminar la primera", () => {
        cy.get('#todolistlink').click();
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero}`);
        cy.get('#sendTask').click();
        cy.get('#task').type(`Tarea Pendiente Nro: ${numero+1}`);
        cy.get('#sendTask').click();

        cy.get('button').contains('Delete').click();
    })

})