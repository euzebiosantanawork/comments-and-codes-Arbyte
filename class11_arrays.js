// lesson11 - arrays and strings
/*
ARRAYS
 
WHAT IS?
Arrays are a data structure. Of the existing structures,
this is the most basic of programming.
An array is a variable that has a collection or list of
values stored in sequence.
In JavaScript, arrays can store values of different
types
*/
var_slide fruit = ["banana", "litter", "pear"]
 
//SYNTAX
 
var arrayWithFruits = ['banana', "litter", "pear"]
var arrayEmpty = []

/*
PROBLEM TO SOLVE
Make a program that reads 5 numbers and at the end make the sum
of all of them and display the result so that it appears all
operation.
 
WITHOUT USING ARRAY:
*/
 
var rs = require ("readline-sync")
// Collect the numbers
var n1 = rs.question ("Insert number 1:")
var n2 = rs.question ("Insert number 2:")
var n3 = rs.question ("Insert number 3:")
var n4 = rs.question ("Insert number 4:")
var n5 = rs.question ("Insert number 5:")
 
// add up
var result = n1 + n2 + n3 + n4 + n5
 
// Displays the beautiful result
console.log (`$ {n1} + $ {n2} + $ {n3} + $ {n4} + $ {n5} = $ {result}`)

/*
PROBLEM TO SOLVE
Make a program that reads 5 numbers and at the end do
the sum of them all and display the result so that
appears all over the operation.
*/
 
