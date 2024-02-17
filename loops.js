// loops are blocks of code untill a specific code is executed 
/* we have */
// for loop
// while loop
// do while loop
// for in loop
// for of loop 
// map
// forEach 



//for loops
// how many time you want to execute the loop. we start by usinf for 
// we have the (initialization, codition,increment/decrement)
// you can't use const in loops 

for (let a = 0; a <= 11; a++) {
    console.log(a);
}

// while loop is the opposite of for loop
 let isRuning =true;

 while (isRuning) {
    console.log("I Am Runing");
 }

// break statement

 let i = 0;

 while (i <= 10){
    console.log(1);

    if (i === 5) break;
 i++;
 }
 

 // continue statement 

 while (c <= 10){
    c++;
 if (c == 5) continue;
 console.log(c);
 }


 // do while loop 

 let d = 0;
 do {
    console.log(d);
    d++;
 } while (d <=10);


 // for in loop
 // for object

 const personDetails = {
    name :"Black",
    age: 30,
    sex: "male",
 };
 // 
 for ( let key in personDetails) {
    console.log(key, personDetails[key]);
 }

 // for of loop
 // is for arrays 

 const bibleQuotes = [
    " Love your neighbor as yourself",
    "God is love",
    "Jesus is lord"
 ]
 
 for (let quote of bibleQuotes){
    console.log(quote);
 }

// for each
// is for arrays 

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,];

numbers.forEach((number) => console.log(number));