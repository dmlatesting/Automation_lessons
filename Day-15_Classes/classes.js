// Exercises Level 1

// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor (name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs  
  }

  get getName(){
    return this.name
  }

  get getAge(){
    return this.age
  }

  get getColor(){
    return this.color
  }

  get getLegs(){
    return this.legs
  }

  eat() {
    console.log('Nyam nyam')
  }

  sleep() {
    console.log(' ... zzzZZZ')
  }

  getFullInfo() {
    const fullInfo = `This anymal's name is ${this.getName}. It is ${this.getAge} years old and of ${this.getColor} color. It has ${this.getLegs} legs`
    return fullInfo
  }
}


// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor(name, age, color, legs){
    super(name, age, color, legs)
  }
  saySomething() {
    console.log('WOOF WOOF')
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs){
    super(name, age, color, legs)
  }
  saySomething() {
    console.log('MEOW MEOW')
  }
}


// Exercises Level 2

// Override the method you create in Animal class
class SmallDog extends Dog {
  constructor(name, age, color, legs){
    super(name, age, color, legs)
  }

  saySomething() {
    console.log('Yip Yip')
  }
}


// Exercises Level 3

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
// You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics {
  constructor(data){
    if (!data) { throw new Error('Data should be passed')}
    this.data = data
  }

  setData(newData) {
    this.data = newData.sort((a,b) => a - b)
  }

  count(){
    return this.data.length
  }

  sum() {
    return this.data.reduce((acc, curr) => acc + curr,0)
  }

  min(){
    return this.data[0]
  }

  max() {
    return this.data[this.data.length - 1]
  }

  range() {
    return this.data[this.data.length - 1] - this.data[0]
  }

  mean() {
    const sum = this.data.reduce((acc, curr) => acc + curr,0)
    return sum / this.data.length
  }

  median() {
    const middleIndex = Math.floor(this.data.length / 2);
        if (this.data.length % 2 === 0) {
            return (this.data[middleIndex - 1] + this.data[middleIndex]) / 2;
        } else {
            return this.data[middleIndex];
        }
  }

  mode() {
    const numberCounts = {}

    this.data.forEach(number => {    
      numberCounts[number]?numberCounts[number]++:numberCounts[number] = 1      
    })
    
    const sortedNumberCounts = Object.entries(numberCounts).sort((a,b) => b[1] - a[1])

    return sortedNumberCounts.slice(0,1).map(mode => ({mode: mode[0], count: mode[1]}))
  }

  var() {
    const mean = this.mean()
    const diff = this.data.reduce((acc, curr) => acc + (curr - mean) ** 2.,0)
    return diff / this.data.length
  }

  std() {
    return Math.sqrt(this.var())
  } 
}

const statistics = new Statistics(ages)
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
