// CLASS 2 
/*External CSS, Color System, Encoding and Character

HTML
HTML is an immensity
It is not a good idea to explore HTML tags one by one in
our class. First of all we need to have a good reference
where to consult these tags.

w3shools.com

GOING A LITTLE GERM
In addition to the rich knowledge of tags, there are a few more
knowledge that sounds important:
  - Page Encoding
  - Scale character
  - Color System
ENCONDING
  The computer cannot see letters or phrases, it only understands
numbers 0 and 1, with that we create dictionaries that say to the
computer that the number "x" represents a certain letter
in this dictionary.
  These dictionaries at the end are called encongid and
that our programs manage to cope with which
characters will be displayed on a specific page / document
ENCONDING AND A FRIENDLY WORLD
Poorly standardized, it accompanied the historical development
computers. We will not go deeply into the subject
find in our course.

Main conditions that we have mentioned (for reference):
ASCII - 7 bits, 128 characters
Unicode - UTF- * (Unicode Tranformation Format) - 256 characters

HOW TO APPLY IN HTML?
To apply the correct encoding to your HMTL page, we need
add a very simple tag to our document. By default,
we will use Unicode UTF-8
*/

<meta charset="utf-8"/>

/*
This should be the first thing on your HEAD header. Case
stay at the end, the browser will need to reinterpret your 
entire page.
EXHAUST CHARACTER
How do I write the expression "<h1>" in the body of my HTML page
without the browser confusing this text with a TAG?
 
If we want to display a special character from our language
for the end user we will use the escape character
*/
<html>
   This is a  &at;h1&gt;
</html>
/*

229/5000
COLOR SYSTEM
In HTML colors can be named by name
Can be encoded by hexadecimal numbers, such as, FFAA00
-1,2,3,4,5,6,7,8,9, a, b, c, d, e, f.
The codes are like a mixture of RGB colors
(Red, Green, Blue).


CSS

WHAT WILL WE LEARN?
- What is CSS
- How we create and add CSS code to our page
- Main properties and values
- A point of the university and how to get deeper into it
(links, videos, comments, etc.)

WHAT IS CSS?
The Cascading Style Sheet language, called CSS, is used
to stylize elements written in a markup language
as HTML. CSS separates content from visual representation
from the website. Changes the color of the text and the background, the font and the font
spacing between paragraphs, as an example.
It is also possible to stylize tables, adjust miagens for
their respective screens, etc.

BASIC SYNTAX
The basic syntax of CSS code can be summarized in the following
parts:

*/
selector{
    property 1:: value(es)1;
    property 2: value(es)2
 }
 /*
 SINTAXE BASICA -SELECTORES
Selector will indicate which tags of our HTML document
will receive that formatting
 
BASIC SINTAX - SELECTORS
You can indicate which items will receive the style
through three main strategies:
DIRECTLY IN THE TAG NAME: You can define tags
specific to receive formatting.
 
Example:
h1 >>> all h1 tags will receive the format indicated between
the keys

THROUGH CLASS: You can determine the class of elements
who will receive the training. This allows, for example, that some
h1 elements are formatted and others are not.
Classes are preceded by one. (Score)
 
Example:
.navbar -> all tags have attributes class = "navbar"
will receive the change.
h1, navbar _> all h1 tags that have the class tribute
= "navbar" will receive the change.
h1.navbar -> all h1 tags that have the attribute
class = "navbar" will receive the change.

BASIC SINTAX - SELECTORS
THROUGH ID: Just as we use the class attribute, we can
use the "id" attribute. Different from the classes, in this case
you use the # symbol
 
Example:
#container -> all tags that have the attribute id = "container"
will receive the change
div # container _> all divs that have the attribute id = "container"
will receive the change.
 
SINTAXE BASICA - PROPERTY
 
*/
selector{
    property 1:: value(es)1;
    property 2: value(es)2
 }
 /*
 PROPERTY: And the tag property that we would like to
change . There is a reference linked here with all the
properties contemplated by CSS #, which we are studying.
 
Example: margin, color, background-image, font-style, font-weight
 
BASIC SINTAX - VALUES */
selector{
    property 1:: value(es)1;
    property 2: value(es)2
 }
 /*
 VALUE: Each property has a set of values that it
can assume, You need to consult the reference to know
what values are these. Some examples of more common values are:
 
HOW TO PLACE CSS ON OUR PAGE?
There are 3 main ways to put CSS in our
HTML page:
- Style attribute inside HTML tags
- <style> </style> tag
- Pulling an external css document through the <link> tag
* /
<link rel ="stylesheet" type="text/class" href="css/style.css"/>