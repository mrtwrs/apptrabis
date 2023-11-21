import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutinas } from 'src/app/models/models';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';

//clases
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
//clase
  rutina: Rutinas={
    id: '',
    nombre: '',
    descripcion: '',
  }


  constructor(
              private auth: AuthService,
              private firestore: FirestoreService,
              private router: Router,
  ) { }

  ngOnInit() {
  }

  agregarRutina() {
    // Genera un ID único para la rutina
    const id = this.firestore.getId();

    // Agrega el campo 'id' al objeto 'rutinas'
    this.rutina.id = id;

    // Agrega la rutina usando el servicio
    this.firestore.createDoc(this.rutina, 'rutina', id)
      .then(() => {
        this.router.navigate(['/listar']);
      })
      .catch(error => {
        console.error('Error al agregar :', error);
      });
  }
//campos
  camposIncompletos() {
    const { nombre, descripcion } = this.rutina;
    return !nombre ||  !descripcion ;
  }

}
