//expense
let expense=[700,1000,2000,1000]
let income=[30000,3000,300]
var sum=0

//TDS
function tds(){
    for(let i=0;i<income.length;i++)
    {
        sum=sum+income[i]  
    }
    tdsvalue=0.01*sum
        return tdsvalue 
}
console.log("TDS Value is "+ tds(income))


//PF
var pfvalue
function pf(){
    for(let i=0;i<expense.length;i++)
    {
        sum=sum+expense[i]
    }
    pfvalue=0.1*sum
    
    return pfvalue   
}
console.log("PF Value is "+ pf(expense))


//gross salary
function gross_salary()
{
    let salary = income[0] + 0.1*income[0]
    console.log("gross salary value is "+ salary)
    return salary
}
gross_salary(income)


//Net Salary
function netSalary()
{
    let netSalary=income[0]-pf()-tds()   
}
console.log("the Netsalary is "+ netSalary())

