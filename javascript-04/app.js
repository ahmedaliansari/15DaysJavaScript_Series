// Greet Function //

// Example No : 01:~
// function greet (){
//     console.log("Hello Students");
// }
// greet();

// ===================== //

// Example No : 02:~
// function greet (studentName){ // define parameter //
//     console.log("Hello " + studentName);
// }
// greet("Hafiz Ahmed ALi Ansari"); // calling greet function //
// greet("Sajjad Hassan");          // calling greet function // 
// greet("Asharif Khan");           // calling greet function //
// greet("Muhammad Taha");          // calling greet function //
// greet("Muhammad Hussain");       // calling greet function //

// ===================== //

// Example No : 03:~
// function employee (fileNo){      // define parameter //
//     console.log("Ahmed Working On File No : " + fileNo);
// }
// employee(3);                     // calling employee function //

// ===================== //

// Example No : 04:~

// function employee (fileNo){       // define parameter //
//     return ("Anonymous Working On File No : " + fileNo);
// }
// let result = employee(3);         // Save Into New Varriable //
// console.log (result);             // calling employee function //

// ===================== //

// Example No : 05:~

// function add (num1 , num2){       // define parameter //
//     return num1 + num2;
// }
// let result = add(3,3);            // Save INto New Varriable //        
// console.log(result);              // Calling The Result //

// ===================== //

// Recursion //

// Example No : 01:~
// function writeData (data){        // Don't Code At A Long Time //
//     document.write(data);         // Use Condition on this way //
// }                                 // Do not condition used until your browser is hang //
// writeData("Hello Students");      // Try CareFully //

// ===================== //

// Example No : 02:~
// function writeData (data,times){
//     document.write(data);
//     if (times > 0 ){
//         writeData(data, times-1)
//     }
// }
// writeData("Hello Hafiz Ahmed Ali Anari <br/> ", 10);

// ===================== //

// Factorial //

// Example No : 01:~
// Console Ma Check Krna Ha isa //
// 5 * 4 * 3 * 2 * 1
// Answer is : 120 

// Function Find Factorial in Any Number//

// Example No : 02:~
// function factorial(num) {
// if ( num > 1){
//     return (num * factorial(num-1))
// }
// return 1;
// }
// console.log(factorial(3));

// ===================== //

// Closures //

// Example No : 01:~
// let abc = 3;
// function print(def){
//     return function (ghi) {
//         console.log(def + ghi);
//     }
// }

// let innerFunction1 = print(1);
// let innerFunction2 = print(2);
// let innerFunction3 = print(3);

// innerFunction1 (1);
// innerFunction2 (2);
// innerFunction3 (3);

// Example No : 02:~

// function saveUrl(url) {
//     return function() {
//   fetch(url)
//   .then(response => response.json())
//   .then(json => console.log(json))
// }
// }
// let makesRequest = saveUrl('https://jsonplaceholder.typicode.com/todos/1')

// makesRequest();

// ===================== //
