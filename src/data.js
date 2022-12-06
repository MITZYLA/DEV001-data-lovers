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

  arrayMovies.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return arrayMovies;



};






  //N3..if (selectOrder == "A-Z") {
  //let orderAZ = arrayMovies.sort((a, b) =>
      //a.title.localCompare(b.title)
    //)
    //return orderAZ
  //}
  // else if (selectOrder == "Z-A") {
  //  const orderZA = arrayMovies.sort((a, b) =>
   //  b.title.localCompare(a.title)
  //  )
  //  return orderZA
  //} else { return arrayMovies }



