//Exercises: Level 1

//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let userAge = prompt('Enter your age')
if (userAge >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log(`You need to wait ${18 - userAge} more years`)
}

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAGe = 44
let yourAge = prompt('Enter your age:')
if (myAGe > yourAge) {
    console.log(`You are ${myAGe - yourAge} younger than me`)
}else{
    console.log(`You are ${yourAge - myAGe} older than me`)
}

/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
*/
let a = 5
let b = 10
if (a > b){
    console.log(`${a} is greater than ${b}`)
}else{
    console.log(`${a} is less than ${b}`)   
}
a > b
?console.log(`${a} is greater than ${b}`)
:console.log(`${a} is less than ${b}`)   

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt('Enter a number:')
number / 2 == parseInt(number / 2)
? console.log(`${number} is an even number`)
: console.log(`${number} is an odd number`)


//Exercises: Level 2

/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let score = prompt('Enter your score:')
switch(true){
    case score >= 0 && score < 50:
        console.log('You have F grade')
        break
    case score >= 50 && score < 60:
        console.log('You have D grade')
        break
    case score >= 60 && score < 70:
        console.log('You have C grade')
        break
    case score >= 70 && score < 80:
    console.log('You have B grade')
    break
    case score >= 80 && score <= 100:
        console.log('You have A grade')
        break
    default:
        console.log('You entered incorrect value')
}

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/
//let season = prompt('Enter month:')
let season = 'March'
if (season == 'September' || season =='October' || season =='November'){
    console.log('The season is Autumn')
} else if (season == 'December' || season =='January' || season =='February') {
    console.log('The season is Winter')
} else if (season == 'March' || season =='April' || season =='May') {
    console.log('The season is Spring')
} else if (season == 'June' || season =='July' || season =='August') {
    console.log('The season is Summer')
} else {
    console.log('You entered incorrect value')
}


//Check if a day is weekend day or a working day. Your script will take day as an input.
let weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
//let day = prompt('Enter day of the week:')
let day = 'saturday'
if (weekDays.indexOf(day.toLowerCase()) == -1){
    console.log('You entered incorrect value')
} else if (weekDays.indexOf(day.toLowerCase()) >= 5) {
    console.log(`${day} is a weekend.`)
} else {
    console.log(`${day} is a working day.`)
}


//Exercises: Level 3

//Write a program which tells the number of days in a month.
let monthesDays = [31,28,31,30,31,30,31,31,30,31,30,31]
let monthes = ['january', 'febrary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
//let userMonth = prompt('Enter month name:')
let userMonth = 'feBrary'
if (monthes.indexOf(userMonth.toLowerCase()) == -1) {
    console.log('You entered incorrect value')
} else {
    console.log(`${monthesDays[monthes.indexOf(userMonth.toLowerCase())]}`)
}