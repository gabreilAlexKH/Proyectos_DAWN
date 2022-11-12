Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

const mesesTodos = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dis"];
const paisesTodos = ["Estados Unidos", "Canada", "China", "Japon", "Congo", "Sudafrica", "Reino Unido", "Alemania", "Ecuador", "Colombia" , "Brazil"];
const acronimos = ["US", "CA", "CN", "JP", "CG", "ZA", "GB", "DE", "EC", "CO" , "BR"];


let generarPaises = () => {

    let selectorPaises = document.querySelector("#paises");

    for (let index = 0; index < paisesTodos.length; index++) {
        let option = "<option value=\"" + acronimos[index] + "\">" + paisesTodos[index] + "</option>";
        selectorPaises.innerHTML += option;
    }
}


let hacerConsulta = async (codigoPais) => {

    try {
        const respuesta = await axios.get('https://api.getfestivo.com/v2/holidays', {
            params: {
                api_key: "71eb14469314f3967a9fef615e4f138d",
                country: codigoPais,
                year: 2021,
                format: "json"
            }
        })

        const data = respuesta.data;
        const status = data.status;

        if( status == 200){

            return data;
        }

        window.alert("Codigo de status no es el correcto: " + status);
        return null;

    } catch (error) {

        const status = error.response.status;

        switch (status) {
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
                window.alert("Error desconosido ha sido detectado: " + status);
                break;

        
        }
        return null;
    }
}



let feriadosPorMeses = (holidays, mesIncio, mesFinal) => {

    let feriadosMes = new Array(12).fill(0);

    for (let index = 0; index < holidays.length; index++) {

        let feriado = holidays[index];
        let mes = feriado.date.split("-")[1];
        feriadosMes[parseInt(mes - 1)] += 1;
    }

    return feriadosMes.slice(parseInt(mesIncio) - 1, parseInt(mesFinal));
}

let mesesRango = (mesIncio, mesFinal) =>{

    return mesesTodos.slice(parseInt(mesIncio) - 1, parseInt(mesFinal));
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

function renderisarGraficoLineas(meses, feriadosPorMes) {


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

function updateGraficoLineas( grafico, meses, feriadosPorMes){

    grafico.data.labels = meses
    grafico.data.datasets[0].data = feriadosPorMes
    grafico.update();
}
