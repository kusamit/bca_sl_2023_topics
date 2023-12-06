//defining array
let palces=["kathmandu","lalitpur","pokhara","Butwal"]
const gender=["Male","Female","Others"]
console.log("View of Position of Array 1")
//accessing array elements with indexing
console.log(palces[0])
console.log(palces[1])
console.log(palces[2])

//since array is an object so we can define it using array()
let lakes= new Array("Phewa","Begnas","Rara","Tillicho")
console.log("view of Position Array 2")
//accessing array elements with indexing
console.log(lakes[0])
console.log(lakes[1])
console.log(lakes[1])

//array properties and methods
//properties
//length - return the length of an array
//example
console.log("Length of Array Example")
console.log(palces.length)
console.log(gender.lenght)
console.log(lakes.length)

//methods
//1. push - append an element in an array
//example
console.log("Push Example")
let days=["Sunday","Monday"]
console.log(days)
days.push("Tuesday")
console.log("days")
days.push("Wednesday")
console.log(days)

//2. pop -removes last index element from an array
console.log("Pop Example")
let capital=["Kathmandu","New Delhi","Beijing","Dhaka"]
console.log(capital)
capital.pop()
console.log(capital)
capital.pop()
console.log(capital)
capital.pop()
