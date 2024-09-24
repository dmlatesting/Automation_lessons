// Exercises: Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Use forEach to console.log each country in the countries array.
countries.forEach(element => console.log(element))

// Use forEach to console.log each name in the names array.
names.forEach(element => console.log(element))


// Use forEach to console.log each number in the numbers array.
numbers.forEach(element => console.log(element))

// Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUppreCase = countries.map((element) => element.toUpperCase())

// Use map to create an array of countries length from countries array.
const countriesLength = countries.map(element => element.length)

// Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map(element => element*element)

// Use map to change to each name to uppercase in the names array
const namesToUpperCase = names.map((element) => element.toUpperCase())

// Use map to map the products array to its corresponding prices.
const productPrices = products.map(product => product.price)

// Use filter to filter out countries containing land.
countries.filter(country => country.includes('land')) // Case sensitive 

countries.filter(country => country.toLowerCase().includes('land')) // Case insensitive 

// Use filter to filter out countries having six character.
countries.filter(country => country.length === 6)

// Use filter to filter out countries containing six letters and more in the country array.
countries.filter(country => country.length >= 6)

// Use filter to filter out country start with 'E';
countries.filter(country => country.slice(0,1) === 'E')

// Use filter to filter out only prices with values.
products.filter(product => product.price !== ' ' && product.price !== '')

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array) {
    return array.filter(element => typeof element === "string")
}
// Use reduce to sum all the numbers in the numbers array.
numbers.reduce((accum,curr) => accum + curr,0)

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let lastCountry = countries.pop(countries.length,1)
let concatCountries = countries.reduce((accum,curr) => accum + curr + ', ','')
console.log(`${concatCountries}and ${lastCountry} are north European countries`)

// Use some to check if some names' length greater than seven in names array
// function CheckSomeNamesLength(array,length){
//     array.some()
// }
const hasLongName = names.some(element => element.length > 7)

// Use every to check if all the countries contain the word land
const checkAllHasLand = countries.every(country => country.includes('land'))

// Use find to find the first country containing only six letters in the countries array
countries.find(country => country.length === 6)

// Use findIndex to find the position of the first country containing only six letters in the countries array
countries.findIndex(country => country.length === 6)

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
countries.findIndex(country => country === 'Norway')


// Exercises: Level 2


// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.map(product => product.price).filter(price => price !== ' ' && price !== '').reduce((acc, cur) => acc + cur, 0)

// Find the sum of price of products using only reduce reduce(callback))
products.reduce((acc, cur) => acc + Number(cur.price), 0)

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern
// (you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const countriesArr = require('./countries_data');

function categorizeCountries(array, pattern){
  return array.filter(country => country['name'].includes(pattern))   
}

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(array){
  return (array.slice(0,10)).map(country => country.name)
}

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(array){  
  return (array.slice(-10)).map(country => country.name)
}

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

function getInitialLettersCounts(array){
  const initialLettersCounts = {}

  array.forEach(country => {
    const initialLetter = country.name[0]
  
    initialLettersCounts[initialLetter]?initialLettersCounts[initialLetter]++:initialLettersCounts[initialLetter] = 1
  })

  return initialLettersCounts
}

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

const lettersUsedManyTimes = Object.entries(getInitialLettersCounts(countriesArr)).filter(element => element[1] > 1)

lettersUsedManyTimes.forEach(element => console.log(`Letter ${element[0]} used ${element[1]} times`))


// Exercises: Level 3

// Use the countries information, in the data folder. Sort countries by name, by capital, by population
function sortByName(countries) {
  countries.sort((a,b) => a.name.localeCompare(b.name))
}

function sortByCapital(countries) {
  countries.sort((a,b) => a.capital.localeCompare(b.capital))
}

function sortByPopulation(countries) {
  countries.sort((a,b) => a.population - b.population)
}

// *** Find the 10 most spoken languages
function mostSpokenLanguages(array, count = 10) {
  const allLanguagesCounts = {}

  array.forEach(country => {
    country.languages.forEach(language => {
      allLanguagesCounts[language]?allLanguagesCounts[language]++ :allLanguagesCounts[language] = 1      
    })
  })

  const sortedLanguages = Object.entries(allLanguagesCounts).sort((a,b) => b[1] - a[1])

  return sortedLanguages.slice(0,count).map(lang => ({language: lang[0], count: lang[1]}))
}

const topLanguages = mostSpokenLanguages(countriesArr);
console.log(topLanguages)

// *** Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(array, count = 10) {
  const sortedCountries = array.sort((a,b) => b.population - a.population)

  return sortedCountries.slice(0, count).map(country => ({
    country: country.name, 
    population: country.population
  }))  
}
console.log(mostPopulatedCountries(countriesArr, 10))

// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
// You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = {
  data: [],

  setData(newData) {
    this.data = newData.sort((a,b) => a - b)
  },

  count(){
    return this.data.length
  },

  sum() {
    return this.data.reduce((acc, curr) => acc + curr,0)
  },

  min(){
    return this.data[0]
  },

  max() {
    return this.data[this.data.length - 1]
  },

  range() {
    return this.data[this.data.length - 1] - this.data[0]
  },

  mean() {
    const sum = this.data.reduce((acc, curr) => acc + curr,0)
    return sum / this.data.length
  },

  median() {
    const middleIndex = Math.floor(this.data.length / 2);
        if (this.data.length % 2 === 0) {
            return (this.data[middleIndex - 1] + this.data[middleIndex]) / 2;
        } else {
            return this.data[middleIndex];
        }
  },

  mode() {
    const numberCounts = {}

    this.data.forEach(number => {    
      numberCounts[number]?numberCounts[number]++:numberCounts[number] = 1      
    })
    
    const sortedNumberCounts = Object.entries(numberCounts).sort((a,b) => b[1] - a[1])

    return sortedNumberCounts.slice(0,1).map(mode => ({mode: mode[0], count: mode[1]}))
  },

  var() {
    const mean = this.mean()
    const diff = this.data.reduce((acc, curr) => acc + (curr - mean) ** 2.,0)
    return diff / this.data.length
  },

  std() {
    return Math.sqrt(this.var())
  } 
}

statistics.setData(ages)
console.log('Count:', statistics.count())
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
