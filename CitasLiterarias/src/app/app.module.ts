import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCitasComponent } from './components/lista-citas/lista-citas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritasComponent } from './components/favoritas/favoritas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCitasComponent,
    FormularioComponent,
    HomeComponent,
    FavoritasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
