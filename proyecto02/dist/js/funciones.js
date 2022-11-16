Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

const mesesTodos = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dis"];
const paisesTodos = ["Estados Unidos", "Canada", "China", "Japon", "Congo", "Sudafrica", "Reino Unido", "Alemania", "Ecuador", "Colombia" , "Brazil"];
const acronimos = ["US", "CA", "CN", "JP", "CG", "ZA", "GB", "DE", "EC", "CO" , "BR"];


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


