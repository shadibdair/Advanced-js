//Exercise -2-
//Write two functions that use Promises that you can chain! The first function, makeAllCaps()
//, will take in an array of words and capitalize them, and then the second function, sortWords(), 
//will sort the words in alphabetical order.
//If the array contains anything but strings, it should throw an error.


let arr1=["b","d","e","a","c"]
let arr2=[]
function makeAllCaps(){
    console.log("Array: ",arr1)
   
    arr1.forEach(function(element) {
        arr2.push(element.toUpperCase())

      });
}   
makeAllCaps()
console.log("Change It to Capital Letter: ",arr2)

function sortWords(){
    arr2.forEach(function(element) {
        arr2.sort();
      });
}
sortWords()
console.log("Sorted The Array: ",arr2)


console.log("Mr.Shadi ;)")