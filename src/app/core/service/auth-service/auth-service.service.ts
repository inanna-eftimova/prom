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

let userdata: any;
let token: any = null;

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
          userdata = user;
           token = userdata.accessToken;
           localStorage.setItem('token', token);
           localStorage.setItem('email', userdata.email)
           localStorage.setItem('uid', userdata.uid)
           this.router.navigate(['/page/auth/profile']);
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
           userdata = user;
           token = userdata.accessToken;
           localStorage.setItem('token', token);
           localStorage.setItem('email', userdata.email)
           localStorage.setItem('uid', userdata.uid)
           this.router.navigate(['/page/auth/profile']);
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
      token = null;
      this.router.navigate(['']);
      this.toastr.success('Logged Out', 'Success');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('uid');
    })
    .catch(err => this.toastr.error(err.message, "Warning"));
  }

  // getToken(){
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       userdata = user;
  //       token = userdata.accessToken;
  //     }
  //   })

  //   return token;
  // }


  isAuthenticated(): boolean{
    return localStorage.getItem('token')!=undefined;
  }
  isUserId(): boolean{
    return localStorage.getItem('uid')!=undefined;
  }
}
