import { filterDirector, orderAZ } from './data.js';
import data from './data/ghibli/ghibli.js';

const contenedor = document.getElementById('root')
//declaro el objeto y la propiedad en data.film 
//objeto.propiedad=>para acceder a la propiedad de un objeto
const dataGhibli = data.films
//data.films=array de objetos.Se pintan con un bucle for o for each

// showInfo muestra el array de todos los directores(dataGhibli)
// la siguiente funcion pinto los primeros posters
const showInfo = (showFilms) => {

    for (let i = 0; i < showFilms.length; i++) { //para saber la extension de la array uso la propiedad length

        //tome el contenedor vacio y se le imprimio el img src. en la iteracion de este for estoy uniendo o concatenando todas asimagenes (asignación de adiciónx += y	x = x + y)
        //dataGhibli es una array, la posicion de i es cada iteracion(i=0) entonces tenemos array en 0 array(0)y eso es un objeto.
        contenedor.innerHTML = contenedor.innerHTML + `<img class= "caratulas" src=  ${showFilms[i].poster}>`; //src=>propiedad del elemento img
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