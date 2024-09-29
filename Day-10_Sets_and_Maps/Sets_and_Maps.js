// Exercises:Level 1

// create an empty set
const emptySet = new Set()

// Create a set containing 0 to 10 using loop
const set10 = new Set()
for (i = 0; i <= 10; i++) {
    set10.add(i)
}

// Remove an element from a set
set10.delete(10)

// Clear a set
set10.clear()

// Create a set of 5 string elements from array
const countries = ['Finland', 'Sweden', 'Norway', 'Ukraine', 'Uzbekistan']
const countrySet = new Set(countries)

// Create a map of countries and number of characters of a country
const countriesMap = new Map()

countries.forEach(country => countriesMap.set(country, country.length))

// Exercises:Level 2
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b
const union = new Set([...a, ...b])

// Find a intersection b
const A = new Set(a)
const B = new Set(b)

const intersect = new Set(a.filter(number => B.has(number)))

// Find a with b
const  difAB = new Set(a.filter((num) => !B.has(num)))
const  difBA = new Set(b.filter((num) => !A.has(num)))

console.log(difAB,difBA)


// Exercises:Level 3

// How many languages are there in the countries object file.
const countriesArr = require('./../Day-9_Higher_Order_Functions/countries_data');
const languages = new Set()

countriesArr.forEach(country => {
    country.languages.forEach(lang => languages.add(lang))
})
console.log(`There are ${languages.size} languages`)

