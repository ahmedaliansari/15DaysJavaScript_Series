// object \\

// Example No : 01:~
// let person1 = {
//     id   : "01",
//     name : "Hafiz Ahmed ALi Ansari",
//     cnic : "4240184126483",
//     email : "hafizahmedaliansari123@gmail.com",
//     phone : "03121057411",
//     address : "Orangi Town Karachi",
// }

// console.log(person1);

// =============================== \\

// let person2 = {
//     id   : "01",
//     name : "Hafiz Ahmed ALi Ansari",
//     cnic : "4240184126483",
//     email : "hafizahmedaliansari123@gmail.com",
//     phone : "03121057411",
//     address : "Orangi Town Karachi",
//     speak : function (sentence){
//         console.log(sentence + this.name);
//     }
// }
// person2.speak("Hello, My Name Is ")
// // console.log(person2);

// =============================== \\

// Example No : 03:~
// let student1 = {
//     id: "01",
//     name: "Hafiz Ahmed ALi Ansari",
//     cnic: "4240184126483",
//     email: "hafizahmedaliansari123@gmail.com",
//     phone: "03121057411",
//     address: "Orangi Town Karachi",
// };
// let student2 = {
//     id: "02",
//     name: "Asharif Khan",
//     cnic: "424010000000",
//     email: "asharifkhan245@gmail.com",
//     phone: "03100000000",
//     address: "Orangi Town Karachi",
// };
// let student3 = {
//     id: "03",
//     name: "Sajjad Hassan",
//     cnic: "424010000000",
//     email: "sajjadhassan20081989123@gmail.com",
//     phone: "03100000000",
//     address: "Orangi Town Karachi",
// };

// let students = [student1 , student2 , student3];

// console.log(students);

// =============================== \\

// Example No : 04:~
// function providesStudent(id1, name1, email1, phone1, address1) {
//     return {
//         id: id1,
//         name: name1,
//         email: email1,
//         phone: phone1,
//         address: address1,
//     };
// }
// // user 1 \\
// let students = [providesStudent("01", "Hafiz Ahmed Ali Ansari", "hafizahmedaliansari123@gmail.com", "03121057411", "Orangi Town Karachi Gulshan e Zia"),

// // user 2 \\
// providesStudent("02", "Muhammad Asharif", "asharifkhan245@gmail.com", "03100000000", "Orangi Town Karachi Shah Faisal Chowk"),

// // // user 3 \\
// providesStudent("03", "Sajjad Hassan", "sajjadhassan20081989123@gmail.com", "03100000000", "Orangi Town Karachi Rehmat Chowk"),

// // user 4 \\
// providesStudent("04", "Muhammad Taha", "muhammadtaha@gmail.com", "03100000000",
//     "Orangi Town Karachi 14-C"),

//  // user 5 \\
//  providesStudent("05", "Muhammad Hussain", "muhammadhussain@gmail.com", "03100000000", "Orangi Town Karachi 14-C"),
// ]

// console.log(students);

// =============================== \\

// Example No : 05:~
// let students = [];
// function providesStudent() {
//     let std = {
//         id: prompt("Enter Your ID"),
//         name: prompt("Enter Your name"),
//         email: prompt("Enter Your email"),
//         phone: prompt("Enter Your phone"),
//         address: prompt("Enter Your address"),
//     };
//     students.push(std);
//     console.log(students);
// }

// =============================== \\

// Save In Local Storage \\

// let prevStudents = localStorage.getItem("students"); // get from LocalStorage
// let students = prevStudents ? JSON.parse(prevStudents) : [];
// function provideStudent() {
//   let std = {
//     name: prompt("Enter Name"),
//     rollNo: +prompt("Enter Roll no"),
//     teacher: prompt("Enter Teachers Name"),
//     className: prompt("Enter Your Class"),
//   };
//   students.push(std);
//   console.log(students);
//   let stringify = JSON.stringify(students); // Convert it to String
//   localStorage.setItem("students", stringify); // Save it to LocalStorage
// }

// // localStorage.setItem("name", "Ishaq");
