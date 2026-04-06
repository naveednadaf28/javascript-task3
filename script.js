let name=prompt("Name");
console.log("Enter Name:",name);

let age=prompt("Age");
console.log("Enter Age:",Number(age));

let salary=prompt("Salary");
console.log("Enter Salary:",Number(salary));

let loanAmount=prompt("Loan Amount");
console.log("Enter Loan Amount:",Number(loanAmount));

if(age >= 21 && age <= 60 && salary >= 25000){
    console.log("Eligible");
    
}
else{
     console.log("Not Eligible");
}

let emi= loanAmount/12;
console.log("EMI: ",emi);

if(loanAmount > 500000){
    console.log("Loan Category : High Loan");
}
else if(loanAmount > 200000){
     console.log("Loan Category : Medium Loan");
}
else{
     console.log("Loan Category : Low Loan");
}

(salary > 50000)? console.log("Risk Level: Low Risk") : console.log("Risk Level: High Risk"); 

switch (true) {
  case emi > 40000:
    console.log("Customer Type: Premium Customer");
    break;

  case emi > 20000:
    console.log("Customer Type: Standard Customer");
    break;

  default:
    console.log("Customer Type: Basic Customer");
}