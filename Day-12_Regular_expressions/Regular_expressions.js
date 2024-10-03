// Exercises: Level 1

// Calculate the total annual income of the person from the following text. 
// ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.' 
let pattern = /\d+/g

let income = text.match(pattern)
let totalIncome = income.reduce((sum, inc) => sum + Math.floor(inc),0)

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. 
// Extract these numbers and find the distance between the two furthest particles.
text = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. '
pattern = /-?\d+/g

let points = text.match(pattern).sort((a,b) => a - b)
let distance = points[points.length - 1] - points[0]

// Write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable(varName) {
    const patternJS = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
    return patternJS.test(varName)
}

console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))
console.log(is_valid_variable("$var_name"))


// Exercises: Level 2
// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'
function mostFrequentWords(text, count = 10) {
    wordPattern = /\b[a-zA-Z]+\b/g
    const words = text.match(wordPattern)
    const allWordsCounts = {}

    words.forEach(element => {
        allWordsCounts[element] ?allWordsCounts[element]++ :allWordsCounts[element] = 1
    })

    const sorterWords =  Object.entries(allWordsCounts).sort((a,b) => b[1] - a[1])
    
    return sorterWords.slice(0,count).map(word => ({Word: word[0], count: word[1]}))
}

console.log(mostFrequentWords(paragraph))


// Exercises: Level 3

// Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?'
function cleanText(text) {
    return text.replace(/[%@&$#;]/g, '')
}

cleanedSentence = cleanText(sentence)
console.log(cleanedSentence)
console.log(mostFrequentWords(cleanedSentence,3))