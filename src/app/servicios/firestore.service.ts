import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


//imports
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
//constructores
  constructor(private firebase: AngularFirestore) { }

  //metodos
  createDoc(data: any, path: string, id: string) {

    const collection = this.firebase.collection(path);
    return collection.doc(id).set(data);

  }

  getId() {
    return this.firebase.createId();
  }

  getCollection<tipo>(path: string) {

    const collection = this.firebase.collection<tipo>(path);
    return collection.valueChanges();

  }
  getDoc<tipo>(path: string, id: string) {
    return this.firebase.collection(path).doc<tipo>(id).valueChanges()
   }

   updateDoc(path: string, id: string, data: any) {
    return  this.firebase.collection(path).doc(id).update(data);
  }

  deleteDoc(path: string, id: string) {
    return this.firebase.collection(path).doc(id).delete();
  }
}
