import { Injectable } from '@angular/core';
import axios  from 'axios';
import { FeriadoTabla } from '../interfases/feriado-tabla';

@Injectable({
  providedIn: 'root'
})
export class PaisFeriadosService {

  constructor() { }


  async fetchFeriadosPais(codigoPais:string){
    try {

        const respuesta = await axios.get('https://api.getfestivo.com/v2/holidays', {
            params: {
                api_key: "71eb14469314f3967a9fef615e4f138d",
                country: codigoPais,
                year: 2021,
                format: "json",
                language: "es"
            }
        });

        let data;
        let status;

        if (respuesta.hasOwnProperty("data")){
            data = respuesta.data
            status = ( data.hasOwnProperty("status") ? data.status : 666)
        }else{
            window.alert("Json resibido incumple el formato: " + status);
            return null;
        }

        if(status == 200){
            return data;

        }else if (status == 666){
            window.alert("Json resibido no contiene estado:")

        }else{
            window.alert("Codigo de status resibido no es el correcto: " + status);
            return null;
        }

        return null;

    } catch (error:any) {


        if(error.hasOwnProperty("message") && error.hasOwnProperty("code")){
            window.alert("Error con api detectado:\n Message: " + error.message + "  code: " + error.code)
            return null;
        }

        if(!error.hasOwnProperty("response")){
            window.alert("Error con dentro del js detectado, por favor contacte al desarrolador")
            return null;
        }
        const respuesta = error.response
        const estado =  (respuesta.hasOwnProperty("status") ? error.response.status : 666)

        switch (estado) {
            case 400:
                window.alert("Error de validacion. \nCodigo de pais no valido: " + codigoPais);
                break;

            case 401:
                window.alert("Error de autorisacion. \API-Token para la API es incorecto.");
                break;

            case 402:
                window.alert("Solisitud supera permisos de la version gratis de la API");
                break;

            case 403:
                window.alert("Error de autorisacion. \nLimite de solisitudes mesnuales exedidas.");
                break;

            case 429:
                window.alert("Rate limit exedido. \nPor favor trate de nuevo mas tarde");
                break;

            case 500:
                window.alert("Error fatal del lado del usuario. \nContacte al provedor de la API")
                break;

            default:
                window.alert("Error desconosido ha sido detectado: " + estado);
                break;
        }

        return null;
    }
  }


  filterFeriados(mesInicio: string, mesFinal: string, holidays: any): FeriadoTabla[] {

    let feriadosPais: FeriadoTabla[] = [];

    for (const feriado of holidays) {

      let mes: string = feriado.date.split("-")[1];
      if (mesInicio <= mes && mes <= mesFinal) {

        let esSustituto:boolean = feriado["substitute"] as boolean;
        let feriadoName:string = feriado["name"] + (esSustituto ? " (feriado)": "");
        let fecha:string = esSustituto ? feriado["observed"] : feriado["date"];


        feriadosPais.push({ fecha: fecha, feriado: feriadoName , substitute: esSustituto });

      }

    }

    return feriadosPais;


  }

  feriadosPerMonth(feriadosPais: FeriadoTabla[] ,  mesInicio: string, mesFinal: string):number[] {

    let feriadosMes:number[] = new Array<number>(12).fill(0);

    for (const feriado of feriadosPais) {

      let mes:number = parseInt(feriado.fecha.split("-")[1]);

      if(!feriado.substitute){
        feriadosMes[mes - 1] += 1;
      }
    }

    return feriadosMes.slice(parseInt(mesInicio) - 1, parseInt(mesFinal));

  }





}
