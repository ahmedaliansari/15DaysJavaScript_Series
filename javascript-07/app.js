// DOM \\

// Example No : 01:~
// let myPara = document.getElementById("my-Para");
// myPara.innerText = "Hello Students";

// Example No : 02:~
// let myPara = document.getElementById("my-para");
// myPara.innerHTML = "Hello";

// Example No : 03:~
// let myPara = document.querySelector("p");
// myPara.innerHTML = "<b> Pakistan Zindabad <b/>";

// ======================== \\

// Set Interval \\
 
// let myPara = document.querySelector("#my-para");
// myPara.innerHTML = "<b>Pakistan Zindabad</b>";
// myPara.style.backgroundColor = "#000";
// myPara.style.color = "#fff";

// setInterval(function() {
//     if (myPara.style.display === "none") {
//         myPara.style.display = "block";
//     }else{
//         myPara.style.display = "none";
//     }
// }, 500);

// ======================== \\

// Set Animation \\

// let myPara = document.querySelector("#my-para");
// myPara.innerHTML = "<b>Pakistan Zindabad</b>";
// myPara.style.backgroundColor = "#000";
// myPara.style.color = "#fff";
// myPara.style.width = "100%";

// setInterval(function () {
//   let width = myPara.style.width;
//   if (width === "100%") {
//     myPara.style.width = "10%";
//   } else { // "30%"
//     width = +width.replace("%", ""); // "30%" => "30" => 30
//     myPara.style.width = width + 10 + "%"; // 30 + 10 = 40 + "%" = "40%""
//   }
// }, 500);

// ======================== \\

// For Senemetric Color \\

// const myPara = document.getElementById("my-para");
// myPara.innerHTML = "<b> Pakistan Zindabad <b/>";

// setInterval(function() {
//     let color1 = Math.round(Math.random()* 1000000);
//     let color2 = Math.round(Math.random()* 1000000);
   
//     console.log(color1,color2);
//      myPara.style.backgroundColor = "#" + color1;
//   myPara.style.color = "#" + color2;
// },500);

// ======================== \\\

// For RGB Color \\

// const myPara = document.getElementById("my-para");
// myPara.innerHTML = "<b>Pakistan Zindabad</b>";
// setInterval(function () {
//   let color1 = Math.floor(Math.random()*16777215).toString(16);
//   let color2 = Math.floor(Math.random()*16777215).toString(16);
//   myPara.style.backgroundColor = "#" + color1;
//   myPara.style.color = "#" + color2;
// }, 500);

// ======================== \\

// let dataThatCanChange = "asdf";
// dataThatCanChange = "ghjkl";
// const dataThatCanNotBeChanged = "asdfghjk";
// dataThatCanNotBeChanged = "sadasd";