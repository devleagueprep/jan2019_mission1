/*Congratulations Cool Kids, you've been selected for a top secret mission. Should you choose to accept it, do a git fetch and a git pull to find your specific mission. After you complete your mission, commit your work and do a pull request.

This repo will self-destruct in five seconds. Good luck!*/


/*Mission 1: 
Team Leader: Zandra

@param Datatype: String
@return Datatype: String

Create a function named weatherReport that takes a parameter weather and returns the following: "Today's forecast is weather." Where your input will replace the weather parameter.
Console.log to see your result.*/

 
 /*Mission 2: 
 Team Leader: Asia
 
 @param Datatype: String
 @param Datatype: Number
 @return Datatype: String
 
 
 Create a function named happyBday that takes two parameters name and age and returns the following: "Happy Birthday name! You look maaahvelous at age!" Where your input will replace the name and age parameters.
 Console log to see your result.*/
 
 
 /*Mission 3: 
 Team Leader: Dom
 
 @param Datatype: Array
 @return Datatype: Array
 
 Create a function named doubleUp that takes in a parameter arr and will double the value of each number in the array and returns the array.
 Console.log your result.*/
 

 /*Mission 4: 
 Team Leader: Kevin
 
 @param Datatype: Array
 @return Datatype: Array
 
 Create a function named evens that takes in a parameter arr and will sum up only the even indexed numbers in the array and returns a new array.
 Console.log your result.*/
 
 
 /*Mission 5:
 Team Leader: Aquiles
 
 @param Datatype: Array
 @param Datatype: String
 @param Datatype: Array
 
 Create a function named plusOne that takes two parameters arr and str and will add a new string element into an array and will return the array.
 Console.log your result*/
 
 
 /*Mission 6:
 Team Leader: Luke
 
 @param Datatype: Number
 @return Datatype: Number
 
 Create a function named yenConverter that takes a parameter rate and will convert dollars to yen based on today's foreign exchange rate and returns the new yen amount.
 Console.log your result*/
 
 
 /*Mission 7:
 Team Leader: Lewis
 
 @param Datatype: Number
 @return Datatype: Number
 
 Create a function named kmConverter that takes in a parameter miles and will convert miles to kilometers and returns the new kilometer amount
 Console.log your result.*/
 

 /*Mission 8:
 Team Leader: Rina
 
 @param Datatype: Number
 @return Datatype: String
 
 Create a function named whatToEat that takes in a parameter budget. Create the following return statements based on the budget amount: 
 
 Less than 5 =  'Char Hung Sut Manapua'
 Less than 10 =  'Panda Express Orange Chicken'
 More than 10 =  "Gina's Kalbi and Meat Jun Combo"
 
 Console.log your result*/
 
 
 /*Mission 9:
 Team Member: Brett
 
 @param Datatype: Array
 @return Datatype: Array
 
 Create a function named countUp that takes in a parameter arr and will add 1 to each number in the array and returns the array.

 Console.log your result*/


 /*Mission 10:
 Team Member: Brenda
 
 @param Datatype: Object
 @return Datatype: Object
 
 Create a function named loopy that takes in a parameter obj that will loop through the properties of an object. Console.log the values for the key-value pairs.

 Create an object of your choice with at least 3 key-value pairs.

 Console.log your result*/


 /*Mission 11:
 Team Member: Dan
 
 @param Datatype: arr
 @return Datatype: arr
 
 Create a function named rewind that takes in a parameter arr that will loop through the arr in reverse (do not use the reverse method) and pushes the new order into a new array.

 Console.log your result*/

newArr = []
reverseArray=["Pikachu", "Mewtwo", "Charmander"]

function rewind(arr){
    for(var i = arr.length - 1; i>=0; i--){
     newArr.push(arr[i])
    }
    return newArr
}

console.log(rewind(reverseArray))

