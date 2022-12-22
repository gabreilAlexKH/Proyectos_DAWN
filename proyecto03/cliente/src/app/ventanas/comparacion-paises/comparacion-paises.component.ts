import { Component } from '@angular/core';
import { PaisFeriadosService } from 'src/app/servicios/pais-feriados.service';
import { ActivatedRoute } from '@angular/router';
import { CodigosPaisesService } from 'src/app/servicios/codigos-paises.service';
import { Chart, registerables } from 'node_modules/chart.js';
import { FeriadoTabla } from 'src/app/interfases/feriado-tabla';


@Component({
  selector: 'app-comparacion-paises',
  templateUrl: './comparacion-paises.component.html',
  styleUrls: ['./comparacion-paises.component.css']
})
export class ComparacionPaisesComponent {

  last:string = "/main/compInput"
  paisesCodes: string[] = new Array();
  mesInit: string = '';
  mesFin: string = '';

  grafColor:string = "rgba(85, 83, 211, 1)"
  gafBar:Chart|null = null;


  constructor(private route: ActivatedRoute, private codigos: CodigosPaisesService, private feriado: PaisFeriadosService) {

  }

  ngOnInit() {

    let paisesName:string[] = this.codigos.getPaisesByCode(this.paisesCodes);
    this.gafBar = this.renderisarGraficoBar(["NIN" , "NIN" , "NIN"] ,[0 , 0] );

    this.route.params.subscribe(params => {

      let allCodes: string = params['codigos'] as string;
      this.paisesCodes = allCodes.split("-");
      this.mesInit = params['init'];
      this.mesFin = params['fin'];



      //this.comparaFeriadosPaises(this.paisesCodes, this.mesInit , this.mesFin , this.gafBar as Chart);
    })
  }

  renderisarGraficoBar(paises: String[], feriadosPorPais: number[]):Chart {

    var ctx: any = document.getElementById("BarChart");
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: paises,
        datasets: [{
          label: "total",
          backgroundColor: this.grafColor,
          borderColor: "rgba(2,117,216,1)",
          data: feriadosPorPais,
        }],
      },
      options: {
        maintainAspectRatio:false,
        indexAxis: 'y',
        scales: {

          x: {
            grid: {
              display: true
            },
            ticks: {
              maxTicksLimit: 10,
            }
          },
          y: {
            ticks: {
              maxTicksLimit: 10,
              autoSkip: false,
              maxRotation: 50,
              minRotation: 50
            },
            grid: {
              display: false
            }
          },
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });

    return myLineChart;
  }

  updateGraficoBar( grafico:Chart, paises:string[], feriadosPorPais:number[]){
    grafico.data.labels = paises
    grafico.data.datasets[0].data = feriadosPorPais
    grafico.update();
}

async comparaFeriadosPaises(paisesCode:string[] , mesInit:string , mesFin:string , barras:Chart){

    let namePaises:string[] = this.codigos.getPaisesByCode(paisesCode);
    let feriadosPorPais = new Array(paisesCode.length).fill(0);
    let index:number = 0;

    for (const pais of paisesCode) {
      let data: any | null = await this.feriado.fetchFeriadosPais(pais);

        if(data != null){
            let feriadosPais: FeriadoTabla[] = this.feriado.filterFeriados(this.mesInit, this.mesFin, data["holidays"]);
            let feriados = this.feriado.feriadosPerMonth(feriadosPais , mesInit , mesFin);
            feriadosPorPais[index] = feriados.reduce((partialSum, a) => partialSum + a, 0);
        }else{
            return ;
        }

        index++;
    }
    this.updateGraficoBar( barras , namePaises , feriadosPorPais);

}


}
