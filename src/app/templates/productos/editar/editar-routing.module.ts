import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarPage } from './editar.page';
//importar funciones
const routes: Routes = [
  {
    path: '',
    component: EditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPageRoutingModule {}
//modulos
