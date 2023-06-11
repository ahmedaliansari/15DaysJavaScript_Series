// (1) Prompt Use + Increament //

// let userFavNum = +prompt ("Enter Your Favourite Number");
// console.log(userFavNum + 5);

// ========================== //

// (2) Compassision Operator //

// console.log( 5 == 5 );
// Answer is : true //


// console.log( 5 == 6 );
// Answer is : false //


// console.log( 5 !== 10 );
// Answer is : true //


// console.log( 1 < 5 );
// Answer is : true //


// console.log( 1 > 5 );
// Answer is : true //

// Another Example //

// let num1 = 15;
// let num2 = 10;

// console.log( num1 > num2);
// Answer is : true //

// ======================== //

// (3) iF & else Condition //
// Cnic Condition //

// let userAge = +prompt (" Enter Your Age ");

// if ( userAge >= 18){
//     console.log(" You Are Eligible You APply For Cnic");
// }
// else{
//     console.log(" You Are Not Eligible You Age is " + userAge );
// }

// ======================== //

// (3) iF & else Condition //
// Random Number Guess Game //

// Example No : 01 //

// let userFavNum = +prompt (" Enter YOur Favourite Number ");
// let computerNum = Math.round(Math.random()*10);

// if(userFavNum === computerNum){
//     console.log(" Congrasulation You Win!");
// }
// else{
//     console.log(" Unfortunatily You Lose!" +computerNum);    
// }

// Example No : 02 //

// let userInput = prompt("Even or Odd");
// let computerNum = Math.round(Math.random() * 10);
// let isEven = computerNum % 2 === 0;
// if (isEven && userInput === "even") {
//     console.log("You Won!" + computerNum);
// } else if (!isEven && userInput === "odd") {
//     console.log("You Won!" + computerNum);
// } else {
//     console.log("You Lose! " + computerNum);
// }

// ======================== //


// (4) For Loop //

// Example No : 01 //
// for (let  i = 1; i <= 10; i++){
//     console.log(" Hafiz Ahmed Ali Ansari " +i);
//     document.write(" Hafiz Ahmed Ali Ansari " +i);
// }

// Example No : 02 //
// Long Method Tables //

// for (let  i = 1; i <= 10; i++){
//     console.log(" 2 x " +i+ " = " + 2*i);
// }

// Easy Method Tables //

// for loop condition:~
// 1) inislization //
// 2) Condition //
// 3) Increment //

// let table = 3;
// for (let  i = 1; i <= 10; i++){
//     console.log(table+" x " + i + " = " +table*i);
// }