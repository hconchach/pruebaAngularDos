import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VideojuegosComponent } from './component/videojuegos/videojuegos.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
