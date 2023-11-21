import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Rutinas } from 'src/app/models/models';
import { FirestoreService } from 'src/app/servicios/firestore.service';
//importar funciones
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  rutina: Rutinas[]= [];

  constructor(private bd: FirestoreService,
              private router: Router,
              private alertController: AlertController

              ) { }
  //constructores

  ngOnInit() {
    this.getrutina();
  }
  //metodos
  getrutina() {
    this.bd.getCollection<Rutinas>('rutina').subscribe(rutina => {
      this.rutina = rutina;
    });
  }

  eliminarrutina(id: string) {
    this.bd.deleteDoc('rutina', id)
      .then(() => {
        this.getrutina();
      })
      .catch(error => {
        console.error('Error al eliminar rutina:', error);
      });
  }

}
