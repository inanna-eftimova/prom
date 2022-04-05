import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  register(email: string, password: string){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  login(email: string, password: string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
}
