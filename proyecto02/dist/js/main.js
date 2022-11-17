let barras = renderisarGraficoBar(paisesTodos , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
let lineas = renderisarGraficoLineas ( mesesTodos ,  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])
let table = renderisarTabla()

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};


let btnConsultar = document.getElementById("filtroPais");
btnConsultar.addEventListener('click',  async () =>{

    let selectPais = document.getElementById("paises");
    let pais = selectPais.value;

    let mesInicio = document.getElementById("mesInicio2").value;
    let mesFinal = document.getElementById("mesFinal2").value;

    
    if(mesInicio <= mesFinal){
        console.log(mesInicio + " " + mesFinal);

        let loader = document.getElementById("LineChart_loader")
        let loader_tab = document.getElementById("tablaFeriadoPais_loader")
        let container_tab = document.getElementById("tablaFeriadoPais_container")

        loader.style.display = ""        
        loader_tab.style.display = ""
        container_tab.style.display = "none"

        
        const data = await hacerConsulta(pais)

        if(data != null){

            updateTabla(data.holidays , mesInicio , mesFinal , table);
            let feriados = feriadosPorMeses(data.holidays , mesInicio , mesFinal);
            let meses = mesesRango( mesInicio , mesFinal);
            updateGraficoLineas( lineas , meses , feriados);
        }
            
        loader.style.display = "none"
        loader_tab.style.display = "none"
        container_tab.style.display = "" 

            
        

            
        
    }else{

        console.log("Meses fuera de rango");
    }
})


let btnComparacion = document.getElementById("comparacionPaises");
btnComparacion.addEventListener('click', async () =>{

    let acronumPaises = getPaisesSelecionados();
    let namePaises = getNameFromAcronim(acronumPaises);

    console.log(acronumPaises + " " + namePaises);
    let mesInicio = document.getElementById("mesInicio").value;
    let mesFinal = document.getElementById("mesFinal").value;

    if(mesInicio <= mesFinal){

        let feriadosPorPais = new Array(acronumPaises.length).fill(0);
        let loader = document.getElementById("BarChart_loader")
        loader.style.display = ""

        
        for (let index = 0; index < namePaises.length; index++) {
            
            let data = await hacerConsulta(acronumPaises[index])

            if(data != null){
                let feriados = feriadosPorMeses(data.holidays , mesInicio , mesFinal);
                feriadosPorPais[index] = feriados.reduce((partialSum, a) => partialSum + a, 0);
            }           
        }

        updateGraficoBar( barras , namePaises , feriadosPorPais);
        loader.style.display = "none"
        
        

    }else{

        console.log("Meses fuera de rango");
    }
})

