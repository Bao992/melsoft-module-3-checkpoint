// Declarong and initializing
const Gross_Salary = 45000;
const UIF_Rate = 0.01;
const Tax_Rate = 0.25;
const Medical_Aid = 2500;

const tax = Gross_Salary * Tax_Rate;
const UIF = Gross_Salary * UIF_Rate;

const Net_Salary = Gross_Salary - UIF_Rate - Tax_Rate - Medical_Aid;
 
// Use of Modulo -- Basicallu the modulo returns the remaind when two number have been devided
// I am useing the mudulo operator to Check if the net pay is even

const Is_Salary_Even = Net_Salary % 2 === 0;

console.log("Gross Salary:", Gross_Salary);
console.log("UIF", UIF_Rate);
console.log("Tax:", Tax_Rate);
console.log("Medical Aid:", Medical_Aid);
console.log("Net Salary:", Net_Salary);
//this will return true if the salary is an even number.
console.log("Is your salary an even number:", Is_Salary_Even);

//Assignment 2: Operators

let = Cart_Total = 0;
// This means we are taking the taking the current value of cart total and we add 150 to it.
Cart_Total += 150;
Cart_Total += 85;
Cart_Total +=220;

console.log("Cart total cefore discount:", Cart_Total);
// Applying the discount
let Discount_Amount = Cart_Total * 0.10;

Cart_Total -= Discount_Amount;
console.log("After Discount:", Cart_Total);

// Applying the 15% VAT using *=
// 100% + 15% = 115% which is 1.15%
Cart_Total *= 1.15;

console.log("The final total including VAT:", Cart_Total);
 //Challenge 1 Section 3
// Comparison Operators

const age = 18;
const password = "mypassword123";
const confirm_Email = "bao.kekana@icloud.com";
const email = "bao.kekana@icloud.com"

// age validation

const Adult = age >=18;

// Pasword Must be at least 8 Characters as in the rules
const Pasword_length = password.length >= 8;

// Ensuring that email are a complete match
const Compare_Email = email === confirm_Email;
console.log(" Emails match:", Compare_Email);

console.log("User is 18 or Older:", Adult);
console.log("Password length is valid:",Pasword_length);
console.log("Emails match:", Compare_Email);

// Logical Operators

const Is_Logged_In = true;
const Active_Subscription = true;
const Suspended = false;

// User must meet all the conditions in order to be granted premium access

const Allowed_Premium_Access = Is_Logged_In && Active_Subscription && !Suspended;
console.log("Allowed to access premium features:", Allowed_Premium_Access);

// Suuport staff can also access the system
const Support_Agent = false;

// || This means OR, so it will return either true or false

const Can_Access_System = Allowed_Premium_Access || Support_Agent;

console.log("Allowed access to ssytem:", Allowed_Premium_Access);

// Challenge 5
// Type Conversions

const Age_input = 25;

console.log("Input age:", Age_input);

// returns the data type of the inserted variable
console.log("Type:", typeof Age_input);

// convert string to number
const Age_Number = Number(Age_input);

console.log("Converted age:", Age_Number);

// With out conversion
const Wrong_result = Age_input + 5;
console.log("withoout conversion", Wrong_result);

// examoples of coercion

console.log("'10' * 2", "10" * 2);
console.log("'10' + 2", "10" + 2);

// Challenge 2 — The Equality Deep Dive

const User_Input_Age = "18";
const Required_Age = 18;

console.log("Loose equality:", User_Input_Age == Required_Age);
console.log("Strict equality:", User_Input_Age === Required_Age);

// Null and Undefined

const value_1 = null;
const value_2 = undefined;

console.log(value_1 == value_2);
console.log(value_1 === value_2);

// Boolean

console.log("true == 1", true == 1);
console.log("true === 1:", true === 1);

console.log('"" == 0:', "" == 0);
console.log('"" === 0', "" === 0);

const Account_Balance = " 1000";
console.log("Account balance using == ", Account_Balance == 1000);
console.log(" Account ballance using ===", Account_Balance === 1000);


// CHALLENGE 4 Ternary and short circuit patterns

// First Scenario

const Premium_Customer = true;
const discount = Premium_Customer ? 0.20: 0.05;

console.log("Discount rate: ", discount);

// Second scenario
const Custome_age = 22;
const age_Category = Custome_age >= 18 ? "Adult" : "Minor";
console.log( "Age Category:", age_Category);



// Difference between || and ?

const Empty_Name = "";

console.log("Using || :", Empty_Name || " Guest ");
console.log("Using ?? :", Empty_Name ?? "Guest");

// Challenge 5 - typeof, instanceof, delete

// typeof examples
const User_Name = "Bao";

const Student = true;

console.log("typeof User_Name:", typeof User_Name);

console.log("typeof Student:", typeof Student);

//instanceof examples 
const skills = ["HTML", "CSS", "JavaScript"];
const today = new Date();
console.log("skills instanceof Array:", skills instanceof Array);
console.log("skills instanceof Object:", skills instanceof Object);
console.log("today instanceof Date:", today instanceof Date);
console.log("today instanceof Object:", today instanceof Object);

//Challenge 6 - Bitwsise Permission System
const READ = 1;
const WRITE = 2;
const Delete = 4;
const Admin = 8;

// Question 1

let User_Permissions = READ | WRITE;
console.log("User Permissions:" , User_Permissions);

//Questions 2
let Admin_Permissions = READ | WRITE | Admin;

console.log("Admin Permissions:", Admin_Permissions);

// Question 3

console.log("Has READ?", User_Permissions & READ) ? "Yes" : "No"

// Question 5
User_Permissions |= Delete;
console.log("After granting DELETE:", User_Permissions);

//Question 6
User_Permissions &= ~ WRITE;
console.log("After we remove WRITE:", User_Permissions);

// Challenge 7 - Real World Banking Calculator
 // For the 1st SCenario

 const principal = 25000;
 const Annual_Rate = 0.075;
 const Compound_Per_Year = 12;
 const years = 3;

 const Final_Balance = principal * Math.pow(1 + Annual_Rate/ Compound_Per_Year, Compound_Per_Year * years);

 const Total_Interest = Final_Balance - principal;

const Effective_Annual_Rate = (Math.pow(Final_Balance / principal, 1/years) -1) * 100;
console.log("Final Balance is R" + Final_Balance);
console.log("Total Interest: R" + Total_Interest);
console.log(" Effective Annual Rate is:", Effective_Annual_Rate + "%");