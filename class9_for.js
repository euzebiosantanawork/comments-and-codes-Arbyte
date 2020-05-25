// class9 -for
/*
 
FOR
 
the loop is a command that behaves
same as while, but it allows expressing counters as
part of the command and not how logic separates.
 
SYMMETRIC FOR AND WHILE:
 
*/

for (var x = 0; x <100; x ++) {
        // executed util x> = 100
    }
    // loop for
     
    var cont = 0;
    while (count <100) {
        // do stuff
    count ++;
    }
    // while loop
    /*
STRUCTURE OF THE FOR COMMAND
Within the for command there are 3 parts separated by;
- The first part will be executed before executing the block
of the loop code.
- The second part is the necessary condition for the loop
keep running (just like we do while)
- The third part will be played at the end of each round
of the loop and is normally used to update the counter.
*/

for (var i = 0; i <wordSize; i = i + 1) {
       console.log (word.charAt (i);)
    }

    /*
    FOR
    SOLVED EXAMPLE 1
    Make an algorithm that receives a number and print the word
    "Hello world n", where n is the current repetition number
    */

   var readlineSync = require ('readline-sync')
   var number = readlineSync.question ("Insert number:")
    
   for (var i = 1; i <= number; i = i +1) {
       console.log ("Hello world" + i)
   }
    
   /*
   FOR
    
   SOLVED EXAMPLE 2
   Make an algorithm that receives a word and prints
   each character of the word on a line
    
   */
    
   var readlineSync = require ("readline-sync")
   var word = readlineSync.question ("Insert word:")
    
   var wordSize = word.length
   for (var i = 0; i <wordSize; i = i + 1) {
        console.log (word.charAt (i))
   }
    
  
