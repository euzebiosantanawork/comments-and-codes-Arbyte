// class 12 - functions

/*
FUNCTIONS

WHAT IS?
A programming function is a named code group that
perform a specific task
Depending on the language, it can also be called
"subroutine" or "procedures"

EXAMPLE:
*/
function isEven (number) {
    return number% 2 === 0
}
console.log (isEven (5))
console.log (isEven (4))

/*
WHY USE IT?

- Facilitated development: Work can be divided between
project members and implementations can occur
in parallel.
- Code sharing made possible: A function can be
used later by other programs or people without needing
recreate the function.
- Increases readability: With them you can create a layer
abstraction in the code being able to read the execution flow of the
code at the business level without having to read the
exact implementations for each part of the process.
- Allows you to divide and conquer: How the code looks
segmented, it is possible to identify which part of the process
is giving error or needs to be changed more easily,
since the main task can be broken into several
smaller tasks.

STRUCTURE OF THE FUNCTION
 The function has a name, parameter and a return.
*/

function isEven (number) {// eh par >>> number // number >>> parameter
    var result = number% 2 === 0 // / >>> Body
    return result // return result >>> return / >>> Body
}

/*
FUNCTION CALL
 To perform a simple function we put her name
and then we put the parameters with ().
 If there are no parameters, it is empty.
*/
function printHi () {
    console.log ("hi")
}
printHi ()
/* RETURN OF THE FUNCTION
When we want to return a function value, we use the
keyword "return" and the value to be returned.
The word return tabem is a confirmation that no code
after it will be executed in the function
*/

function printHi () {
    return "hi"
}
var return_value = printHi ()
console.log (return_value)

/*
FUNCTION WITHOUT RETREAT
 Certain functions just perform a task and do not need to
return. Therefore, we can omit the word return
making the bottom line of the function your end.
 Functions that do not return values ​​are called return
 "void" which is nothing, the value returned in JS will be undefined.
*/
function functionVoid () {
    console.log ("hi, but I won't return anything")
}

return var = functionVoid ()
    console.log (return)

/*
FUNCTION WITH PARAMETERS

Functions can receive 0 or no parameters.
The parameters defined after the name will be variable which can
be used within the body of the function and modified as
well understand.
*/

function sum (number1, number2) {
    return number1 + number2
}
console.log (sum (4,5))

/*
FUNCTION WITH PARAMETERS BY VALUE
 The variables we pass to the functions are copies of the
 variables that we refer to. So, tinkering with the variable
 within the function does not change the value of the reference variable.

 
*/

function referenceByValue (x) {
    console.log (x)
    x = 7
    console.log (x)
}
var x = 5
referenceByValue (x)
console.log (x)

/* FUNCTION GUIDELINES
There are some guidelines that help us to build functions
best
- Each function must do one thing and do it well
- Try to maintain lean and objective functions (long functions
    tend to do more than one thing)
- Create names that reflect what that function does
- Don't be afraid to use big names
- Try not to mix too many name patterns, as not
mix English with Portuguese, in the names of things
(uses soo one or the other)
- Every task can be broken down into smaller tasks
*/