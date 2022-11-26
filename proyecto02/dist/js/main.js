let barras = renderisarGraficoBar(pasisesBarra , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
let lineas = renderisarGraficoLineas ( mesesTodos ,  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])
let tabla = renderisarTabla()

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};


let btnConsultar = document.getElementById("filtroPais");
btnConsultar.addEventListener('click',  () =>{

    let pais = document.getElementById("paises").value;
    let mesInicio = document.getElementById("mesInicio2").value;
    let mesFinal = document.getElementById("mesFinal2").value;

    let error = document.getElementById("error_consulta")

    if(mesInicio <= mesFinal){
        error.style.display = "none"
        consultaFeriadosPais(pais, mesInicio , mesFinal , tabla , lineas)
        
    }else{
        error.style.display = ""
        error.innerText = "Error: Mes final mayor a mes inicio"
    }
})


let btnComparacion = document.getElementById("comparacionPaises");
btnComparacion.addEventListener('click', async () =>{

    let acronumPaises = getPaisesSelecionados();
    let mesInicio = document.getElementById("mesInicio").value;
    let mesFinal = document.getElementById("mesFinal").value;

    let error = document.getElementById("error_comparacion")


    if(mesInicio <= mesFinal && (acronumPaises.length > 0)){
        error.style.display = "none"
        comparaFeriadosPaises(acronumPaises , mesInicio , mesFinal , barras)
        
    }else{
        let errores = "Error: " + ( !(mesInicio <= mesFinal) ? "Mes final mayor a mes inicio" : "" ) 
                                + ( (!(mesInicio <= mesFinal) && (acronumPaises.length == 0)) ? "\n": "")
                                + ( (acronumPaises.length == 0) ? "No se han selecionado paises" : "" )

        error.style.display = ""
        error.innerText = errores
    }
})

