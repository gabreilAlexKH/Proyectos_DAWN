

let btnConsultar = document.getElementById("filtroPais");
btnConsultar.addEventListener('click', () =>{

    let selectPais = document.getElementById("paises");
    let pais = selectPais.value;
    console.log(selectPais + "" + pais);
    let mesInicio = document.getElementById("mesInicio2").value;
    let mesFinal = document.getElementById("mesFinal2").value;

    if(mesInicio <= mesFinal){
        console.log(mesInicio + " " + mesFinal);
        
        hacerConsulta(pais).then( (val) => {
            crearTabla(val.data.holidays , mesInicio , mesFinal);
            let areglos = feriadosPorMeses(val.data.holidays , mesInicio , mesFinal);
            renderisarGraficoLineas(areglos.mesesRango , areglos.feriadosMesRango);
        });
        

    }else{

        console.log("Meses fuera de rango");
    }
})


let btnComparacion = document.getElementById("comparacionPaises");
btnComparacion.addEventListener('click', () =>{

    let acronumPaises = getPaisesSelecionados();
    let namePaises = getNameFromAcronim(acronumPaises);

    console.log(acronumPaises + " " + namePaises);
    let mesInicio = document.getElementById("mesInicio").value;
    let mesFinal = document.getElementById("mesFinal").value;

    if(mesInicio <= mesFinal){
        console.log(mesInicio + " " + mesFinal);
        let feriadosPorPais = new Array(acronumPaises.length).fill(0);
        
        for (let index = 0; index < namePaises.length; index++) {
            
            hacerConsulta(acronumPaises[index]).then( (val) => {
                crearTabla(val.data.holidays , mesInicio , mesFinal);
                let areglos = feriadosPorMeses(val.data.holidays , mesInicio , mesFinal);
                feriadosPorPais[index] = areglos.feriadosMesRango.reduce((partialSum, a) => partialSum + a, 0);
            });  
                     
        }
        renderisarGraficoBar(namePaises , feriadosPorPais);
        console.log(namePaises + "\n" + feriadosPorPais);
        
        

    }else{

        console.log("Meses fuera de rango");
    }
})


generarPaises();
renderisarGraficoBar(paisesTodos , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);



