import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { TipsComponent } from './tips/tips.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"inicio"
  },
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"quienes-somos",
    component: QuienesSomosComponent
  },
  {
    path:"tips",
    component: TipsComponent
  },
  {
    path:"catalogo",
    component: CatalogoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
