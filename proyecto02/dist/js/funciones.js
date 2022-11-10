Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

const mesesTodos = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dis"];
const paisesTodos = ["Estados Unidos", "Canada", "China", "Japon", "Congo", "Sudafrica", "Reino Unido", "Alemania", "Ecuador", "Colombia"];
const acronimos = ["US", "CA", "CN", "JP", "CG", "ZA", "GB", "DE", "EC", "CO"];

let generarPaises = () => {

    let selectorPaises = document.querySelector("#paises");

    for (let index = 0; index < paisesTodos.length; index++) {
        let option = "<option value=\"" + acronimos[index] + "\">" + paisesTodos[index] + "</option>";
        selectorPaises.innerHTML += option;
    }
}


let hacerConsulta = async (codigoPais) => {

    try {
        const respuesta = axios.get('https://api.getfestivo.com/v2/holidays', {
            params: {
                api_key: "71eb14469314f3967a9fef615e4f138d",
                country: codigoPais,
                year: 2021,
                format: "json"
            }
        })
        return respuesta;

    } catch (error) {
        console.log(error);
        return null;
    }
}


let crearTabla = (holidays, mesIncio = "01", mesFinal = "12") => {

    let selectorPaises = document.querySelector("#tablaFeriadoPais> tbody");
    selectorPaises.innerHTML = "";

    for (let index = 0; index < holidays.length; index++) {

        let feriado = holidays[index];
        let mes = feriado.date.split("-")[1];

        if (mesIncio <= mes && mes <= mesFinal) {

            let entradaTabla = `
            <tr>
                <td>`+ feriado.name + `</th>
                <td>`+ feriado.date + `</th>
                <td>`+ feriado.substitute + `</th>
                <td>`+ feriado.type + `</th>
            </tr>`
            selectorPaises.innerHTML += entradaTabla;
        }


    }
}

let feriadosPorMeses = (holidays, mesIncio, mesFinal) => {

    let feriadosMes = new Array(12).fill(0);

    for (let index = 0; index < holidays.length; index++) {

        let feriado = holidays[index];
        let mes = feriado.date.split("-")[1];
        feriadosMes[parseInt(mes - 1)] += 1;
    }

    let mesesRango = mesesTodos.slice(parseInt(mesIncio) - 1, parseInt(mesFinal));
    let feriadosMesRango = feriadosMes.slice(parseInt(mesIncio) - 1, parseInt(mesFinal));

    return { mesesRango, feriadosMesRango };
}

let getPaisesSelecionados = () => {

    let paisesSel = new Array();
    let checks = document.querySelectorAll("#paisCheck> div> input");

    for (let index = 0; index < checks.length; index++) {
        
        let check = checks[index];
        if(check.checked){
            paisesSel.unshift(check.value); 
        }
    }

    return paisesSel;
}

let getNameFromAcronim = (acronumPaises) =>{

    let namePaises = new Array();

    for (let index = 0; index < acronumPaises.length; index++) {
        
        let i = acronimos.indexOf(acronumPaises[index]);
        namePaises.push(paisesTodos[i]); 
    }

    return namePaises;

}

function renderisarGraficoLineas(meses, feriadosPorMes) {

    let maxFeriados = Math.max(feriadosPorMes);

    var ctx = document.getElementById("myAreaChart");
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
                        max: maxFeriados,
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
}

function renderisarGraficoBar(paises, feriadosPorPais) {

    var ctx = document.getElementById("myBarChart");
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
              max: 300,
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
  }
  
