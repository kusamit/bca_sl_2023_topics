//control statement
//if statement
let num_one=12
let num_two=23

if (num_one + num_two)
{
    console.log("correct Answer")
    console.log("the result is: "+ (num_one + num_two))
}
if(num_one>num_two){
    console.log(num_one + "is greater then " + num_two)
}
if(num_one<num_two){
    console.log(num_one + "is smaller then " + num_two)
}
//exercise
//define two variable country and country code
//check if the value and type of variable is same or not
//value-> "nepal" for country and "NP" for code
//type-> string

let country="nepal"
let conuntry_code="NP"
let number_code=977
let country_status="true"

if(country==conuntry_code)
{
    console.log("only type is match")
}
if(country==="nepal")
{
    console.log("match")
}
let password="dasd"
//to check type of variable we can use typeof operator
console.log(typeof country)
console.log(typeof number_code)
console.log(typeof country_status)
if(typeof password !== String)
{
    console.log("correct password")
}
//if else statement
let college_name="dav"
let college_location="lalitpur"

if(college_name=="dav" & college_location =="lalitpur")
{
    console.log("cprrect information provided")
} 
else{
    console.log("incorrect information")
}
let username="mark"
let pin_code=1234
if(username=="milli" & pin_code==1234)
{
    console.log("username or pin is valid")
}
else{
    console.log("invalid credentials")
}

//if else if statement
let marks =89
if(marks>=0 & marks<=39.9)
{
    console.log("fail")
}
else if(marks>=40 & marks<=79.9)
{
    console.log("pass")
}
else if(marks>=80 & marks<=100)
{
    console.log("distinction")
}
else if(marks>100 | marks<0)
{
    console.log("marks must be in between 0 to 100")
}

//nested if else statement
let acc_no="AC001"
let pin=5588
let acc_type="saving"

if(acc_no !="AC-001")
{
    console.log("welcome to NIC ASIA Bank")
    if(pin==="5588")
    {
        console.log("have a nice day")
        if(acc_type=="saving")
        {
            console.log("your account is: saving")
        }
        else{
            console.log("please contact at bank for your account type")
        }
    }
    else{
        console.log("Invalid account number or pincode")
    }
}
else
{
    console.log("Account not available")
}

//switch case
let day_number=5
switch(day_number)
{
    case 1:
        console.log("sunday")
        break
        case 2:
        console.log("monday")
        break
        case 3:
        console.log("tuesday")
        break
        case 4:
        console.log("wednesday")
        break
        case 5:
        console.log("Thrusday")
        break
        case 6:
        console.log("friday")
        break
        case 7:
        console.log("saturday")
        break
}
