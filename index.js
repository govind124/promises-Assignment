//Que.1--Write one example explaining how you can write a callback function 

const hello = (nameOfFrirnd)=>{
    return ("hello"+" "+ nameOfFrirnd)
};

const wishing = (friend,callbackFunction)=>{
    console.log(callbackFunction(friend));
};

wishing("Pitambar Bhadra",hello);

//Output-- hello Pitambar Bhadra;

// //Que.2"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"------->

// const findNumbers = () => {
//     console.log("Print all the numbers");
//      setTimeout(() => {
//          console.log("1")

//          setTimeout(() => {
//              console.log("2");
             
//              setTimeout(() => {
//                  console.log("3");

//                  setTimeout(() => {
                     
//                     console.log("4");
                    
//                     setTimeout(() => {
//                         console.log("5");
                        
//                         setTimeout(() => {
//                             console.log("6");

//                             setTimeout(() => {
//                                 console.log("7");
//                             }, 1000);
                            
//                         }, 1000);
//                     }, 1000);
//                  }, 1000);
//              }, 1000);
//          }, 1000);
         
//      }, 1000);
// }


// findNumbers();


//Que.3-- "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"


// let myPromise = new Promise((resolve,reject) =>{
//     resolve();
// })

// myPromise.then(()=>{
//     setTimeout(() => {
//         console.log("1")
//     }, 1000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("2")
//     }, 2000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("3")
//     }, 3000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("4")
//     }, 4000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("5")
//     }, 5000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("6")
//     }, 6000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("7")
//     }, 7000);
// })


//Que.4-- Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

let promisefunc = (arg) =>
new Promise((Success,Fail)=>{
    // Success();
    // Fail();
    if (arg=="yes"){
        return Success();
    }
    else{
        return Fail();
    }
})


promisefunc("yes").then(()=>{
    console.log("Promise Success");
}).catch(()=>{
    console.log("Promise is Fail")
})


//Que.5--Create examples to explain callback function.
function cofee(){
console.log("jai ho")
}
function tea(callback1){
    console.log("hello this is callback") 
callback1();
}
tea(cofee) 

//Que.6--Create examples to explain callback hell function.
const heading1=document.querySelector("#heading1")
const heading2=document.querySelector("#heading2")
const heading3=document.querySelector("#heading3")
const heading4=document.querySelector("#heading4")
const heading5=document.querySelector("#heading5")

setTimeout(()=>{
    heading1.textContent="Pitambar Bhadra";
    heading1.style.color="brown"

setTimeout(()=>{
    heading2.textContent="Rahul";
    heading2.style.color="yellow"

setTimeout(()=>{
    heading3.textContent="Arvind";
    heading3.style.color="sienna"

setTimeout(()=>{
    heading4.textContent="Vijay";
    heading4.style.color="yellowgreen"

setTimeout(()=>{
    heading5.textContent="Pushpendra";
    heading5.style.color="skyblue"
},3000)
},2000)
},2000)
},3000)
},5000)


//Que.7--Create examples to explain promises function.
let myPromise= new Promise(function(Resolve,Reject){
let x=6;

if (x==6){
    Resolve("OK")
}else{
    Reject("Error")
}
})
myPromise.then(
    function(value) {myDisplay(value);},
)
console.log(myPromise)
//Que.8--Create examples to explain async await function

async function asyncAwaitPromises()
{
    console.log("Inside function");
    const response = await fetch("https://fakestoreapi.com/products");
    console.log("Before response");
    const users = await response.json();
    console.log("user success");
    return users;
    // it is going to return  a promises 
}

console.log("calling the function");
let data = asyncAwaitPromises();
console.log("After calling the function ");
console.log(data);
data.then((res)=>{
    console.log(res);
});
console.log("Done Code");
