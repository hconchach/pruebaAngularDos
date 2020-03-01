import { Component } from '@angular/core';

@Component({
    selector: 'videojuegoComponent',
    template: `
        <h2> Componente de {{nombre}} <h2>
    `
})

export class VideojuegosComponent{

    public nombre = 'Videojuego';
}