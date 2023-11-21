import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./templates/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./templates/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./templates/productos/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./templates/productos/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./templates/productos/editar/editar.module').then( m => m.EditarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
