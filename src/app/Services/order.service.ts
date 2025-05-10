import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'https://jala44.bsite.net/api/order'; 
  constructor(private http: HttpClient )   { }

  sendOrder(orderData: any) {
    return this.http.post(this.baseUrl, orderData);
    
  }
}
