//basic function
//Rule:
//1. must invoke in order to execute the code inside function
//2. follow naming convention to define function name

//Type of user defined function
//1. without parameter and return type

function showMessage()
{
    let message="Have a nice day!!!"
    console.log("Message:"+ message)
}

//invoking function
showMessage()

//2. with parameter and no return type
function checkUserType(userType,Department)
{
    let user_type="ADMIN"
    let user_department="HEADQUATER"
    if(user_type===userType.toUpperCase() && user_department===Department.toLowerCase())
    {
        console.log("welcome to dav admin panel")
    }
    else{
        console.log("message: Access Forbidded")
    }
}

//parsing arguements to function with parameters
let ut="admin"
let dept="HEADQUATER"
checkUserType(ut,dept);

//3. with parameter and return type
function checkResult(checked_value)
{
    let result="message:"
    switch(checked_value)
    {
        case 1:
            return result.concat(result,"you are under average")
        case 2:
            return result.concat(result,"you are average")
        case 3:
            return result.concat(result,"you are good")
        case 4:
            return result.concat(result,"you are best")
        case 5:
            return result.concat(result,"you are excellent")
        default:
            return result.concat(result,"you have no record available")
    }
}
console.log(checkResult(6))

//4. without parameter and with return type
function showUserGoal()
{
    let goal=45
    let goal_status=""
    if(goal>=0 && goal<=39.9)
    {
        goal_status="Begineer Level"
    }
    else if(goal>=40 && goal<=64.99)
    {
        goal_status="Intermediate Level"
    }
    else if(goal>=65 && goal<=89.99)
    {
        goal_status="Mid Level"
    }
    else if(goal>=90 && goal<=100)
    {
        goal_status="Expert Level"
    }
    else
    {
        goal_status="Please set your goal between 0-100"
    }
    return goal_status
}
console.log("User goal checker:"+ showUserGoal())