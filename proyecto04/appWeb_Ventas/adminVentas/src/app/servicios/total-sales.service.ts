import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sales } from '../interfases/sales';


@Injectable({
  providedIn: 'root'
})
export class TotalSalesService {

  constructor(private http: HttpClient){}

  public fetchSumaSales(sales: Sales[]): Observable<Object>{

    let url:string= "http://localhost:4503/suma/total";

    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({'lista': sales});

    return this.http.post(url,body, {'headers':headers} );

  }

}
