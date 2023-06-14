            // Array \\

// let months = ["January", "Fabruary", "April", "May", "June", "July",  // Piece OF \\
//               "Auguest", "September", "Octobar,November", "December"];  // Array \\
// months[2] = "March"; // Add Item With Array \\
// console.log(months); //  Calling varriable   \\

// ============================= \\

// Array + User Answer In Prompt \\

// let months = ["January", "Fabruary", "April", "May", "June", "July",  // Piece OF \\
//               "Auguest", "September", "Octobar,November", "December"];  // Array \\

// let ShouldIStore = prompt("Array Ma Value Rakh du"); // User Prompt Action \\

//  if(ShouldIStore === "yes"){    // Condition Yes Pa Ya Statement Cla Gi \\
//     months.push ("Full Year");  // Ya Wali \\
//  }
// //  Result:~
// console.log(months);            // Calling Function \\
// document.write(months);         // Calling Function \\

// ============================= \\

// let months = ["January", "Fabruary", "March"];
// // months.shift();                             // First Index Wala Array Ko Delete Krta Hai \\
// // months.unshift("Jan");                      // Array Ka 0 Index Ma Apni Value rakhta Hai \\
// // months.pop();                               // Array Ka last Index ko Remove Kr Deta Hai \\
// // console.log(months.length);                 // Array Ki Full Lenght define Krta Hai T-Quantity Ma \\
// // months.splice(0,1);                         // Array Ki Value Index Sa Remove Krta Ha \\
// // months.splice(2,1 ,"April","May");          // Array Ki Value Index Sa Remove Aur Update 2no Krta Ha \\
// months.slice()                                 // Array Ki Value Index Sa Remove Aur Update 2no Krta Ha \\
// let newArr = months.slice(0, 3);               // Array Ki Slice Method Ki Calling Is Tarha Krta Ha \\
// console.log(newArr);

// document.write(months);
// console.log(months);

// ============================= \\

// Array + For Each Function in Number \\

// Example : 01:~
// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   arr.forEach(function(val,index){
//    console.log(index,val);
// });

// Array + For Each Function in String \\

// Example : 02:~
// let arr = ["Apple", "Orange", "Mango"];
// arr.forEach // loops through array values
// arr.forEach(function(val, index) {
//     console.log(index, val);
// });

// ============================= \\

// Example : 03:~
// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let fillteredArr = arr.filter(function(val){

//     if ( val % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(fillteredArr,arr);

// Array + arr.sort  // Serial Vise Number Bna Deeta Ha \\ 

// let arr = [ 1, 3, 5, 4, 6, 9, 2, 7, 8, 10];
//   let sortedArr = arr.sort(function(a,b){
//   if ( a > b ){
//     return 1;
//   }
//   else{
//     return -1;
//   }
// });

// console.log(sortedArr);

// ============================= \\

// Reduce \\

// Example : 01:~
// let arr = [ 1, 3, 5, 4, 6, 9, 2, 7, 8, 10];
// let total = arr.reduce(function(prevVal,curVal){
//    return prevVal + curVal;
// });

// console.log(total);

// Example : 02:~
// let arr = ["Happy","BirthDay","To You","Ahmed"];
// let finalString = arr.reduce(function(prevVal,curVal){
//     return prevVal + " "+ " " + curVal;}," ");

// console.log(finalString);
// document.write(finalString);

// Example : 03:~
// let arr = ["Wellcome", "To", "Students"];
// let finalString = "";

// arr.forEach(function (val) {
//     finalString = finalString + " " + val;
// });

// console.log(finalString);
// document.write(finalString);

// ============================= \\