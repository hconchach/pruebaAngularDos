import { Component } from '@angular/core';

@Component({
    selector: 'videojuegoComponent',
    templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent{

    public nombre = 'Videojuego';
    public amorMio = 'Dani';
    public mejorVideojuego = 'Starcraft';
    public mostrarJuego = false;

    public listadoJuegos = [
        'Doom 3',
        'Quake 2',
        'Starcraft',
        'Dukenukem 3D'
    ]
}