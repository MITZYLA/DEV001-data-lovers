import { filterDirector, orderAZ } from '../src/data.js';
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
    director: "Isao Takahata",
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
    expect(filterDirector("Hayao Miyazaki", directorFiltrado)).toEqual(Miyazaki);
  });
});


let selectData = [
  {
    title: "Castle in the Sky"
  },
  {
    title: "Princess Mononoke"
  },
];


let dataSortAZ = [
  {
    title: "Castle in the Sky"
  },
  {
    title: "Princess Mononoke"
  },
]
let dataSortZA = [
  {
    title: "Princess Mononoke"
  },
  {
    title: "Castle in the Sky"
  },
];

describe("orderAZ", () => {
  it("es una funcion", () => {
    expect(typeof orderAZ).toBe('function');
  });

  it("Debe retornar las peliculas de  A - Z,", () => {
    expect(orderAZ(selectData)).toEqual(dataSortAZ);
  });
  it("Debe retornar las peliculas de Z - A,", () => {
    expect(orderAZ(selectData)).toEqual(dataSortZA);
  });
  it("recorre la array en diferentes casos", () => {
    expect(orderAZ([{ title: "a" }, { title: "b" }])).toEqual([{ title: "b" }, { title: "a" }]);
  })
});

//it("retornar solo Hayao films", () => {
 // expect(filterDirector("Hayao Miyazaki", directorFiltrado)).toEqual(Miyazaki);


//describe('anotherExample', () => {
  //it('is a function', () => {
   // expect(typeof anotherExample).toBe('function');
 // });

  //it('returns `anotherExample`', () => {
    //expect(anotherExample()).toBe('OMG');
  //});
//});
