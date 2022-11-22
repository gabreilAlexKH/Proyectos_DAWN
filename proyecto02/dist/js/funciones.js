Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

const mesesTodos = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dis"];
const pasisesBarra = ["Estados Unidos", "Canada", "China", "Japon", "Congo", "Sudafrica", "Reino Unido", "Alemania", "Ecuador", "Colombia" , "Brazil"];
const acronimosBarra = ["US", "CA", "CN", "JP", "CG", "ZA", "GB", "DE", "EC", "CO" , "BR"];
let paisesTodos = new Array() 
let acronimos = new Array() 

/*!
    * Start Bootstrap - SB Admin v7.0.4 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    //De la palntilla
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
             document.body.classList.toggle('sb-sidenav-toggled');
        }

        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    //Del la desarrolador
    fetch("/assets/paises.json")
        .then(response => response.json())
        .then(paises =>{

            for (const pais of paises) {
                paisesTodos.push(pais.name)
                acronimos.push(pais.codeAlpha2)
            }

            generarPaises()

    })
    .catch(error => {
        window.alert("No se ha podido cargar los datos de paises \nDesctivando consultas");
        let btnConsultar = document.getElementById("filtroPais");
        btnConsultar.disabled = true
    });

    
    let spiners = document.getElementsByClassName("loader");
    for (let spiner of spiners) {
        spiner.style.display = "none"
    }

    let errorSpans = document.getElementsByClassName("text-danger")
    for (let span of errorSpans) {
        span.style.display = "none"
    }  
    
});

async function getPaises(paisesTodos , acronimos){
    
}


let generarPaises = () => {

    let selectorPaises = document.querySelector("#paises");

    for (let index = 0; index < paisesTodos.length; index++) {

        let newSelect = document.createElement("option")

        newSelect.setAttribute("value" , acronimos[index])
        newSelect.textContent = paisesTodos[index]

        selectorPaises.appendChild(newSelect)
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
    const checks = document.querySelectorAll("#paisCheck> div> input");

    for (const check of checks) {
        if(check.checked){
            paisesSel.unshift(check.value); 
        }        
    }
    return paisesSel;
}

let getNameFromAcronim = (acronumPaises) =>{

    let namePaises = new Array();
    
    for (const acronum of acronumPaises) {
        let i = acronimos.indexOf(acronum);
        namePaises.push(paisesTodos[i]); 
    }

    return namePaises;
}

let hacerConsulta = async (codigoPais) => {

    try {
        const respuesta = await axios.get('https://api.getfestivo.com/v2/holidays', {
            params: {
                api_key: "71eb14469314f3967a9fef615e4f138d",
                country: codigoPais,
                year: 2021,
                format: "json",
                language: "es"
            }
        })

        var data
        var status

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

    } catch (error) {
        
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


let consultaFeriadosPais = async (pais , mesInicio , mesFinal , tabla , lineas) =>{

    let loader = document.getElementById("LineChart_loader")
    let loader_tab = document.getElementById("tablaFeriadoPais_loader")
    let container_tab = document.getElementById("tablaFeriadoPais_container")

    loader.style.display = ""        
    loader_tab.style.display = ""
    container_tab.style.display = "none"

    
    const data = await hacerConsulta(pais)

    if(data != null){
        let feriados = feriadosPorMeses(data.holidays , mesInicio , mesFinal);
        let meses = mesesRango( mesInicio , mesFinal);
        updateGraficoLineas( lineas , meses , feriados);  
        updateTabla(data.holidays , mesInicio , mesFinal , tabla);

    }
        
    loader.style.display = "none"
    loader_tab.style.display = "none"
    container_tab.style.display = ""    
}


let comparaFeriadosPaises = async (acronumPaises , mesInicio , mesFinal , barras) =>{

    let namePaises = getNameFromAcronim(acronumPaises);
    let feriadosPorPais = new Array(acronumPaises.length).fill(0);
    
    let loader = document.getElementById("BarChart_loader")
    loader.style.display = ""

    for (let index = 0; index < namePaises.length; index++) {
            
        let data = await hacerConsulta(acronumPaises[index])
        if(data != null){
            let feriados = feriadosPorMeses(data.holidays , mesInicio , mesFinal);
            feriadosPorPais[index] = feriados.reduce((partialSum, a) => partialSum + a, 0);
        }else{
            return
        }          
    }

    updateGraficoBar( barras , namePaises , feriadosPorPais);
    loader.style.display = "none"


}



