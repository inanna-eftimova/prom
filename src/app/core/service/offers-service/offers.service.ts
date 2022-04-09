import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth-service/auth-service.service';

const BASE_URL = 'https://dream-prom-db-default-rtdb.firebaseio.com';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  getAllOffers(){
    const token = localStorage.getItem('token');
    return this.http.get(BASE_URL + "/results/.json");
  }
  getCurrentOfferd(id: any){
    const token = localStorage.getItem('token');
    return this.http.get(BASE_URL + "/results/" + id + '/.json');
  }
  createOffer(data: any){
    return this.http.post(BASE_URL + "/results/.json", data);
  }
  deleteOffer(id: any){
     return this.http.delete(BASE_URL + "/results/" + id + '/.json');
  }
  updateOffer(data: any, id: any){
    return this.http.patch(BASE_URL + "/results/" + id + '/.json', data);
  }
}
