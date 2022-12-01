import { filterDirector} from '../src/data.js';
//test para director(select)
let directorFiltrado = [
  {
    title: "Castle in the sky",
    director: "Hayao Miyazaki",
  },
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
  },
  {
    title: "Grave of the Fireflies",
    director:"Isao Takahata",
  }
];
let Miyazaki = [
  {
    title: "Castle in the sky",
    director: "Hayao Miyazaki",
  },
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
  },
];

describe("filterDirector", () => {
  it("es una funcion", () => {
    expect(typeof filterDirector).toBe('function');
  });

  it("retornar solo Hayao films", () => {
    expect(filterDirector("Hayao Miyazaki",directorFiltrado)).toEqual(Miyazaki);
  });
});


//describe('anotherExample', () => {
  //it('is a function', () => {
   // expect(typeof anotherExample).toBe('function');
 // });

  //it('returns `anotherExample`', () => {
    //expect(anotherExample()).toBe('OMG');
  //});
//});
