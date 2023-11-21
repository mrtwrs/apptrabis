import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
 // Variable que almacena los datos de usuario
export class LoginPage implements OnInit {

  // Función para cargar los datos de usuario
  credenciales= {
    correo: '',
    password: ''
  }
//credenciales para  inicio de sesion
  constructor(private router: Router,
              private auth: AuthService,) { }

  ngOnInit() {
  }
  //constructores utilizados

  async logeando(){
    console.log('credenciales -> ', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error =>{
      console.log('error');
    })
    if (res){
      this.router.navigate(['/home']);
    }

  }
//metodos
}
