function renderisarTabla(){

    let table
    const datatablesSimple = document.getElementById('tablaFeriadoPais');
    if (datatablesSimple) {
      table = new simpleDatatables.DataTable(datatablesSimple);
    }
    return table
}


function clearTabla(table){
  table.refresh()
  table.data = []
  table.rows.add(["" , "" , "" , ""])
  table.rows.remove(0)

}

function updateTabla(holidays, mesIncio = "01", mesFinal = "12" , table){
  
  clearTabla(table)

  for (const feriado of holidays) {
    let mes = feriado.date.split("-")[1];
    if (mesIncio <= mes && mes <= mesFinal) {
      table.rows.add([feriado.name , feriado.date , feriado.substitute.toString() , feriado.type])
    }    
  }
}

function renderisarGraficoLineas(meses, feriadosPorMes) {

    var ctx = document.getElementById("LineChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: meses,
            datasets: [{
                label: "Feriados",
                lineTension: 0,
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "rgba(2,117,216,1)",
                pointRadius: 5,
                pointBackgroundColor: "rgba(2,117,216,1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                pointHitRadius: 50,
                pointBorderWidth: 2,
                data: feriadosPorMes,
            }],
        },
        options: {
            scales: {
                xAxes: [{
                    time: {
                        unit: 'month'
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 12
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        maxTicksLimit: 10
                    },
                    gridLines: {
                        color: "rgba(0, 0, 0, .125)",
                    }
                }],
            },
            legend: {
                display: false
            }
        }
    });

    return myLineChart;
}

function updateGraficoLineas( grafico, meses, feriadosPorMes){
  grafico.data.labels = meses
  grafico.data.datasets[0].data = feriadosPorMes
  grafico.update();
}

function renderisarGraficoBar(paises, feriadosPorPais) {

    var ctx = document.getElementById("BarChart");
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: paises,
        datasets: [{
          label: "Revenue",
          backgroundColor: "rgba(2,117,216,1)",
          borderColor: "rgba(2,117,216,1)",
          data: feriadosPorPais,
        }],
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 12
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              maxTicksLimit: 6
            },
            gridLines: {
              display: true
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });

    return myLineChart;
  }
  
function updateGraficoBar( grafico, paises, feriadosPorPais){
    grafico.data.labels = paises
    grafico.data.datasets[0].data = feriadosPorPais
    grafico.update();
}

