// Exercises: Level 1

// Declare a function fullName and it print out your full name.
function fullName(){
    console.log("Dmitry Lazarev");
}
fullName()

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2(firstName, lastName){
    console.log(`${firstName} ${lastName}`);
}
fullName2('Dmitry', 'Lazarev')

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1,num2){
    return num1 + num2
}
console.log(addNumbers(5,10));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width){
    return length * width
}
console.log(areaOfRectangle(10,25));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
    return 2 * (length + width)
}
console.log(perimeterOfRectangle(10,25));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
    return length * width * height
}
console.log(volumeOfRectPrism(10,25,15));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius){
    return Math.PI * Math.pow(radius,2)
}
console.log(areaOfCircle(10));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius){
    return 2 * Math.PI *radius
}
console.log(circumOfCircle(10));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityOfSubs(mass,volume){      
    return mass / volume    
}
console.log(densityOfSubs(10, 20));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
/**
 * Calculates speed
 *
 * @param   distance  The total distance in kilometers.
 * @param   time  The total amount of time in hours.  
 * @returns Speed in Km/h.
 */
function speedOfObj(distance,time){      
    return distance / time    
}
console.log(speedOfObj(10, 5));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
/**
 * Calculates weight.
 *
 * @const   g  Acceleration due to gravity on Earth in m/s^2 
 * @param   mass  Mass of the object in Kg.  
 * @returns Speed in Km/h.
 */
function weightofObj(mass, g = 9.81){        
    let weight = mass * g + ' N'
    return weight
}
console.log(weightofObj(100));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(tempInCelsius){
    return tempInCelsius * 9 / 5 + 32
}
console.log(convertCelsiusToFahrenheit(10));


// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

/**
 * Calculates BMI.
 *
 * @param   weight  Weight of a person in kilograms.
 * @param   height  Height of a person in meters.  
 * @returns person's current state: underweight, normal, overweight or obese 
 */
function bmiCalc(weight,height){
    let bmi = weight / height ** 2
    console.log(bmi);
    if (bmi < 18.5){
        return "Underweight";
    } else if (bmi < 25.0) {
        return "Normal weight"
    } else if (bmi < 30.0) {
        return "Overweight"
    } else {
        return "Obese"
    }
  }
console.log(bmiCalc(50, 1.68));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    if (month == 'September' || month =='October' || month =='November'){
        return 'Autumn'
    } else if (month == 'December' || month =='January' || month =='February') {
        return 'Winter'        
    } else if (month == 'March' || month =='April' || month =='May') {
        return 'Spring'
    } else if (month == 'June' || month =='July' || month =='August') {
        return 'Summer'
    } else {
        return 'You entered incorrect value'           
    }
}
console.log(checkSeason('March'));


// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(arg1,arg2,arg3){
    const arr = [arg1,arg2,arg3]
    arr.sort(function (a, b) {  return a - b;  }); 
    return arr[arr.length - 1]
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))


// Exercises: Level 2

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
function solveQuadEquation(a,b,c){
    const discriminant = b * b - 4 * a * c;    
    if (discriminant > 0) {        
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1,root2]
    } else if (discriminant === 0) {
        // One real root
        const root = -b / (2 * a);
        return [root]
    } else {        
        return [0];
    }
}
console.log(solveQuadEquation())
console.log(solveQuadEquation(1, 4, 4))
console.log(solveQuadEquation(1, -1, -2))

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
}
printArray([34,65,'sdsdf',true])

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
function showDateTime() {
    const now = new Date();    
    console.log(now);
    
    const formatYYYY = now.getFullYear()
    const formatMM = (now.getMonth() + 1).toString().padStart(2, '0')    
    const formatDD = now.getDate().toString().padStart(2, '0')   
    const formatHH = now.getHours().toString().padStart(2, '0')
    const formatmm = now.getMinutes().toString().padStart(2, '0')
   
     console.log(`${formatDD}/${formatMM}/${formatYYYY} ${formatHH}:${formatmm}` );   
}
showDateTime()


// Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
let x 
let y 
function swapValues(value1,value2){    
    x = value2
    y = value1
}
swapValues(3,4)
console.log(x,y);


// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
function reverseArray(arr){
    const reverseArr = []
    for (let i = 0; i < arr.length; i++) {
        reverseArr.push(arr[arr.length - i - 1])
    }
    return reverseArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// Using .forEach()
function capitalizeArray(arr){
    const capitalizedArr = []    
    arr.forEach(element => {
        capitalizedArr.push(element.toString().toUpperCase())
    })
    return capitalizedArr
}
console.log(capitalizeArray([['a', 'b', 'c']]));

// Using .map()
function capitalizeArray(arr){
    const capitalizedArr = arr.map((element) => element.toString().toUpperCase())  
    
    return capitalizedArr
}
console.log(capitalizeArray([['a', 'b', 'c']]));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr, item) {
    arr.push(item)
    return arr
}

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr, index){
    if (index >= 0 && index < arr.length) {
        arr.splice(index, 1); 
    } else {
        console.log("Index out of bounds"); 
    }
    return arr
}

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return sum
}

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number) {
    let sumOfOdds = 0
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) { 
            sumOfOdds += i; 
        }
    }
    return sumOfOdds
}

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(number) {
    let sumOfEven = 0
    for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) { 
            sumOfEven += i; 
        }
    }
    return sumOfEven
}

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
function evensAndOdds(number) {
    let countOfEven = 0
    let countOfOdds = 0
    if (number > 0){
        for (let i = 1; i <= number; i++) {
            i % 2 == 0?countOfEven += 1:countOfOdds += 1
        }
        console.log(`The number of odds: ${countOfOdds}`)
        console.log(`The number of even: ${countOfEven}`);
    }else{
        console.log("Number should be positive"); 
    }

    

}
evensAndOdds(2)


// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
function sum(...args){
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
}
console.log(sum(1, 2, 3));

// Write a function which generates a randomUserIp.
function randomUserIp() {
    const randomOctet = () => Math.floor(Math.random() * 256);

    const ip = `${randomOctet()}.${randomOctet()}.${randomOctet()}.${randomOctet()}`;
    return ip;
}

// Write a function which generates a randomMacAddress
function randomMacAddress() {    
    const randomHex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    
    const mac = Array.from({length: 6}, randomHex).join(':');
    return mac;
}

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
function randomHexaNumberGenerator(length = 6) {
    let hexNumber = '#'
    while (hexNumber.length <= length) {
        hexNumber += Math.floor(Math.random() * 16).toString(16);
    }
    return hexNumber;
}
console.log(randomHexaNumberGenerator())

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE
function userIdGenerator(length = 7){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'    
    let id = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }
    return id
}


// Exercises: Level 3

// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'    
    const arrOfIds = []
    let id = ''
    let length = prompt('Enter length of IDs:')
    let numOfIds = prompt('Enter number of IDs:')
    for (let j = 0; j < numOfIds; j++){
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            id += characters.charAt(randomIndex);
        }
        arrOfIds.push(id)
        id = ''
    }
    return arrOfIds
}
console.log(userIdGeneratedByUser());

// Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)
function rgbColorGenerator(){
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num) {
    const colors = []
    for (let i = 0; i < num; i++) {
        let color = '#'
        for (let j = 0; j < 6; j++) {
            color += Math.floor(Math.random() * 16).toString(16)
        }
        colors.push(color)
    }
    return colors
}

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {        
        const rgbColor = `rbg(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`        
        colors.push(rgbColor);
    }
    return colors;
}
console.log(arrayOfRgbColors(5));

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {    
    if (hex.charAt(0) === '#') {
        hex = hex.slice(1);
    }
  
    const r = parseInt(hex.substring(0, 2), 16);  
    const g = parseInt(hex.substring(2, 4), 16);  
    const b = parseInt(hex.substring(4, 6), 16);  

    // Return the RGB color format
    return `rgb(${r}, ${g}, ${b})`;
}

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgbString) {    
    const parts = rgbString.match(/\d+/g).map(Number)

    const toHex = (color) => {
        const hex = color.toString(16);
        return hex.length === 1 ? '0' + hex : hex
    };
    
    const [r, g, b] = parts;
    return '#' + toHex(r) + toHex(g) + toHex(b);
}
console.log(convertRgbToHexa('rgb(83,232,90)'));

// Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
function generateColors(type, number){
    switch (type){
        case 'rgb':
            return arrayOfRgbColors(number);
            break;
        case 'hexa':
            return arrayOfHexaColors(number);
            break;
        default:
            console.log('Wrong color type');
    }
}


// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {    
    let arrayShuffled = array.slice();
    
    for (let i = arrayShuffled.length - 1; i > 0; i--) {        
        const j = Math.floor(Math.random() * (i + 1));        
        [arrayShuffled[i], arrayShuffled[j]] = [arrayShuffled[j], arrayShuffled[i]];
    }
    return arrayShuffled;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number) {
    if (number < 0) {
        return 'Error: Factorial not defined for negative numbers';
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value) {
    if (value === null || value === undefined) {
        return true; 
    } else if (typeof value === 'string' && value === '') {
        return true; 
    } else if (Array.isArray(value) && value.length === 0) {
        return true;
    } 
    return false; 
}

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array) {
    let sum = 0
    for (let element of array) {
        if (typeof element !== 'number') {
            return "Error: All items in the array must be numbers."
        }
        sum += element
    }
    return sum
}

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(array) {
    let sum = 0;    

    for (let element of array) {
        if (typeof element !== 'number') {
            return "Error: All items in the array must be numbers."
        }
        sum += element        
    }
    return sum / array.length
}
console.log(average([1, 2, 3, 4, 5]));

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
function modifyArray(array) {    
    if (array.length < 5) {
        return 'Item not found'
    }
    
    if (typeof array[4] === 'string') {
        array[4] = array[4].toUpperCase();
    }else{
        return 'Fifth item is not a string'
    }

    return array
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))

// Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
    // Check if num is less than 2 or not an integer
    if (num < 2 || num !== Math.round(num)) {
        return false; // 1 and non-integers are not prime numbers
    }    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(13));

// Write a functions which checks if all items are unique in the array.
function areAllUnique(array) {
    const uniqueNumbers = new Set(array)    
    if (uniqueNumbers.size === array.length) {
        return true
    }else {
        return false
    }
}
console.log(areAllUnique([1, 2, 3, 4, 4]));


// Write a function which checks if all the items of the array are the same data type.
function areSameType(array) {
    if (array.length === 0) return true    
    for (let i = 1; i < array.length; i++) {
        if (typeof array[i] !== typeof array[0]) {
            return false
        }
    }
    return true
}
console.log(areSameType([1, 2, 3, 4, 'test']));

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
function generateUniqueRandomNumbers() {
    let numbers = new Set()
    while (numbers.size < 7) { 
        const random = Math.floor(Math.random() * 10)
        numbers.add(random)
    }
    return Array.from(numbers)
}

