Describe the difference between JavaScript “for” loop and “for-in” Loop

For loops are used in a a lot of different ways.  Once way is to iterate an Array:

    var myArray = [“dog”, “cat”, “fish”];

    for (i = 0; i < myArray.length; i++) {
         console.log(myArray[i]);
    }

This for loop is pretty standard.  Set the increment value (i) to start at 0 (the first number of an Array index), continue to loop until the increment value (i) is less than the length of myArray, and increment (i) by 1 every time.  This will run the loop starting with:

1 i is equal to 0
2 The length of myArray is 3 (there are three items in the array myArray), because i = 0 is less than 3, perform what’s in my block of statements
3 myArray[0] -> so console.log(myArray[0]) will print out “dog"
then increment (i) by 1 -> i is now equal to 1
4 The length of myArray is 3  there are three items in the array myArray), because i = 1 is less than 3, perform what’s in my block of statements
5 myArray[1] -> so console.log(myArray[1]) will print out “cat"
6 then increment (i) by 1 -> i is now equal to 2
7 The length of myArray is 3 (there are three items in the array myArray), because i = 2 is less than 3, perform what’s in my block of statements
8 myArray[2] -> so console.log(myArray[2]) will print out “fish"
then increment (i) by 1 -> i is now equal to 3
9 The length of myArray is 3 (there are three items in the array myArray), because i = 3 is not less than 3, but equal to it, stop the loop and we are finished




For-in loops are similar to the .forEach method.  

    var myArray = [“dog”, “cat”, “fish”];

    for (var i in myArray) {
         console.log(myArray[i]);
    }

This loop functions slightly different than our for loop from above.  The increment value is established by (var i) instead of (i = 0).  You will also notice that we do not specify a comparator, or increment value.  The for-in loop will evaluate the array and determine what the length is and how many times it needs to run based on the length of the Array.  It does this behind the scenes and we don’t have to specify it.  This loop will run starting like this:

var (i) becomes the first index in the array (JavaScript does this behind the scenes), so in our array, i = 0.
myArray[0] -> so console.log(myArray[0]) will print out “dog"
JavaScript will then set the index to be the next index in the array, in our case i = 1
myArray[1] -> so console.log(myArray[1]) will print out “cat"
JavaScript will then set the index to be the next index in the array, in our case i = 2
myArray[2] -> so console.log(myArray[2]) will print out “fish"
JavaScript knows that there are no more entries in the array, stop the loop and we are finished
