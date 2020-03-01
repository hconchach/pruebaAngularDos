import { Component } from '@angular/core';

@Component({
    selector: 'videojuegoComponent',
    template: `
        <h2> Componente de {{nombre}} </h2>
        <h3 *ngIf="mostrarJuego != true"> Yo adoro a la {{amorMio}}</h3>
        <h3 *ngIf="mostrarJuego"> El mejor juego es {{mejorVideojuego}}</h3>
    `
})

export class VideojuegosComponent{

    public nombre = 'Videojuego';
    public amorMio = 'Dani';
    public mejorVideojuego = 'Starcraft';
    public mostrarJuego = false;
}