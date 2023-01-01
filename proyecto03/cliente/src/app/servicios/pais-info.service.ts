import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisInfoService {


  constructor(private http: HttpClient) {

  }

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type':'application/json',
      "X-CSCAPI-KEY":'WGpIY1J3RHR5UUF0S0dSMlBHU0dKaFZKUm9JaHVqWVFIVmJwejA4Sg=='
    })
  }

  /**
   * Get a https://api.countrystatecity.in/v1/countries para el pais codigo ISO 2 ingresado
   * @param codigo
   * @returns
   */
  private fetchPaisInfo(codigo:string){
    let url:string = `https://api.countrystatecity.in/v1/countries/${codigo}`;
    return this.http.get(url , {headers:this.httpOptions.headers});
  }


  /**
   * * Get a https://api.countrystatecity.in/v1//${codigo}/states para el pais codigo ISO 2 ingresado
   * @param codigo
   * @returns
   */
  private fetchPaisEstado(codigo:string){
    let url:string = `https://api.countrystatecity.in/v1/countries/${codigo}/states`;
    return this.http.get(url , {headers:this.httpOptions.headers});
  }

  /**
   * * Get a https://api.countrystatecity.in/v1/countries/${codigo}/citiespara el pais codigo ISO 2 ingresado
   * @param codigo
   * @returns
   */
  private fetchPaisCiudades(codigo:string){
    let url:string = `https://api.countrystatecity.in/v1/countries/${codigo}/cities`;
    return this.http.get(url , {headers:this.httpOptions.headers});
  }


  /**
   * Devulve un observer con tres repuestas segun el pais con el codigo ISO 2 ingresado:
   *  1. Get a https://api.countrystatecity.in/v1/countries para el pais codigo ISO 2 ingresado
   *  3. Get a https://api.countrystatecity.in/v1//${codigo}/states para el pais codigo ISO 2 ingresado
   *  2. Get a https://api.countrystatecity.in/v1/countries/${codigo}/citiespara el pais codigo ISO 2 ingresado
   *
   * @param codigo
   * @returns
   */
  public fetchPaisAllInfo(codigo:string){

    let obserPais = forkJoin(
      this.fetchPaisInfo(codigo),
      this.fetchPaisEstado(codigo),
      this.fetchPaisCiudades(codigo)
    )

    return obserPais;

  }


}
