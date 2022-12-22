import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodigosPaisesService } from 'src/app/servicios/codigos-paises.service';
import { Chart, registerables } from 'node_modules/chart.js';
import { FeriadoTabla } from 'src/app/interfases/feriado-tabla';
import { PaisFeriadosService } from 'src/app/servicios/pais-feriados.service';
import { MesesService } from 'src/app/servicios/meses.service';

Chart.register(...registerables);


@Component({
  selector: 'app-feriados-pais',
  templateUrl: './feriados-pais.component.html',
  styleUrls: ['./feriados-pais.component.css']
})


export class FeriadosPaisComponent {

  last:string = "/main/feriadoInput";
  paisCod: string = "";
  paisName: string = ""
  mesInit: string = '01';
  mesFin: string = '12';


  grafColor:string = "rgba(58, 158, 253, 1)"
  gafLineas:Chart|null = null;

  ELEMENT_DATA: FeriadoTabla[] = [];

  constructor(private route: ActivatedRoute, private codigos: CodigosPaisesService, private feriado: PaisFeriadosService , private mesesSer: MesesService) {


  }

  ngOnInit() {

    this.gafLineas = this.renderisarGraficoLineas(this.mesesSer.getMesesRange(parseInt(this.mesInit) , parseInt(this.mesFin)) , new Array(12).fill(0));
    console.log("inicio");

    this.route.params.subscribe(params => {

      this.paisCod = params['cod'];
      this.paisName = this.codigos.getPaisByCode(this.paisCod) as string;
      this.mesInit = params['init'];
      this.mesFin = params['fin'];
      this.consultaFeriadosPais(this.paisCod, this.mesInit , this.mesFin  , this.gafLineas as Chart);
      console.log(this.ELEMENT_DATA);
    })
  }

  private renderisarGraficoLineas(labels:string[] , data:number[] ):Chart {

    const ctx: any = document.getElementById('LineChart');

    const char = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "total",
          data: data,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: this.grafColor,
          pointRadius: 6,
          pointBackgroundColor: this.grafColor,
          pointBorderColor: "rgba(255,255,255,0.8)",
          pointHoverRadius: 7,
          pointHoverBackgroundColor: this.grafColor,
          pointHitRadius: 40,
          pointBorderWidth: 2,
        }],
      },
      options: {
        maintainAspectRatio:false,
        scales: {
          x: {
            time: {
              unit: 'month'
            },
            ticks: {
              maxTicksLimit: 12
            },
            grid: {
              display: false
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              maxTicksLimit: 10
            },
            grid: {
              color: "rgba(0, 0, 0, .125)",
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

    return char;
  }

  updateGraficoLineas( grafico:Chart, labels:string[] , data:number[]){
    grafico.data.labels = labels;
    grafico.data.datasets[0].data = data;
    grafico.update();
  }


  private async consultaFeriadosPais(pais: string, mesInicio: string, mesFinal: string , lineas:Chart) {

    const data: any | null = await this.feriado.fetchFeriadosPais(pais);

    if (data != null) {
      console.log(data);
      let feriadosPais: FeriadoTabla[] = this.feriado.filterFeriados(this.mesInit, this.mesFin, data["holidays"]);
      let meses:string[] = this.mesesSer.getMesesRange(parseInt(mesInicio) , parseInt(mesFinal));
      let linearData: number[] = this.feriado.feriadosPerMonth(feriadosPais , this.mesInit, this.mesFin);

      console.log(feriadosPais);
      this.updateGraficoLineas(lineas , meses , linearData);
      this.updateTable(feriadosPais);
    }

  }

  private updateTable(newData: FeriadoTabla[]) {

    for (const entry of newData) {

      this.ELEMENT_DATA.push(entry);

    }
  }




}
