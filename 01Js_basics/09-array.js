const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)node 09_array.js

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//.Concat Operater...
// const allHeros = marvel_heros.concat(dc_heros)..
// console.log(allHeros);

//Spread Operater....
// const allHeros = [...marvel_heros, ...dc_heros]...
// console.log(allHeros);

//Flat Operater...
// const another_array =[1, 2, 3,[4, 5, 6], 7, [8, 9,[10, 11]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Dipak"));
console.log(Array.from("Dipak"));
console.log(Array.from({ name: "Dipak" }));