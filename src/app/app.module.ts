import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FooterComponent } from './footer/footer.component';
import { TipsComponent } from './tips/tips.component';
import { CatalogoComponent } from './catalogo/catalogo.component';


//agregados



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    InicioComponent,
    QuienesSomosComponent,
    FooterComponent,
    TipsComponent,
    CatalogoComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
