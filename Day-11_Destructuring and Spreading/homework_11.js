// Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const allCountries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = allCountries

// Destructure the rectangle object by its properties or keys.
let {width, height, area, perimeter} = rectangle


// Exercises: Level 2

const allUsers = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }]

// Iterate through the users array and get all the keys of the object using destructuring
for (const {name, scores, skills, age} of allUsers) {
    console.log(name, scores, skills, age)
}


// Find the persons who have less than two skills
for (const {name, scores, skills, age} of allUsers) {
    if (skills.length < 2) {console.log(name)}
}

// Exercises: Level 3


// Destructure the countries object print name, capital, population and languages of all countries
const countriesArr = require('../Day-9_Higher_Order_Functions/countries_data');

for (const {name, capital, population, languages} of countriesArr) {
  console.log(`Name: ${name}, Capitol: ${capital}, Population: ${population}, Languages: ${languages}`)
}

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
// Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores, jsScore = scores[skills.indexOf('JS')], reactScore = scores[skills.indexOf('React')] ] = student

console.log(name, skills, jsScore, reactScore)


// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

function convertArrayToObject(array) {
  return array.map(student => {
    const [name, skills, scores] = student
    return {
      name: name,
      skills: skills,
      scores: scores
    }
  })
}


// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets


const studentDavid = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent = {
  ...studentDavid, 
  skills: {
    ...studentDavid.skills,
    frontEnd: [
      ...studentDavid.skills.frontEnd,
      {skill:'Bootstrap', level: 8}
    ],
    backEnd: [
      ...studentDavid.skills.backEnd,
      {skill:'Express', level: '9'}],      
    dataBase: [
      ...studentDavid.skills.dataBase,
      {skill:'SQL', level: '8'}],
    dataScience: [...studentDavid.skills.dataScience, 'SQL']
  }}
  console.log(studentDavid)
console.info(newStudent)
