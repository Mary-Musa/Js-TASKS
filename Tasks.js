//Task1-global and local scope in Js

let platform = "Youtube";

function contentCreator(name){

    let creatorName = name;

    console.log("Platform:",platform);
    console.log("Creator:",creatorName);
}

contentCreator("Pendo");
contentCreator("Mary");



//Task 11- counter closure/closures in Js

function createCounter(){

    let count = 0;

    return{

        increment(){
            count++;
            return count;
        }
        
    }
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());




