import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const contenedor = document.getElementById('root')
//declaro el objeto y la propiedad en data.filma(para acceder a la propiedad de un objeto, objeto.propiedad)
const dataGhibli = data.films
//data.films es una array de objetos y se pintan con un bucle for o for each
console.log(dataGhibli)
//aquí cambié var por let. es let porque es reasignable(porque tenemos una array(que es dataGhibli) con varios elementos)
//para saber la extension de la array uso la propiedad length
//el ultimo indice es 3, es la extension de toda la array -1

const showInfo = () => {

    for (let i = 0; i < dataGhibli.length; i++) {

        //tome el contenedor vacio y  se le imprimio el img src.
        //dataGhibli es una array, la posicion de i es cada iteracion(i=0) entonces tenemos array en 0 array(0)y eso es un objeto.
        //el .poster es la forma de acceder a un objeto.
        contenedor.innerHTML += `<img src=  ${dataGhibli[i].poster}>`;

    }

    return contenedor
};

showInfo()
//dataGhibli en la posicion de [i] es un objeto, y para que queden dentro de una array uso filtro push.
//en la condicional if preguntamos que las peliculas(dataGhibli[i].director)sean (==)solo de Miyasaki

const filterDirector = (director) => {
    let allDirectors = []

    for (let i = 0; i < dataGhibli.length; i++) {
        //en la condicional if, preguntamos que las peliculas que estan en el objeto dataGhibli[i] sean del director que se pida.
        if (dataGhibli[i].director === director) {
            console.log(dataGhibli[i])
            //use el filtro push, asi se filtran los objetos dentro de la variable allDirectors que estan en la array
            allDirectors.push(dataGhibli[i])
        }
    }
    return allDirectors//retorna las variables que estan dentro de la array
}
//buscar y hacer select y addEvenListener
//document.addEventListener("seleccionar").addEventListener("change",( )=>{
//});

const select = document.getElementById("Seleccionar")
console.log(select.value)

select.addEventListener("change", () => { //change es el evnto,escucha el cambio de valor
    contenedor.innerHTML = ``;
    const director = select.value
    filterDirector(director)
    console.log(filterDirector(director))
});






//console.log(filterDirector("Hayao Miyazaki"))