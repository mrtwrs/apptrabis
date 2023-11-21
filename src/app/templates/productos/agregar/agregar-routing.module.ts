import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPage } from './agregar.page';
//importar funciones
const routes: Routes = [
  {
    path: '',
    component: AgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPageRoutingModule {}
 // Funciónimportar y exportar las funciones
