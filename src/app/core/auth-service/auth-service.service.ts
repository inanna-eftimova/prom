import { Injectable } from '@angular/core';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged  
} from "firebase/auth";

let uid: any = null;

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
    .then(data => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
           uid = user.uid;
        }
      })
    })
    .catch(err => console.log(err));
  }

  logout(){
    // const auth = getAuth();
    // signOut(auth)
    // .then((data) => {
    //   uid = null;
    // })
    // .catch(err => console.log(err));
    uid = null;
  }

  getUId(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
         uid = user.uid;
         console.log(user);
      }
    })

    return uid;
  }

  isAuthenticated(): boolean{
    return uid != null;
  }
}
