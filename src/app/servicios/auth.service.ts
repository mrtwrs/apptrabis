import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserI } from '../models/models';
//importar funciones
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFire: AngularFireAuth ) { }
//contructores
  login(correo: string, password: string){
    return this.authFire.signInWithEmailAndPassword(correo,password)
  }
  logut(){
    this.authFire.signOut();
  }

  registerUsers(datos: UserI){
    return this.authFire.createUserWithEmailAndPassword(datos.correo,datos.password);
  }

  stateUser(){
    return this.authFire.authState

  }
//servicios
  async getUid() {
    const user = await this.authFire.currentUser;
    if (user) {
      return user.uid;
    } else {
      return null;
    }
   }
}
