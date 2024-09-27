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

