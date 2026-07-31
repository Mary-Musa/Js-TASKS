//Task1-global and local scope in Js

let platform = "Youtube";//global variable

function contentCreator(name){

    let creatorName = name;//Local variable

    console.log("Platform:",platform);
    console.log("Creator:",creatorName);
}

contentCreator("Pendo");
contentCreator("Mary");



//Task2 - counter closure/closures in Js

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



//Task3-message generator

function messageGenerator(message){

    return function(userName){

        console.log(`${message}, ${userName}`);
    }
}

messageGenerator("Welcome")("Amina!");
messageGenerator("Welcome")("Brian!");
messageGenerator("Welcome")("David!");


//Task4- orderprocessing-callback functions

function processOrder(item, callback){

    console.log(`Processing order for ${item}`);

    callback();
}

function orderReady(){

    console.log("Order is ready!");
}

processOrder("Pizza", orderReady);


//Task5- callback function

function calculate(a,b,operation){
    return operation(a,b);
}

function addition(a,b){
    return a + b;
}

function subtraction(a,b){
    return a - b;
}

function multiplication(a,b){
    return a * b;
}

console.log(calculate(90,10, addition));
console.log(calculate(100,30, subtraction));
console.log(calculate(400,20,multiplication));