var rs = require ("readline-sync")
var numberInserted = [] // Initialized as array
var result = 0
// Collect the numbers
for (var i = 0; i <5; i ++) {
   var numberInserted = rs.questionInt (`Insert number $ {i}:`)
   // Add the element to the array using the "push" method
   numberInserted.push (numberInserted
   // You have already added the result
   result = result + numberInserted
};
 
// Displays cute result
var toPrint = ""
 
for (var i = 0 <numberInserted.length; i ++) {
   toPrint = `$ {toPrint} + $ {numberInserted {i}}`
}
toPrint = toPrint + "=" + result
console.log (toPrint)
 
/*
ADVANTAGES OF USE:
And if the problem changed to: "Now we are not going to read 5 numbers,
but 100 number "?
Just change the counter
*/
 
var rs = require ("readline-sync")
var numberInserted = [] // Initialized as array
var result = 0
// Collect the numbers
for (var i = 0; i <100; i ++) {
   var numberInserted = rs.questionInt (`Insert number $ {i}:`)
   // Add the element to the array using the "push" method
   numberInserted.push (numberInserted
   // You have already added the result
   result = result + numberInserted
};
 
// Displays cute result
var toPrint = ""
 
for (var i = 0 <numberInserted.length; i ++) {
   toPrint = `$ {toPrint} + $ {numberInserted {i}}`
}
toPrint = toPrint + "=" + result
console.log (toPrint)
/*
HOW TO CREATE?
There are two main ways to create a
JavaScript array:
- using square brackets
- using Array () function
 
For simplicity and readability, I recommend using
the first method
 
creating empty arrays:
*/
 
var cars = [] // creates an empty array called cars
var cars = new Array () // also creates an empty array
 
// creating arrays already with elements:
 
var cars = ['volvo', 'bmw', 'alfa romeo']
 
/*
WHAT CAN BE STORED?
Any object can be stored within a
array, including other arrays.
Unlike other languages, JavaScript also
does not require congruence between the types of
values within an array. That is, an array, can
be a set of objects of different types:
*/
 
var registration = [
    ['frozen', 'shrek', 'kill bill'],
    27,
    "Rafael Magalhaes",
    "arbyte",
    {
        'address': "Rua Fidencio Ramos"
        'number': 100,
        'Sao Paulo city"
    }
]

/*
OPERATION
Arrays have sizes according to the number of elements
that contains.
Each value in the array can be referenced using a
entire identifier, called an index. This makes each
index has only one value
 
VALUE: 07 11 06 55 98 45 16 96 46
INDEX: 00 01 02 03 04 05 06 07 08
 
00 >>>> Lower Bound
08 >>>> Upper Bound
 
Array Length = 09
 
MAIN METHODS AND ATTRIBUTES
All methods and attributes in the array can be
consulted at w3schools, but we will highlight some that will
help us more in the next activities.
 
- arr.push (element)
add the elm element to the end of the array
- arr.pop ()
removes the last element from the array
- arr.shift ()
just like pop, but remove the first element
- arr [index]
returns the element by the informed index
- arr.length
returns the number of elements in the array
- arr.splice (index, quantity)
Allows you to add or remove elements informing index
and quantity
- arr.concat (arr2)
Allows you to concatenate two arrays in one, sequentially
- arr.join (separator)
displays a concatenated string all elements of an array,
joined by a specific separator (standard and comma)
 
EXAMPLE:
*/
 
var fruits = [];
fruits.push ("banana")
fruits.push ("strawberry")
fruits.push ("avocado")
for (var i = 0; i <fruits.length; i ++) {
   console.log (fruits [i])
}
/*
VALUE: Banana Strawberry Avocado
INDEX: 00 01 02
*/
 
var fruits = [];
fruits.push ("banana")
fruits.push ("strawberry")
fruits.push ("avocado")
fruits.shift ()
for (var i = 0; i <fruits.length; i ++) {
   console.log (fruits [i])
}
 
/*
VALUE: Banana Strawberry Avocado
INDEX: 00 01 02
 
using shift ()
VALUE: Avocado Strawberry
INDEX: 00 01
 
EXAMPLES:
*/
 
var ar = ["rafael", "ivan", "iago", "marina", "kobus"]
console.log (ar.join (""))
air [0] = "italo"
console.log (ar.join ('\ n'))
 
/*
We can change an element of an array by checking
a value that index of the array
 
In the first log, we join the elements using
of a "space"
 
In the next log, we change the character from join to
"\ n" which is the line break escape character
 
STRINGS
 
WHAT IS?
A string is nothing more than an array of characters, in which
each element of the array is represented by a character
 
  INDEX: 00      01     02       03      04      05
VARIABLE: H      e       l       l       o       0 \
ANDRESS: 0x23451 0x23452 0x23454 ox23454 0x23455 0x23456
 
Despite being an array, strings have their own methods
such is the popularity of its use
 
HOW TO CREATE?
Strings can be initialized using "" or ''
 
 
*/
var first_string = "My first string"
var second_string = 'My second string'
 
/* If we want to put quotes inside a string we need
escape characters or alternate the use of quotation marks according to
with our use
 
STRING CONCATENATION
The concatenation of strings is literally joining the two texts
one after the end of the other.
These operations can be done using the +
 
 
*/
var first_string = "hello"
var monday_string = "alright"
var hello_how_are_you = first_string + "" + second_string
console.log (hello_how_are_you)
 
/*
Before the concatenation operation takes place, the types of all
all variables involved in the operation are checked.
If an object is found, it is converted to a string.
 
STRINGS INTERPOLATION
 
INTERPOLATION: Introducing or merging words or phrases
in a text. Cessation, Interruption. Interpolate: it is said of something
that is located between the two poles of a system.
 
Interpolation is a flexible and lean way to create
strings with different variables.
 
It uses '' and identifies the variables with:
*/
 
var first_string = "hello"
var second_string = "alright"
var hello_how_are_you = `$ {first_string} $ {second_string}`
console.log (hello_how_are_you)
 
/*
MULTILINES IN STRINGS
To create larger texts we use \ at the end of each
line and when we want to end the string we use ""
*/
var strinstring_multi_lineg = "hello \
I come from a place far away to write \
This text is perfect to say that \
slashes can make my string \
keeps growing however \
the quotes can end my \
small byteLife "
 
console.log (string_multi_line)
 
/*
MAIN METHODS
 
like the string and an object, it has an infinity
of methods that can be consulted. Let's highlight
some:
- str.length
Lets you know how many characters the string has
- str.charAt (position)
Returns the character to the informed position, remembering that
the first position starts at 0. And the same as using the
square brackets [position]
- str.slice (start, end)
Returns the letters from the beginning and end
- str.toLowerCase and str.toUpperCase
Decrease or increase the text box (CAPITAL LETTERS
OR CAPITAL LETTERS)
- trim ()
Removes gaps and whites at the beginning or end of
text (you can choose something other than space
in blank)
- includes ()
Lets you know if the string contains a certain text
- indexOf (word)
Returns the index at which a word is found
in a string
-split / tokenize ()
Allows you to separate the string into a character array
 
SOME CONCEPTS
- strings are immutable
This means that every string is a new thing, if you create 100
strings in a loop, there are 100 texts in memory.
- substrind
And an excerpt from a larger string
EXAMPLE: "oog" is a substring of "Google"
- prefix
It is the substring that is at the beginning of the string.
EXAMPLE: "Google" and "Google Docs" prefix, "Google Sheets",
"Google Drive"
- suffix
And the substring that is at the end of the string
EXAMPLE: "drive" and the suffix of: "google Drive", "one drive",
"Hard Drive"
- capitalization / Case Folding
And the string text box. Capital letters or letters
lowercase
 
*/