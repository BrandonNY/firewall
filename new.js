import { ref, push, set, database, onValue } from "./firebase.js";

//get elements from index.html
let userInput = document.getElementById("itemInput")
let userInput2 = document.getElementById("itemInput2")
let submitBtn= document.getElementById("submitBtn")
let itemsContainer = document.getElementById("itemsContainer")



//refrence a part of our database
let itemsref = ref(database, "items")
let itemsref2 = ref(database, "items")


//add item to database
submitBtn.onclick= function(event){
event.preventDefault()
let userInputval = userInput.value
console.log(userInputval)
userInput.value=""
let userInputval2 = userInput2.value
console.log(userInputval2)
userInput2.value=""
let newItemRef= push(itemsref)
set(newItemRef,{name: userInputval, content: userInputval2})




}