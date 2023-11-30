//variables in JS
//to define variable in JS we use 'var' or 'let'
//'const' is use to define constant variable
//constant variable are unchangeable

example
var num=12;
let user_status=true

//to print data in console
console.log(num)
console.log(user_status)

//Note
//1. var is use for global scope and let is use for block scope
//2. variable defined with var can be re-declared and update
//3. variable defined with let can be updated but can't re-decleare

//variable re-declaration
//note. variable can't be access before it is define so whenever variable is
//re-declare it depends upon the scope it is being declared

let msg="hello all!"
function getMessage(){
    console.log(innerMsg)
    let innerMsg="wow"
    console.log(innerMsg)
}
console.log(innerMsg)
console.log(msg)


//
let var="hello all!"
function getMessage(){
    console.log(innerMsg) //can't access before assigned
    var innerMsgOne="variable of var"
    let innerMsg="wow"
    console.log(innerMsg) //can assign
}
console.log(innerMsg)// can't assign
console.log(var) //can assign


