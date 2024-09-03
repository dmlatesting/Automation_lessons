const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Iceland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// Exercises: Level 1

//Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i = 0; i <= 10; i++){
  console.log(i)
}

i = 0
do {
  console.log(i)
  i++
} while (i <= 10)

i = 0
while (i <= 10) {
  console.log(i)
  i++
}

    //Iterate 10 to 0 using for loop, do the same using while and do while loop
   
for(let i = 10; i >= 0; i--){
  console.log(i)
}

i = 10
do {
  console.log(i)
  i--
} while (i >= 0)

i = 10
while (i >= 0) {
  console.log(i)
  i--
}

//Iterate 0 to n using for loop
let n = 5
for(let i = 0; i <= n; i++){
    console.log(i)
  }

  /*Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
for (let i = 1; i <= 7; i++){
    console.log("#".repeat(i))
}

/*Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/ 

for (let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}

/*Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */

console.log('i\ti^2\ti^3');  
for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t${i**2}\t${i**3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 10; i++){
    console.log(i)
    i++
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 10; i++){
    i++
    console.log(i)    
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
let isPrime = true
for (let num = 0; num <= 100; num++){  
    if (num <= 1) continue  // Numbers less than or equal to 1 are not Prime numbers
    for(let j = 2; j < num; j++){
        num % j == 0? isPrime*=false :isPrime*=true        
    }
    if (isPrime){console.log('Prime number:',num)}
    isPrime = true
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for(let i = 0; i <= 100; i++){
    sum += i
}
console.log('The sum of all numbers from 0 to 100 is',sum)
  

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0
let sumOdd = 0
for(let i = 0; i <= 100; i++){
    i % 2 === 0?sumEven += i:sumOdd += i
}
console.log('The sum of all evens from 0 to 100 is',sumEven)
console.log('And the sum of all odds from 0 to 100 is',sumOdd)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
const sumArray = [0,0]
for(let i = 0; i <= 100; i++){
    i % 2 === 0?sumArray[0] += i:sumArray[1] += i
}
console.log(sumArray)

// Develop a small script which generate array of 5 random numbers
const randomArray = []
for (let i = 0; i < 5; i++) {
    randomArray[i] = Math.floor(Math.random() * 100)
}
console.log(randomArray)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
const randomUniqueArray = []
let randomNumber = 0
for (let i = 0; i < 5; i++) {
    randomNumber = Math.floor(Math.random() * 100)    
    while (randomUniqueArray.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 100)        
      }
    randomUniqueArray[i] = randomNumber
}
console.log(randomUniqueArray)

// Develop a small script which generate a six characters random id:
// 5j2khz

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const length = 6
let result = ''
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
}
console.log(result);


// Exercises: Level 2

// Write a script which generates a random hexadecimal number.
// '#ee33df'
const charactersHEX = '0123456789ABCDEF'
const lengthHEX = 6
let resultHEX = '#'
for (let i = 0; i < lengthHEX; i++) {
    const randomIndex = Math.floor(Math.random() * charactersHEX.length);
    resultHEX += charactersHEX.charAt(randomIndex);
}
console.log(resultHEX);

// Write a script which generates a random rgb color number.
// rgb(240,180,80)
let colorRBG = `rbg(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
console.log(colorRBG);


// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const countriesNew = []
const countriesLength = []
countries.forEach(element => {
    countriesNew.push(element.toUpperCase())
    countriesLength.push(element.length)
})
console.log(countriesNew, countriesLength);

// Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
const arrayOfArrays = []
for (i = 0; i < countries.length; i++){
    arrayOfArrays.push([countries[i], countries[i].slice(0,3).toUpperCase(),countries[i].length])   
}
console.log(arrayOfArrays);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
const countriesWithLand = []
for (i = 0; i < countries.length; i++){
    if (countries[i].includes('land')){countriesWithLand.push(countries[i])}
}
console.log(countriesWithLand);

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
const countriesWithIa = []
for (i = 0; i < countries.length; i++){
    if (countries[i].endsWith('ia')){countriesWithIa.push(countries[i])}
}
console.log(countriesWithIa);

// Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
let index = 0
let maxLength = 0
for (i = 0; i < countries.length; i++){    
    if (countries[i].length > maxLength){
        index = i
    maxLength = countries[i].length}
}
console.log(countries[index]);

// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
for (i = 0; i < countries.length; i++){    
    if (countries[i].length == 5){console.log(countries[i]);}
}


// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let acronym = ''
mernStack.forEach(element => {
    acronym += element.slice(0,1).toUpperCase()
})
console.log(acronym);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (i = 0; i < webTechs.length; i++){
    console.log(webTechs[i]);
}
for (const element of webTechs){
    console.log(element);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon']
const fruitsReversed = []
for (i = 0; i < fruits.length; i++){
    fruitsReversed[i] = fruits[fruits.length -1 - i]
}
console.log(fruitsReversed);

// Print all the elements of array as shown below.
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
const fullStack = [['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']]
for (i = 0; i < fullStack.length; i++){
    for (j = 0; j < fullStack[i].length; j++){
        console.log(fullStack[i][j]);
    }
}


// Exercises: Level 3

// Copy countries array(Avoid mutation)
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = countries.slice()
console.log(sortedCountries.sort());


// Extract all the countries contain the word 'land' from the countries array and print it as array
// Extract all the countries containing only four characters from the countries array and print it as array
// Extract all the countries containing two or more words from the countries array and print it as array
// Find the country containing the hightest number of characters in the countries array
const newCountries = require('./countries'); 

index = 0
maxLength = 0
const newCountriesWithLand = []
const newCountriesWith4Chars = []
const newCountriesWith2Words = []

for (i = 0; i < newCountries.length; i++){
    if (newCountries[i].length > maxLength){
        index = i
        maxLength = newCountries[i].length}
    if (newCountries[i].includes('land')){newCountriesWithLand.push(newCountries[i])}
    if (newCountries[i].length == 4){newCountriesWith4Chars.push(newCountries[i])}
    if (newCountries[i].split(' ').length >= 2){newCountriesWith2Words.push(newCountries[i])}
}
console.log(newCountriesWithLand);
console.log(newCountriesWith4Chars);
console.log(newCountriesWith2Words);
console.log('Country containing the hightest number of characters:', newCountries[index]);

// Reverse the countries array and capitalize each country and stored it as an array
const upperCaseCountries = []
newCountries.reverse()
newCountries.forEach(element => {
    upperCaseCountries.push(element.toUpperCase())
})

console.log(upperCaseCountries);