//Exercises: Level 1

//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Dmitry'
let lastName = 'Lazarev'
let country = 'Ukraine'
let city = 'Odessa'
let age = 44
let isMarried = true
let year = 2024
console.log(typeof(firstName), '\n', typeof(lastName),'\n', typeof(country),'\n', typeof(city),'\n', typeof(age),'\n', typeof(isMarried),'\n', typeof(year))

//Check if type of '10' is equal to 10
console.log('10' === 10)

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

/* Boolean value is either true or false.
Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value. */
let undef
console.log(5>4, '10' == 10, 'text' == 'text')
console.log(10 <=5 && 5>3, 5-3==1, 'Text' == 'text')

/*Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3 (true)
4 >= 3 (true)
4 < 3 (false)
4 <= 3 (false)
4 == 4 (true)
4 === 4 (true)
4 != 4 (false)
4 !== 4 (false)
4 != '4' (false)
4 == '4' (true)
4 === '4' (false)
Find the length of python and jargon and make a falsy comparison statement. */

/*Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 (true)
4 > 3 && 10 > 12 (false)
4 > 3 || 10 < 12 (true)
4 > 3 || 10 > 12 (true)
!(4 > 3) (false)
!(4 < 3) (true)
!(false) (true)
!(4 > 3 && 10 < 12) (fale)
!(4 > 3 && 10 > 12) (true)
!(4 === '4') (true)
There is no 'on' in both dragon and python (logiacly false but this is nither arithmetic not logic operation) */


/*Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */
const myDateObj = new Date()
console.log('The year:', myDateObj.getFullYear())
console.log('The month:', myDateObj.getMonth())
console.log('The date:', myDateObj.getDate())
console.log('The day:', myDateObj.getDay)
console.log('The hours:', myDateObj.getHours())
console.log('The minutes:', myDateObj.getMinutes())
console.log('The seconds elapsed from January 1, 1970 to now:', parseInt(Date.now()/1000))
console.log('The seconds elapsed from January 1, 1970 to now:', parseInt(myDateObj.getTime()/1000))


//Exercises: Level 2

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const prompt = require("prompt-sync")();

let base = prompt('Enter base:')
let height = prompt('Enter height:')
console.log('Area:', 0.5*base*height)

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt('Enter side a:')
let sideB = prompt('Enter side b:')
let sideC = prompt('Enter side c:')
console.log('The perimeter of the triangle is:', a + b + c)

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter length:')
let width = prompt('Enter width:')
console.log('The area of rectangle is:', length * width)
console.log('The perimeter of rectangle is:', 2 * (length + width))

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt('Enter radius:')
console.log('The area of a circle is:', Math.PI * Math.pow(radius,2))

//Calculate the slope, x-intercept and y-intercept of y = 2x -2

/*Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

Compare the slope of above two questions.

Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.*/

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let numHours = prompt('Enter number of working hours per week:')
let rate = prompt('Enter rate:')
console.log('Your weekly earning is', numHours * rate)

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt ('Enter your name:')
name.length > 7
? console.log(`Your name ${name} is long`)
: console.log(`Your name ${name} is short`)

//Compare your first name length and your family name length and you should get this output.
let firstName = 'Dmitry'
let lastName = 'Lazarev'
console.log(firstName.length, lastName.length)
firstName.length > lastName.length
? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
: console.log(`Your first name, ${firstName} is equeal or same as your family name, ${lastName}`)
