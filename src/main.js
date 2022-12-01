import { filterDirector, orderAZ } from './data.js';
import data from './data/ghibli/ghibli.js';
//declaro la variable contenedor, su id es root
const contenedor = document.getElementById('root')
//declaro el objeto y la propiedad en data.film (para acceder a la propiedad de un objeto, objeto.propiedad)
const dataGhibli = data.films 
//data.films es una array de objetos y se pintan con un bucle for o for each
//console.log(dataGhibli)
// showInfo muestra el array de todos los directores que es dataGhibli.
// la siguiente funcion pinto los primeros posters
const showInfo = (showFilms) => {  //nombro así al parametro porque necesito el array de las peliculas
    
//aquí cambié var por let. es let porque es reasignable(porque tenemos una array(que es dataGhibli) con varios elementos)
//para saber la extension de la array uso la propiedad length
//el ultimo indice es 3, es la extension de toda la array -1

    for (let i = 0; i < showFilms.length; i++) {

        //tome el contenedor vacio y  se le imprimio el img src.
        //dataGhibli es una array, la posicion de i es cada iteracion(i=0) entonces tenemos array en 0 array(0)y eso es un objeto.
        //el .poster es la forma de acceder a un objeto.
        contenedor.innerHTML += `<img class= "caratulas" src=  ${showFilms[i].poster}>`;     
       //InnerHtml agrega contenido a una etiqueta especifica en html y el id es necesario porque es la forma de llamar el contenido de html a javascript
    }

    return contenedor
};

showInfo(dataGhibli) 

const seleccionarDir = document.getElementById("seleccionarDir");
const seleccionaAZ = document.getElementById("seleccionaAZ");

//console.log(select.value)

seleccionarDir.addEventListener("change", () => { //change es el evnto,escucha el cambio de valor
    contenedor.innerHTML = ``;
    const director = seleccionarDir.value
    showInfo(filterDirector(director,dataGhibli))//aca invoqué mi array filtrada lo que mostró la seleccion en la interfaz.
    //console.log(filterDirector(director))//nuevo array ya filtrado
});

seleccionaAZ.addEventListener("change", () => {
    contenedor.innerHTML = ``;
    const orderValue = seleccionaAZ.value
    //showInfo(filterDirector(director,dataGhibli))
    console.log(orderAZ(dataGhibli, orderValue))
});







//console.log(filterDirector("Hayao Miyazaki"))