import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarPageRoutingModule } from './agregar-routing.module'
import { AgregarPage } from './agregar.page';
//importar funciones
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPageRoutingModule
  ],
  declarations: [AgregarPage]
})
//modulos
export class AgregarPageModule {}
