'use strict'

/*
function logger(){
    console.log("my name is Shafee");
}

logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const juiceInfo = fruitProcessor(1,2);
console.log(juiceInfo);

// if no arguments are passed, undefined value is assgined;
console.log(fruitProcessor());

console.log(Number("12w"));
*/

/*
//function declaration
console.log(age(1995));
function age(birthYear){
    return 2021 - Number(birthYear);
}

//function expression
//function expression cannot be called before initialization
const calcAge2 = function (birthYear){
    return 2021-birthYear;
}
console.log(calcAge2(1997));

//Arrow function
const calcAge3 = birthYear => 2021-birthYear;
console.log(calcAge3(1990));

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2021- birthYear;
    const retirement = 65 - age;
    return(`${firstName} retires in ${retirement} years`);
}
console.log(yearsUntilRetirement(1997,"Shafee"));
*/

/*
const pieces =fruit =>fruit*4;

const juice =function (apples,oranges){
    return `Juice with ${pieces(apples)} apple pieces and ${pieces(oranges)} pieces of oranges`;
}

console.log(juice(1,2));
*/

/*
const calcAverage = (s1,s2,s3) => (s1+s2+s3)/3;

function checkWinner(avgDolphin,avgKoalas){
    if(avgDolphin>=2*avgKoalas){
        console.log(`Dolphins win (${avgDolphin},${avgKoalas})`);
    }
    else if(avgKoalas>=2*avgDolphin){
        console.log(`Koalas win (${avgKoalas},${avgDolphin})`);
    }
    else{
        console.log(`both teams wasted everyone's time (${avgKoalas},${avgDolphin})`);
    }
}

const dolphinAverage = calcAverage(44,23,71);
const koalasAverage = calcAverage(65,54,49);
checkWinner(dolphinAverage,koalasAverage);

const dolphinAverage2 = calcAverage(10,110,110);
const koalasAverage2 = calcAverage(10,10,10);
checkWinner(dolphinAverage2,koalasAverage2);
*/

const years = [1990,1995,2000,2005];
console.log(years+5); //converts array to comma-separated array and appends number

const friends = ['a','b','c'];
//add in last position
const friendsLength = friends.push('d');
console.log(friends);
console.log(friendsLength);

//add in first position
friends.unshift('e');
console.log(friends);

//remove last element
const friendRemoved = friends.pop();
console.log(friendRemoved);
console.log(friends);

// remove first element
const firstFriend = friends.shift();
console.log(firstFriend);
console.log(friends);