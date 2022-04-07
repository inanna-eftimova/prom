import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth-service/auth-service.service';

const BASE_URL = 'https://dream-prom-db-default-rtdb.firebaseio.com';
const END_POINT = '/.json?auth=';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  getAllOffers(){
    const token = localStorage.getItem('token');
    return this.http.get(BASE_URL + "/results" + END_POINT + token);
  }
  getCurrentOfferd(id: any){
    const token = localStorage.getItem('token');
    return this.http.get(BASE_URL + "/results/" + id + END_POINT + token);
  }
}
