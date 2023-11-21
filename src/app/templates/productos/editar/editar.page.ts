import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rutinas } from 'src/app/models/models';
import { FirestoreService } from 'src/app/servicios/firestore.service';

//imports
@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  rutina: Rutinas = {
    id: '',
    nombre: '',
    descripcion: '',
  };
//campos de rutinas
  constructor(private bd: FirestoreService,
              private router: Router,
              private route: ActivatedRoute,
              ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.cargarRutina(id);
      }
    });
  }
//Contructor
  cargarRutina(id: string) {
    this.bd.getDoc<Rutinas>('rutina', id).subscribe((rutina) => {
      if (rutina) {
        this.rutina = rutina;
      } else {
        this.rutina = { id: '', nombre: '', descripcion: ''};
      }
    });
  }

  actualizarRutina(id: string) {

    // Actualiza la rutina usando el servicio
    this.bd.updateDoc('rutina', id, this.rutina).then(() => {
      this.router.navigate(['/listar']);
    })
    .catch((error) => {
      console.error('Error al actualizar rutina:', error);
    });
  }
}
