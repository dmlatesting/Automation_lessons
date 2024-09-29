let challange = '30 Days Of JavaScript'
let corporations = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let becauseCase = 'You cannot end a sentence with because because because is a conjunction'
let trimCase = ' 30 Days Of JavaScript '


//Exercise: Level 1

console.log(challange)
console.log(challange.length)
console.log(challange.toUpperCase())
console.log(challange.toLowerCase())
console.log(challange.substring(3,7))
console.log(challange.substring(3,challange.length))
console.log('Check if there is a word Script:', challange.includes('Script'))
console.log(challange.split())
console.log(challange.split(' '))
console.log(corporations.split(','))
console.log(challange.replace('Java Script', 'Python'))
console.log('Character at index 16 is:', challange.charAt('16'))
console.log('Character code of J is:', challange.charCodeAt('11'))
console.log('First occurrence of \'a\' is at:', challange.indexOf('a'), 'position')
console.log('Last occurrence of \'a\' is at:', challange.lastIndexOf('a'), 'position')
console.log('First occurrence of \'because\' is at:', becauseCase.indexOf('because'), 'position')
console.log('Last occurrence of \'because\' is at:', becauseCase.lastIndexOf('because'), 'position')
console.log('First occurrence of \'because\' is at:', becauseCase.search('because'), 'position')
console.log(trimCase.trim())
console.log(challange.startsWith('30'))
console.log(challange.endsWith('JavaScript'))
console.log(challange.match(/a/gi))
console.log('30 Days of' + ' ' + 'JavaScript')
console.log('30 Days of'.repeat(2))


//Exercise: Level 2

//Using console.log() print out the following statement:
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log('/"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('10' === 10)
console.log(parseInt('10') === 10)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Math.round(parseFloat('9.8')) == 10)

//Check if 'on' is found in both python and jargon
let a = 'python '
let b = 'jargon'
console.log(a.includes('on') && b.includes('on') )

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'))

//Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*101))

//Generate a random number between 50 and 100 inclusively.
console.log(50 + Math.floor(Math.random()*51))

//Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random()*256))

//Access the 'JavaScript' string characters using a random number.
let javaString = 'JavaScript'
console.log(javaString.charAt(Math.random()*(javaString.length - 1)))

//Use console.log() and escape characters to print the following pattern
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(becauseCase.substring(becauseCase.indexOf('because'), becauseCase.lastIndexOf('because') + 'because'.length))


//Exercise: Level 3

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let loveSentance = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let lovePatternCaseSensitive = /love/g
let lovePatternCaseInSensitive = /love/gi

console.log('Case sensitive result:',loveSentance.match(lovePatternCaseSensitive).length)
console.log('Case insensitive result:',loveSentance.match(lovePatternCaseInSensitive).length)

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('The ni=umber of \'because\' words in this sentance is',becauseCase.match(/because/g).length,)

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const badSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanPattern = /[%@$&;#]/g

console.log(badSentence.replace(cleanPattern,''))



//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let result = 0
let incomeArray = incomeText.split(" ")
console.log('Annual income: ', parseInt(incomeArray[2]) * 12 + parseInt(incomeArray[8]) + parseInt(incomeArray[12]) * 12)

let numberPattern = /(\d+)/g
incomeArray = incomeText.match(numberPattern)
console.log('Annual income: ', parseInt(incomeArray[0]) * 12 + parseInt(incomeArray[1]) + parseInt(incomeArray[2]) * 12)