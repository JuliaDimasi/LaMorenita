import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { InicioComponent } from './inicio/inicio.component';



//agregados



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    ContenidoComponent,
    InicioComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
