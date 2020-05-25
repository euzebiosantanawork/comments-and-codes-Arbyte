// Intro to Programming Logic
 
/*
WHAT IS LOGIC?
 The main objective of programming logic is
make you think logically. And the tool
that will allow you to do things in language
programming. This allows problems to be
solved in the best way possible according to the
context they are in.
 
WHAT WILL WE LEARN IN LOGICA?
- algorithms
- natural language x programming language
- Boolean table
- hello world program!
- variable declaration
- arithmetic expressions
- open VS Code and start javascript
- using vs Code terminal
- expressions (+ - * // ** sqrt ()) + precedence
- comparative expressions
- if / else conditional structure
- repetition structure - while
- vectors
- slg matrices
 
AND IN THIS CLASS?
Let's write our first Javascript algorithm!
The algorithm that we are going to build receives two numbers
and decide which is the biggest.
But for that we will need:
- Understand what an algorithm is
- Have a notion of how the algorithm is executed
- Basic syntax of a JS program
- Display content on the console
- Variables
- Receive input data from the user
- Arithmetic operations
- truth table
- Conditional Structure
- Many exercises

ALGORITHM
 
EXERCISING THE MIND
Suppose we are driving by car and hear the noise
of the flat tire and we decided to change them
 
What needs to be done?
Describe all steps to change the tire on the notepad or on
a sheet of paper
What is?
There are basically 3 types of representation of algorithms.
Let's use the example below to represent each one.
// Withdraw money from the bank 24 hours
Narrative Description:
1. Go to the bank
2. Insert the card
3. Enter the password
4. Request the amount
5. If there is enough balance for the withdrawal, make the withdrawal.
Otherwise, display the message insufficient balance
6. Remove the card
7. Leave the bank
// pseudo-code or structured language
*/

var teller = new caixaEletronico () // fetch the ATM
var agency = console.read() // read user agency
var currentAccount = console.read () // read current account
var password = console.read() //read password
var value = console.read() // read value
teller = teller.openAccout (agency, currentAccount, password)
//open user accont
var Withdraw = account.doWithdraw (value)
// realize the  Withdraw with the value
if (Withdraw.effectWithdraw()){
   Withdraw.effectWithdraw() //send the money for user
} else {
   console.log ("Insufficient funds") //talk dont has Withdraw
}
/* In object-oriented links, using design patterns
managed to get the verbosity closer to what we are
doing in code as our "natural language".

JAVASCRIPT
What is?
JavaScript (often abbreviated as JS) and a language
interpreted and structured programming, text in high
level with dynamic typing and multi-aradigm (prototypes,
object-oriented, imperative and functional).
Along with HTML and CSS, or JavaSript and one of three
main technologies of the World Wide Web.
Javascript allows interactive web pages and therefore
and an essential part of web applications. A big
Most websites and all major browsers have a
dedicated JavaScript engine to run it.

CONFIGURATION ON THE MACHINE
For that, we will need node.js
Node.js is not a Javascript framework.
It is more like an application platform where you write
your JavaScript programs that compiled, optimized
and interpreted by the virtual machine V8.
This is the same that Google uses to run
Javascript in the Chrome browser, and it was from there that the creator
from Node.js. Ryan Dahl created the project. The result of this
Javascript process and execution like any other file
".Exe"

HOW DOES THE PC "UNDERSTAND" JS?
V8 is a program that Javascrip and converts into instructions
for the computer to run 
BEFORE EVERYTHING
For the logic activities that we will write from now on
we want to guarantee a few steps first.
1. We need the Node installed on the machine
2. Let's create a repository on GitHub called "Logica"
3. We will clone this repository to some folder on the computer
4. And let's do our first hello-world.js program
 
SYNTAX
the first algorithm that we will develop and one that reads
two numbers and says which is the biggest
 
Algorithm: that receives two numbers
and says which is the biggest
*/

var readlineSync = require('readline-sync')
// calls the user's input packet
var number1 = readlineSync.question ("Type a number 1: ")
// read user input
var number2 = readlineSync.question ("Type a number 2: ")
//read user input
 
