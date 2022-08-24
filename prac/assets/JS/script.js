
// let stu1 = {
//     name: "Togrul",
//     surname: "Quluzade",
//     age: 23,
//     phoneNumbers: [0503345094, 0706184519],
//     groups: [{
//         name: "P130",
//         room: "Sirius",
//         teachers: [{
//             name: "Cavid",
//             age: 28
//         },
//         {
//             name: "Rovshen",
//             age: 22
//         }]

//     },

//     {
//         name: "DL210",
//         room: "Pluton",
//         teachers: ["Cavid", "Gulnar"]
//     }
//     ]
// }

// for (const item of stu1.groups) {
//    if(item.room == "Sirius"){
//     console.log(item.name)
//    }
// }

// let teacherFullData = ()=>{

//     for (const item of stu1.groups) {
//         if (item.name == "P130") {
//             for (const teacher of item.teachers) {
//                 if(teacher.name == "Cavid"){
//                     return `${teacher.name} - ${teacher.age}`;
//                 }
//             }
//         }
//     }
// }

// console.log(teacherFullData())

// function setGroupTeacher(groupName){

//     return `${teacherFullData()} ${groupName}`
// }

// let setGroupTeacher = (groupName) =>{

//     let teacherData = teacherFullData();

//     return `${teacherData} ${groupName}`

// }

// let group = "P120"

// console.log(setGroupTeacher(group))

// for (const item of stu1.phoneNumbers) {
//     if(item == 0503345094){
//         console.log(stu1.name)
//     }
// }

// let isExist = stu1.phoneNumbers.includes(0706184519);

// if(isExist){
//     console.log("var")
// }else{
//     console.log("Yoxdur")
// }

// let stu2 = {
//     name: "Seid",
//     surname: "Nuraliyev",
//     age: 33
// }

// let stu3 = {
//     name: "Mirsamir",
//     surname: "Ezimzade",
//     age: 22
// }

// let students = [stu1,stu2,stu3];

// for (const item of students) {
//     console.log(item["name"]);
//     console.log(item.name + " " + item.surname);
// }

// let stu1 = {
//     id:1,
//     name:"Togrul",
//     surname:"Quluzade"
// }

// let stu2 = {
//     id:2,
//     name:"Ramil",
//     surname:"Binnetov"
// }

// let stu3 = {
//     id:3,
//     name:"Emil",
//     surname:"Abdullayev"
// }

// let stu4 = {
//     id:4,
//     name:"Seadet",
//     surname:"Murseliyeva"
// }

// let group = {
//     name: "P130",
//     capacity: 5,
//     students: [],
//     addStudent: function (stu) {

//         //find method alternative
//         // let student = this.students.filter(m=>m.id == stu.id);

//         // if(student.length != 0){
//         //     console.log("Already exist");
//         //     return;
//         // }

//         let student = this.students.find(m=>m.id == stu.id);

//         if(student != undefined){
//             console.log("Already exist");
//             return;
//         }

//         if (this.students.length != this.capacity) {
//             this.students.push(stu);
//             return;
//         }
//         console.log("Qrupda bosh yer yoxdur")

//     }
// }

// group.addStudent(stu1)
// group.addStudent(stu2)
// group.addStudent(stu3)
// group.addStudent(stu4)
// group.addStudent(stu4)

// function Book(name,author){
//     this.name = name;
//     this.author = author;

//     function getFullData(){
//         console.log(name + "-" +author)
//     }

// }

// let book = new Book("Xosrov","Nizami");

// Book.prototype.pageCount = 55;

// Book.prototype.getAuthor = function (){
//     console.log(author)
// }

// console.log(book)

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;

//     }

//     getFullName() {
//         console.log(this.name + " " + this.surname)
//     }
// }

// class Employee extends Person {
// }

// let employee = new Employee("Cavidan", "Qedirli")

// employee.getFullName()

// console.log(employee.surname)

// let group = {
//     name: "P130",
//     capacity: 5,
//     students: [],
//     addString: function (stu) {
//         if (this.students.length != this.capacity) {
//             this.students.push(stu.length);
//             return;
//         }
//         console.log(stu.length)

//     }
// }

// group.addString("Orxan");
// group.addString("Togrul");
// group.addString("Seid");
// group.addString("Cavidan");
// group.addString("Eshqin");
// group.addString("Eshqissdn");

// console.log(group.students);
