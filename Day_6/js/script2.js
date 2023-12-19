//properties
//1. length
let actor_name="Amit Mahato"
let director_name="pradeep"

console.log("length Example")
console.log(actor_name.length)
console.log(director_name.length)
console.log("")

//Methods
//1. toUpperCase() - returns all string character in UpperCase
let movie_name="jatra jatra"
console.log("toUppercase example")
console.log(movie_name.toUpperCase())
console.log(actor_name.toUpperCase())
console.log(director_name.toUpperCase())
console.log("")

//2. toLowerCase() - returns all string character to lower case
let genere="Comedy"
console.log("toUppercase example")
console.log(movie_name.toLowerCase())
console.log(actor_name.toLowerCase())
console.log(director_name.toLowerCase())
console.log(genere.toLocaleUpperCase())
console.log("")

//3. trim() - removes the space before and after
let origin ="  Nepal  "
let budget=" Rs. 100000000 "
console.log("trim example")
console.log(origin)
console.log(origin.trim())
console.log(budget.trim())
console.log("")

//4. repalce()- replace old string with new string
//note: original string remains unchanged because of their mutative behaviour
//so new reference is created while using this function

let casting_director="Mohan Lal Pandey"
let dop="purshopttam Pradhan"
console.log("replace example")

let result=casting_director.replace("Lal","Prasad")
console.log("Actual String:"+ casting_director)
console.log("Resykt:"+ result)

let result_two=drop.replace("Purshopttam","Praneshraj")
console.log("Actual String",+ dop)
console.log("Result String"+ result_two)
console.log("")

//5.substring() - returns the piece of string from primary string
let description= "This movie tells the story about the character who are poor."
console.log("Substring Example")
let result_ss=description.substring(5,10) //returns string from index 5 to 9
let result_ss_i=description.substring(8) //returns string 8 up to end
console.log("Actual String"+ description)
console.log(result_ss)
console.log(result_ss_i)
console.log("")
    