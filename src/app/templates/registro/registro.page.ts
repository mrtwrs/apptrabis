import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/models';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: UserI = {
    username: '',
    correo:'',
    uid: this.firestore.getId(),
    password: '',
  }

  constructor(private auth: AuthService,
              private firestore: FirestoreService,
              private router: Router,) { }

  ngOnInit() {
  }

  async register() {
    
    try {
      // Registra al usuario en Firebase Authentication
      const authResult = await this.auth.registerUsers(this.datos);
  
      // Comprueba si el usuario se registró con éxito
      if (authResult && authResult.user) {
        console.log('Usuario registrado con éxito en Firebase Authentication:', authResult);
        
        // Almacena los datos del usuario en Firestore Database
        const path = 'Users';
        this.datos.uid = authResult.user.uid; // Utiliza el ID de autenticación de Firebase
        this.datos.password = ''; // No es necesario almacenar la contraseña
        await this.firestore.createDoc(this.datos, path, this.datos.uid);
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  }
  

}
