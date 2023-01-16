import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url:string="http://localhost:4501/customers/findAll/json";

  constructor(private http: HttpClient){}



  public  fetchClientes(): Observable<Object>{

    return this.http.get(this.url);
  }
}
