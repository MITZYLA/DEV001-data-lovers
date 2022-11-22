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
        console.log(dataGhibli[i].poster)



        //tome el contenedor vacio y  se le imprimio el img src.
        //dataGhibli es una array, la posicion de i es cada iteracion(i=0) entonces tenemos array en 0 array(0)y eso es un objeto.
        //el .poster es la forma de acceder a un objeto.
        contenedor.innerHTML += `<img src=  ${dataGhibli[i].poster}>`;

    }

    return contenedor
};

showInfo()

const filterDirector = () => {
    for (let i = 0; i < dataGhibli.length; i++) {
        console.log(dataGhibli[i].director)
        if (dataGhibli[i] == ["Hayao Miyazaki"]) {
            console.log(dataGhibli[i].director)
         }
    }
}

filterDirector()