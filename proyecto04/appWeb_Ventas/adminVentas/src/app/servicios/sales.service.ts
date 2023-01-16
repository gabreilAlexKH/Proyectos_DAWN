import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalesService {


  constructor(private http: HttpClient){}



  public fetchSalesShipped(customerNumber: number): Observable<Object>{

    let url:string= "http://localhost:4502/log_sales/findAllShipped/" + customerNumber + "/json";

    return this.http.get(url);
  }


  public fetchSalesAll(customerNumber: number): Observable<Object>{

    let url:string= "http://localhost:4502/log_sales/findAll/" + customerNumber + "/json";
    return this.http.get(url);
  }

  public fetchSales(): Observable<Object>{

    let url:string= "http://localhost:4502/log_sales//findAll/json";
    return this.http.get(url);
  }
}
