import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDkBzUf5wipg85Lvg8o2Is_Q50av3nucg",
  authDomain: "dream-prom-db.firebaseapp.com"
  // projectId: "dream-prom-db",
  // storageBucket: "dream-prom-db.appspot.com",
  // messagingSenderId: "936488461362",
  // appId: "1:936488461362:web:4ce96479dd9a6e0925082b"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dream-prom';

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
}
