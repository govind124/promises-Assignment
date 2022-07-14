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
//     console.log("Printing the numbers");
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
    // resolve();
    // reject();
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
// it same as explained in question number1.

//Que.6--Create examples to explain callback hell function.
// it is same as explained in question 2.

//Que.7--Create examples to explain promises function.
// it is same as explained in question 4.

//Que.8--Create examples to explain async await function

async function asyncAwaitPromises()
{
    console.log("Inside the function");
    const response = await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("user resolved");
    return users;
    // it is going to return  a promises 
}

console.log("Before calling the function");
let data = asyncAwaitPromises();
console.log("After calling the function ");
console.log(data);
data.then((res)=>{
    console.log(res);
});
console.log("End of code");