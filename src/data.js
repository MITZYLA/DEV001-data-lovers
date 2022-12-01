//aqui van todas mis funciones

export const filterDirector = (nombreDirector, arrayGhibli) => {
  let eachDirectors = []

  for (let i = 0; i < arrayGhibli.length; i++) {
    //en la condicional if, preguntamos que las peliculas que estan en el objeto dataGhibli[i] sean del director que se pida.
    if (arrayGhibli[i].director === nombreDirector) {
      //console.log(arrayGhibli[i])
      //use el filtro push, asi se filtran los objetos dentro de la variable allDirectors que estan en la array
      eachDirectors.push(arrayGhibli[i])
    }
  }
  return eachDirectors//retorna las variables que estan dentro de la array
}
//seleccionar select y leer valor del cambio

export const orderAZ = (arrayMovies, selectOrder) => {
  console.log(arrayMovies,selectOrder)
  
  //if (selectOrder === "A-Z") {
   // const orderAZ = arrayMovies.sort((a, b) =>
    //  a.poster.localCompare(b.poster)
    //)
    //return orderAZ
  //} else if (selectOrder === "Z-A") {
    //const orderZA = arrayMovies.sort((a, b) =>
    //  b.poster.localCompare(a.poster)
    //)
   // return orderZA
 // } else { return arrayMovies }
};

