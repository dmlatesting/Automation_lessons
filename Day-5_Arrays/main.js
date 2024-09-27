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

//Exercise: Level 1

// Declare an empty array;
const arrEmpty = []

// Declare an array with more than 5 number of elements
const arr = [4, 57, 30, -1, 444, 9.99]
console.log(arr)

// Find the length of your array
console.log(arr.length)

// Get the first item, the middle item and the last item of the array
console.log(arr[0], `${arr.length % 2?arr[Math.floor(arr.length / 2)]:'No middle element'}`, arr[arr.length -1] )

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [45, 'Text', 8.44, true, {firstName: 'Dmitry', lastName: 'Lazarev'}, arr ]
console.log(mixedDataTypes)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] //

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log('The are', itCompanies.length, 'IT companies')

// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])

// Print out each company
itCompanies.forEach(element => {
    console.log(element)
});

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((element,index) => {
    //if changes needs to be applyed to initial array
    //itCompanies[index] = element.toUpperCase() 
    //console.log(itCompanies[index])
    
    //if only need to print out in Upper case
    console.log(element.toUpperCase()) 
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', '))

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let someCompany = 'IBM'
console.log(`${itCompanies.includes(someCompany)?someCompany:'Company is not found'}`)

// Filter out companies which have more than one 'o' without the filter method
const tempArr = []
itCompanies.forEach((element, index) => {    
    if (element.split('o').length <= 2) {tempArr.push(element)};   
})
//itCompanies = tempArr - If need to save it in initial array
console.log(tempArr)

// Sort the array using sort() method
itCompanies.sort()

// Reverse the array using reverse() method
itCompanies.reverse()

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3,itCompanies.length))


// Slice out the middle IT company or companies from the array
let center = Math.floor(itCompanies.length / 2)
itCompanies.length % 2
?console.log(itCompanies.slice(center, center + 1))
:console.log(itCompanies.slice(center - 1, center + 1))

// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// Remove the middle IT company or companies from the array\
center = Math.floor(itCompanies.length / 2)
itCompanies.length % 2
?itCompanies.splice(center, 1)
:itCompanies.splice(center - 1, 2)
console.log(itCompanies)

// Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

// Remove all IT companies
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies,'The End')


//Exercise: Level 2

//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace(/[.,]/g,'').split(' ')
console.log(words)
console.log(words.length)

//In the following shopping cart add, remove, edit items
/*
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) {shoppingCart.unshift('Meat')}
if (!shoppingCart.includes('Sugar')) {shoppingCart.push('Sugar')}
shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let newCountry = 'Ethiopia'
countries.includes(newCountry)?console.log(newCountry.toUpperCase()):countries.push(newCountry)
console.log(countries)

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
let newTech = 'Sass'
webTechs.includes(newTech)?console.log(`${newTech} is a CSS preprocess`):webTechs.push(newTech)
console.log(webTechs)

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)


//Exercise: Level 3

//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 119]

//- Sort the array and find the min and max age
ages.sort(function (a, b) {  return a - b;  });
let minAge = ages[0]
let maxAge = ages[ages.length - 1]
console.log(ages)
console.log( `Min age: ${minAge}, Max age: ${maxAge}`)

//- Find the average age(all items divided by number of items)
let sum = 0
ages.forEach(element => {sum = sum + element})
let average = sum / ages.length
console.log(sum, `Average age: ${average} `)

ages.reduce((sumValue, currentValue) => sumValue + currentValue, 0)
console.log(sum, `Average age (second method): ${average} `)

//- Find the range of the ages(max minus min)
console.log(`Range: ${maxAge - minAge} `)

//- Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(minAge - average) === maxAge - average)

//Slice the first ten countries from the countries array
console.log(countries.slice(0,10))

//Find the middle country(ies) in the countries array
center = Math.floor(countries.length / 2)
countries.length % 2
?console.log(countries.slice(center, center + 1))
:console.log(countries.slice(center - 1, center + 1))


//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countriesFirstPart = []
let countriesSecondPart = []
center = Math.floor(countries.length / 2)
if (countries.length % 2) {
    countriesFirstPart = countries.slice(0,center + 1),
    countriesSecondPart = countries.slice(center + 1, countries.length)
}else {
    countriesFirstPart = countries.slice(0,center + 2),
    countriesSecondPart = countries.slice(center + 2, countries.length)
}
console.log(countriesFirstPart, countriesSecondPart)