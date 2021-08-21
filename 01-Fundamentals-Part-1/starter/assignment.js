
const COUNTRY = "India"
const CONTINENT = "Asia"
let population = 128
const IS_ISLAND = false;
let language = "hindi";

/*
console.log(COUNTRY);
console.log(CONTINENT);
console.log(population);
console.log(IS_ISLAND);
console.log(language);


language= "Hindi";
console.log(language);

COUNTRY = "Pakistan"
console.log(COUNTRY)


console.log(population/2);
let populationFinland = 3;
console.log(population>populationFinland);
let averagePopulation = 33;
console.log(population<averagePopulation);

let description = `${COUNTRY} is in ${CONTINENT}, and it's majority of population speaks ${language}`;

console.log(description);

if(population>averagePopulation){
    console.log(`${COUNTRY}'s population is above average`);
}
else{
    let populationDiffFromAverage = averagePopulation-population;
    console.log(`${COUNTRY}'s population is ${populationDiffFromAverage} below average`);
}
*/

/*
console.log('9'-'5'); //4
console.log('19'-'13'+'17'); //617
console.log('19'-'13'+17); //23
console.log('123'<57); //false
console.log(5+6+'4'+9-4-2); //1143
*/

/*
numNeighbours = prompt("How many neighbour countries does your country have?");

if(Number(numNeighbours)===1){
    console.log("only 1 border!");
}
else if(Number(numNeighbours)>1){
    console.log("more than 1 border");
}
else{
    console.log("No borders/invalid input");
}
*/

/*
if(language==="english" && population<50 && !IS_ISLAND){
    console.log(`You should live in ${COUNTRY} :)`);
}
else{
    console.log(`${COUNTRY} does not meet your criteria :(`);
}
*/

/*
switch (language){
    case "chinese":
    case "mandarin":
        console.log("Most number of native speakers");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("number 4");
        break;
    case "arabic":
        console.log("5th most spoker langauge");
        break;
    default:
        console.log("bihari");
        break;
}
*/

let where;
where = population>33 ? "above" : "below";
let statement = `${COUNTRY}'s population is ${where} average`;
console.log(statement);
