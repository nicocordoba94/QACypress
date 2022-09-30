export class ComprobarBotones{

    constructor(){
        this.allButton = '#all';
        this.completedButton = '#completed';
        this.activeButton = '#active';
        this.removeAllButton = '#removeAll'
    }

    comprobarAllButton(allButton){
        cy.get(allButton).should("exist");
    }



}