if(number1 > number2){
   console.log("Number : " + number1 + "is grater")
   // if number 1 is greater
} else if (number1 < number2){
   console.log ("Number: " + number2 + "is greater ")
   // if number 2 is greater
}else {
   console.log ("The numbe are the same");
   /*
   CONSOLE.LOG
   The first command we will learn is to print
   characters on the console.
   1. let's create a file in our folder that points to
   the "logical" repository
   2. the file name will be "hello-word.js"
   3. support this, let's write our code.
    
   EXECUTING OUR VSCODE CODE
   the first command that we are going to explain and the one to print
   characters on the console.
   1. To execute the source code we must select the menu
   Terminal and then the "New Terminal" option
   2.In the terminal we will insert the command node. \ {File-name} .js
   and press ENTER to execute our program.
    
   PRINT MORE LINES
   If we add more console.log ("") commands; they will be
   printed one after the other in sequence.
    
   CONCLUSIONS UNTIL NOW
   If we add more console.log commands they will be printed
   one after the other in sequence.
   */

  console.log("Hello world")
  console.log(" World, Hello")
  console.log("You are great DEVS")

  /*
  the codes are executed from top to bottom, line after line
  console.log function prints value received at the console
  parameter: content value to be printed
   
  COMMENTS
  Comments are characters that will not be carried out. They can
  have 1 line or several, and can be written after any command.
  Comments on one or more lines can be started by:
  / * * / / *
  Comments that end at the end of the line are indicated with //
  _ Can be used from the beginning of the line or placed after
  of the functional code. provided that there is no longer any
  line in the comment
   
  VARIABLES
  the variable is what allows us to associate data in memory
  its structure and consists of 3 properties.
  TYPE
  types can be primitive or object
  NAME
  It will depend on the condition. However, there is a covenant
  to use names that do not have special characters
  except _or- in general
  VALUE
  -There is a value to represent NOTHING (null or undefined)
  -The value will match your current type
  -If you assign another value, it automatically changes the type
   
   
  */
  var name // creation of the variable
  name = " insertname " // assigning text after creation
  var age = 20 // creating the variable and setting the value to 20
   
  var age = 20 // age and name; = and assignment, 20 is value
  /*
For now we will only need to understand the primitive types
 
STRING
These are the texts that can be represented by "insertname Arbyte"
They can be concatenated (jutted) using the + operator
example: "console.log ('string1' + 'string2')"
will be displayed: string1strig2
 
NUMBERS
BOLEANS
They can have two values: true or false
NULLS
Null types are variable that have no value
are represented by null or undefined
*/

var number = 7 // type number
var text = "here is a string" // type string
var IThinkThereforeIAm = true // type rounded
var variableNothing // null value
var variableNothigwithAttribution = null // null value
var variableNothingComundefined = undefined // null value
/*
INPUT DATA
To receive User data will use a library
that allows reading interaction with console
*/

var user = require("readline-sync")
// importa a biblioteca readline-sync na variavel user
 
var userResult = user.question("Enter your question\
here: ")//calls readline-sync library question method
console.log("User entered: "+userResult);
 
/*
ARITHMETIC OPERATIONS

We can do basic math operations using
numbers like:

addition: using the + symbol
subtraction: using the symbol -
division: using the symbol /
multiplication: using the symbol *
module: using the% symbol
 
ARITHMETIC OPERATIONS - PRIORITIES
 
To determine the property of a calculation we use
relatives equal in mathematics.
However, if we have several priorities in the expression we continue
opening lower levels with relatives
The execution of the calculation starts out
 
*/
console.log ((5+10) * 2)// =30
console.log (5 + 10 * 2) // = 25
console.log (((2+2)+(2*2)) *2)//=16

/*
Within the same property, mathematical execution is respected
(first division and multiplication and then addition and subtraction)
 
will we run these codes on our machine and see the result?
 
LOGICAL OPERATIONS
 
In addition to the arithmetic operations, we have logical operations
within the schedule. They will allow us to control the flow
Logic of the source code. These operations are done using
Boolean values ​​instead of numbers.
 
BOOLEAN VALUE
boolean (boolean) and a primitive data type that has two
values, which can be considered as 0 or 1, false or
true. Called boolean in honor of George Boole, who
defined a algebraic logic system for the first time nam
nineteenth century.
It is used in logical operations like conjunction, disjunction,
exclusive disjunction, logical equivalence and negation. what
correspond to some of the operations of Boolean algebra.
LOGICAL OPERATIONS - TRUTH TABLE
A system that assists in the resolution of logical operations
and the Truth Table, usually represented between two
variable and the result that the operation generates.
 
AND
 
AND OR AND operator represented by the symbol && in JS, only
resumes true when the p and q values ​​are true
also, otherwise the expression returns false.
 
OR
 
OPERATOR OR or OR represented by the symbol || (pipe pipe)
in JS, only true remote when there is at least 1
true value in p and q, and only returns false if the
two are.
 
DENIAL
 
Negation operator, represented by the symbol! in JS
inverts the Boolean value, if true turns false
and vice versa.
 
CONDITIONAL
CONDITIONAL STRUCTURE
We use condition structures when there are no instructions
within the program that they should only run if they
a certain condition
 
EXAMPLE: if number X is greater than number Y.
if (condition) {
    instruction pad
}
if (condition) {
    block of instructions
} else {
    instruction pad
}
 
if (condition) {
    block of instructions
} else if (code 2) {
    instruction pad
} else {
   instruction pad
}
 
TIPS
1. Condition is always a boolean value
2. It is possible to use a variable in the condition
3. It is possible to override the condition on the spot
that you are writing it Ex: a> b
4. The use of else and ocional in IF
5. You need to use else if when representing
3 or more situations2
*/
// EXAMPLES OF IF
// IF SIMPLE:
if (idade >18 ){
    console.log("User and adult")
 }
 // IF with else
 var name = "goku"
  
 if (name != "goku") {
    console.log ("Not is goku")
 }else{
 console.log (" Is goku!")
 }
 // IF with ELSE IF
 var formOfPayment = "money"
  
 if (formOfPayment  === "money"){
   console.log('pay in money')
 } else if (formOfPayment === "card"){
    console.log ("pay in card")
 }else if (formOfPayment === "check") {
    console.log ("pay in check")
 }
 // IF with TWO CONDICIONS
 var number = 7;
 if(numero > 0 || numero < 0){
    console.log ("Not is zero")
 } else {
    console.log ("The number is zero")
 }
 