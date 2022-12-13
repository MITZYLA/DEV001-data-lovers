import { filterDirector, orderAZ } from './data.js';
import data from './data/ghibli/ghibli.js';
//declaro la variable contenedor, su id es root
const contenedor = document.getElementById('root')
//declaro el objeto y la propiedad en data.film 
const dataGhibli = data.films //para acceder a la propiedad de un objeto, objeto.propiedad
//data.films=array de objetos se pintan con un bucle for o for each

// showInfo muestra el array de todos los directores(dataGhibli)
// la siguiente funcion pinto los primeros posters
const showInfo = (showFilms) => {  //showfilms=parametro.(porque necesito el array de las peliculas)

    // tenemos una array(que es dataGhibli) con varios elementos
    //para saber la extension de la array uso la propiedad length
 

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


seleccionarDir.addEventListener("change", () => { //change es el evnto,escucha el cambio de valor
    contenedor.innerHTML = ``;
    const director = seleccionarDir.value
    showInfo(filterDirector(director, dataGhibli))//aca invoqué mi array filtrada lo que mostró la seleccion en la interfaz.
    //console.log(filterDirector(director))//nuevo array ya filtrado
});

seleccionaAZ.addEventListener("change", () => {
    contenedor.innerHTML = ``;
    const orderValue = seleccionaAZ.value
    showInfo(orderAZ(dataGhibli, orderValue))
 
});









//console.log(filterDirector("Hayao Miyazaki"))