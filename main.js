import { ref, push, set, database, onValue } from "./firebase.js";



// //refrence a part of our database
let itemsref = ref(database, "items")


//show items on firebase in our items container
onValue(itemsref, (snapshot)=>{
    itemsContainer.innerHTML=""
let data = snapshot.val();
console.log(data)
for(let key in data){
    console.log(data[key].name)
    console.log(data[key].content)
    let newh1=document.createElement("h1")
    newh1.innerHTML=(data[key].name)
    itemsContainer.append(newh1)

    let newp=document.createElement("p")
    newp.innerHTML=(data[key].content)
    itemsContainer.append(newp)
}
})