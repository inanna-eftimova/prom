import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged  
} from "firebase/auth";
import { ToastrService } from 'ngx-toastr';

let uid: any = null;

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  constructor(private toastr: ToastrService, private router: Router) { }

  register(email: string, password: string){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(data =>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
           uid = user.uid;
           this.router.navigate(['/profile']);
           this.toastr.success('Singed Up', 'Success');
        }
      })
    })
    .catch(err => this.toastr.error(err.message, "Warning"))
  }

  login(email: string, password: string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(data => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
           uid = user.uid;
           this.router.navigate(['/profile']);
           this.toastr.success('Logged In', 'Success');
        }
      })
    })
    .catch(err => this.toastr.error(err.message, "Warning"));
  }

  logout(){
    const auth = getAuth();
    signOut(auth)
    .then((data) => {
      uid = null;
      this.router.navigate(['']);
      this.toastr.success('Logged Out', 'Success');
    })
    .catch(err => this.toastr.error(err.message, "Warning"));
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
