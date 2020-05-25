// lesson7 - While Loop
/*
While
 
How would we solve it?
Make a program where the user tries to guess
a number between 1 and 50.
If he misses the kick, ask for the number again.
If he hits a message
congratulations message and show a
poem
 
 
Enter a number: 33
Hmmm, unfortunately you were wrong, try again: 47
Hmmm, unfortunately you were wrong, try again: 22
Congratulations, you got it right! Here is a poem.
 
To be big, if whole: nothing
Yours exergines or excludes.
If all in every thing.
When you're at least doing it
So in every lake the whole moon.
It shines, because high lives.
 
Ricardo Reis, 1933
 
HOW WOULD WE SOLVE IT?
 
We will need a loop, loop loop!
 
WHILE
In problems that involve repetition, either
finite or infinite let's sweat the loops.
 
There are several types of loops, but today we will learn
the while.
 
Other famous loops are:
for
foreach
do / while

WHILE
 
SOLVING FACTORIAL WITH WHILE
Imagine that you are asked to make a program that receives a
number and its factorial is calculated
 
using the while:
*/

var readlineSync = require ("readline-sync")
var factorialNumber = readlineSync.question ("\
Enter the number to calculate factorial: ")
var result = 1
while (factorialNumber> 1) {
   result = factorialNumber * result
   factorialNumber = factorialNumber - 1

// infinite if ...
console.log(result) // prints result

// SYNTAX

condition var = factorialNumber > 1
while (condition) {// start of loop
   result = factorialNumber * result // first instruction
   factorialNumber = factorialNumber - 1 // second instruction
} // end of loop

/*Comments:
- while: reserved word
- condition: if the condition is true, the loop executes
again from the first line of the block, just after
the last. Otherwise, it ignores the while block.
- {marks the beginning of the loop
-} marks the end of the loop
- loops can have other loops

WHILE
 
COMMAND BREAK
 
We can also break the loop using the keyword break;
 
WE WILL use the break in:
- Errors in the code can lead to the use of the break
- When we are looking for values ​​in a folder
or file and we've already found the value we need, we can
use the break to not perform unnecessary loops. */
var rs = require ("readline-sync")
var numFactorial = rs.question ("Enter the number for \
calculate factorial: ");
var result = 1
 
// when the condition true implies an infinite loop
while (true) {
   result = numFactorial * result
   numFactorial = numFactorial - 1
   if (numFactorial > 1) {
       // we can use the break to break the loop too
       break;
 
 
   }
}
console.log (result); // print result