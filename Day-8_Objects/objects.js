// Exercises: Level 1

// Create an empty object called dog
const dog = {}

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Joker'
dog.legs = 4
dog.color = 'Brown'
dog.age = 7
dog.bark = function(){return 'Woof woof'}


// Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// Set new properties the dog object: breed, getDogInfo
dog.getDogInfo = function(){
    let statement = `Dog's name is ${dog.name}. It has ${dog.legs} legs and ${dog.color} color. The age is ${dog.age} years`
    return statement
}
console.log(dog.getDogInfo());


// Exercises: Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


// Find the person who has many skills in the users object.
let maxSkills = 0;
let userWithMostSkills = null;

for (const username in users) {
    const userSkillsCount = users[username].skills.length;
    if (userSkillsCount > maxSkills) {
        maxSkills = userSkillsCount; 
        userWithMostSkills = username;  
    }
}
console.log(`${userWithMostSkills} with ${maxSkills} skills` );


// Count logged in users, count users having greater than equal to 50 points from the following object. 
let loggedInCount = 0;
let highPointsCount = 0;

for (const username in users) {
    const user = users[username];
    if (user.isLoggedIn) {
        loggedInCount++; 
    }
    if (user.points >= 50) {
        highPointsCount++;  
    }
}

console.log(`Logged in users: ${loggedInCount}`);
console.log(`Users with >= 50 points: ${highPointsCount}`);


// Find people who are MERN stack developer from the users object
const mernStack = ['MongoDB', 'Express', 'React', 'Node', 'Node.js']
let MernDevelopers = []

for (const userName in users) {
    const userSkills = users[userName].skills   
    if (mernStack.some(skill => userSkills.includes(skill))){
        MernDevelopers.push(userName)
    }
}
// console.log(MernDevelopers);

// Set your name in the users object without modifying the original users object
const newUsers = Object.assign({},users)
newUsers['Dmitry'] = {      
    email: 'dmtlazarev@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 44,
    isLoggedIn: false,
    points: 50
};
// console.log(users, newUsers)

// Get all keys or properties of users object
const keys = Object.keys(newUsers)

// Get all the values of users object
const values = Object.values(newUsers)


// Exercises: Level 3

// Create an object literal called personAccount. 
// It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: 'John',
    lastName: 'Smith',
    incomes: [
        { description: 'Salary', amount: 3000 },
        { description: 'Freelance', amount: 1500 }
    ],
    expenses: [
        { description: 'Food', amount: 300 },
        { description: 'Rent', amount: 1200 },
        { description: 'Other expenses', amount: 300 }
    ],
   
    totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    accountInfo() {
        return `Account of ${this.firstName} ${this.lastName} has total income: $${this.totalIncome()} and total expenses: $${this.totalExpense()}.`;
    },

    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};


const usersLevel3 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

// Imagine you are getting the above users collection from a MongoDB database. 
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const dmitry = {    
    username: 'Dmitry',
    email: 'dmitry@dmitry.com',
    password: '121212'
}
const alex = {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt:'08/01/2020 9:00 AM',
    isLoggedIn: false
}

function generateUniqueId(users) {  // Help function to generate uniqe ID for new user
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''

    do {
        id = ''
        for (let i = 0; i < 6; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length))
        }        
    } while (users.some(user => user._id === id))

    return id
}


function formatDate(date) {    // Help function to format date
    let hour = date.getHours()
    let ampm = hour >= 12 ? 'PM' : 'AM'
    
    hour = hour % 12
    hour = hour? hour : 12    
    
    let formatYYYY = date.getFullYear()
    let formatMM = (date.getMonth() + 1).toString().padStart(2, '0')
    let formatDD = date.getDate().toString().padStart(2, '0')
    let formatHH = hour.toString().padStart(2, '0')
    let formatmm = date.getMinutes().toString().padStart(2, '0')    
    
    return `${formatMM}/${formatDD}/${formatYYYY} ${formatHH}:${formatmm} ${ampm}` 
}

function signUp(users, newUser) {    
    const userExists = users.some(user => user.username === newUser.username || user.email === newUser.email)

    if (userExists) {
        console.log(userExists,'User already has an account.')
        return
    } 
    
    newUser._id = generateUniqueId(users)
    
    newUser.createdAt = formatDate(new Date());

    newUser.isLoggedIn = false

    users.push(newUser)
    console.log('User signed up successfully.')
    
}
signUp(usersLevel3, dmitry);

// b. Create a function called signIn which allows user to sign in to the application
function signIn(users, userName, userPassword){
    let user = users.find(user => user.username === userName)

    if (!user){
        console.log('User not found');
        return
    }
    
    if (user.password !== userPassword) {
        console.log('Password incorrect')
        return;
    }

    if (user.isLoggedIn){
        console.log('User already logged in')
    }else {
        user.isLoggedIn = true
        console.log('User successfully logged in!');
    }    
}

console.log(signIn(usersLevel3, 'Dmitry', '121212'));
console.log(usersLevel3);


const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]

// The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
function rateProduct(products, productId, userId, rate){
    const product = products.find(product => product._id == productId)
    if (!product) {
        console.log('Product not found');
    }

    const ratingExist = product.ratings.find(rate => rate.userId == userId)
    if (ratingExist){
        ratingExist.rate = rate;
        console.log('Rating updated');
    }else{
        product.ratings.push({userId,rate})
        console.log('New rating added');
    }
}

rateProduct(products,'eedfcf','fg12cy',6.5)
// rateProduct(products,'eedfcf','ghderc',10)


// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(products, productId){
    const product = products.find(product => product._id == productId)
    if (!product) {
        console.log('Product not found');
    }

    if (product.ratings.length === 0) {
        console.log("No ratings available for this product.")
        return 0
    }

    const productRatings = product.ratings
    return product.ratings.reduce((total, productRatings) => total + productRatings.rate, 0) / productRatings.length;
}

console.log(averageRating(products,'eedfcf'));

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(products, productId, userId){
    const product = products.find(product => product._id == productId)
    if (!product) {
        console.log('Product not found');
    }

    let userIndex = product.likes.indexOf(userId)
    if (userIndex !== -1){
        product.likes.splice(userIndex,1)
        console.log('Like removed');
    }else{
        product.likes.push(userId)
        console.log('Like added');
    }
}

likeProduct(products,'eedfcf','fg12cy')
// likeProduct(products,'eedfcf','fg12cy')
