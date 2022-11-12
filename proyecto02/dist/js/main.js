
generarPaises();
let barras = renderisarGraficoBar(paisesTodos , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
let lineas = renderisarGraficoLineas ( mesesTodos ,  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])







let btnConsultar = document.getElementById("filtroPais");
btnConsultar.addEventListener('click', () =>{

    let selectPais = document.getElementById("paises");
    let pais = selectPais.value;
    console.log(selectPais + "" + pais);
    let mesInicio = document.getElementById("mesInicio2").value;
    let mesFinal = document.getElementById("mesFinal2").value;

    if(mesInicio <= mesFinal){
        console.log(mesInicio + " " + mesFinal);
        
        hacerConsulta(pais).then( (data) => {

            if(data != null){
                crearTabla(data.holidays , mesInicio , mesFinal);
                let feriados = feriadosPorMeses(data.holidays , mesInicio , mesFinal);
                let meses = mesesRango( mesInicio , mesFinal);
                updateGraficoLineas( lineas , meses , feriados);
            }
        });
        

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
        console.log(mesInicio + " " + mesFinal);
        let feriadosPorPais = new Array(acronumPaises.length).fill(0);
        
        for (let index = 0; index < namePaises.length; index++) {
            
            let data = await hacerConsulta(acronumPaises[index])

            if(data != null){
                let feriados = feriadosPorMeses(data.holidays , mesInicio , mesFinal);
                feriadosPorPais[index] = feriados.reduce((partialSum, a) => partialSum + a, 0);
            }           
        }

        updateGraficoBar( barras , namePaises , feriadosPorPais);
        console.log(namePaises + "\n" + feriadosPorPais);
        
        

    }else{

        console.log("Meses fuera de rango");
    }
})




