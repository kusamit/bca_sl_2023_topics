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
console.log("Result:"+ result)

let result_two=dop.replace("Purshopttam","Praneshraj")
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

// mutative: changeable/updatable - array, object
// immutative: unchangeable/ no updatable - number, string

// 6. substr() - same as substring()
let actress_name = "Barsha Raut"
console.log("substr example")
let result_ss_ii = actress_name.substr(4, 7)
console.log("Actual String: "+actress_name)
console.log(result_ss_ii)
console.log("")

// 7. replaceAll() - replaces all string
let production_house = "Black Horse Production"
console.log("replaceAll example")
console.log(production_house)
let new_production_house = production_house.replaceAll(production_house, "BlueStone Pictures")
console.log(new_production_house)
console.log("")

// 8. concat() - combines one or more string
let production_banner = "Silver Screen"
let cinematography = "Vision Entertainment"
console.log("concat example")

let movie_desc = production_banner.concat(cinematography)
console.log(movie_desc)
console.log("")
// note: we can also contact multiple string
let desc = production_banner.concat(" ", cinematography, " ", production_house)
console.log(desc)
console.log("")

// 9. slice() - return the piece of string - more like substring
let vfx = "Bikesh Entertainment"
console.log("slice example")

let vfx_result = vfx.slice(4, 9)
console.log(vfx_result)
console.log("")

// 10. trimStart() - trim string from start
// 11. trimEnd() - trim string from end
console.log("trimStart example")
let email = "      blackhorse@gmail.com"
console.log("Actual: "+ email)
console.log("Result: "+ email.trimStart())
console.log("")
console.log("trimEnd example")
let address = "Baneshwor      "
console.log("Actual: "+address)
console.log("Result: "+address.trimEnd())
console.log("")
    