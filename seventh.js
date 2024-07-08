//             CallBack

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a , b , sumCallBack){
//     sumCallBack(a , b);

// }
// calculator(5 , 10, sum);



//           callback hell problem
// function getData(dataId,getNextData){
    
//     setTimeout(()=>{
//         console.log("Data : ", dataId);    
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(123, ()=>{
//     getData(234,()=>{
//         getData(345,()=>{
//             getData(456)

//         });
//     });
// });



/**************      promises     ************/
// let promise = new Promise((resolve , reject)=>{
//     console.log("i am a promise");
// //    resolve("success");
//     reject("something went wrong");
// });



// function getData(getId, getNextData) {
//     return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("DATA : ",getId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     },2000)    
//     })
// }


// const getPromise=()=>{
//     return new Promise((resolve , reject)=>{
//         console.log("i am a promise");
//     //    resolve("success");
//         reject("something went wrong");
//     });
// }
// let promise=getPromise();
// // promise.then((res)=>{
// //     console.log("promise is fulfilled : ",res);
// // })
// promise.catch((err)=>{
//     console.log("rejacted",err);
// });


// function asncFunc1(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("Data 1");
//             resolve("promise resolved ");
//             },4000);
//         })
// }

// function asncFunc2(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("Data 2");
//             resolve("promise resolved ");
//             },4000);
//         })
// }
// let p1=asncFunc1();
// p1.then((res)=>{
//     console.log("fetching data 1 : ",res);
//     let p2 = asncFunc2();
//     p2.then(()=>{
//         console.log("fetching data 2",res);
//     })
// });

//     promise chain
// function getData(dataId){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("Data : ",dataId);
//             resolve("success");
//         },2000);
//     })
// }
// let p1 = getData(1);            //  we can also do this by following 2 methods
// p1.then((res)=>{
//     console.log(res);
// });

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// });

// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     return getData(4);
// }).then((res)=>{
//     console.log(res);
// });


/*****************          Async await         *********************/

// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// }
// async function getWeatherInfo(){
//     await api();
//     await api();
// }


// function getData(dataId){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("Data : ",dataId);
//             resolve("success");
//         },2000);
//     })
// }
// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

// // we can make IIFE function to do this work
//                                                // syntax=(funtion)();  function without name 
// (async function (){                            // just for one time and automatically run
//     await getData(1);
//     await getData(2);
//     await getData(3);
// })();