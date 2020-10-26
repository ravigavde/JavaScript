//working of js at the backend
//js engine ---> "chrome v8" "firefox -- spider monkey" "edge -- chakra"  'full code gen---> js code to machine code' "crankshaft---->efficiency("")"
// crankshaft ---> inlining (the func calls in the hot sections are replaced by the actual code from the func) hidden classse(the object can have property added dynamically so keeping tracks of all property )

//main thred(fetch,give to  compiler & execute code) compiler thread(code gen and crankshaft ) profiler thread(moniters code and finds out hot sections) gc thread(memory management) memory heap() ,  call stack (read and executed)

// let aa = [1,2,3,4,5,6,7,8,10];
// aa.forEach(function(element){
//     console.log(element);
// });

// for(let a = 0; a<aa.length;a++)
// {
//     console.log(aa[a]);
// }

// let person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// let x;
// for (x in person) {
//     console.log("the " + x + " is "+person[x]  );
// }

// var cars = ['BMW', 'Volvo', 'Mini'];
// var x;

// for (x of cars) {
//     document.write(x + "<br >");
// }

//objects
// let person1 = {
//     name:"ravi"
//     }
// };

// let person2 = {
//     name:"ravi"
// };

// person1 = {
//     class:"NEw Developer"
// }

// for(keys in person1)
// {
//     console.log("keys is "+keys+" and the value is "+ person1[keys]);
// }
// console.log(person1);

// function FunctionAsConstrucutor(){
//   let name = "ravi";
//   let role = "developer";
//   console.log("name and role are"+name+" "+ role);
// }

// let a =  new FunctionAsConstrucutor();
// console.log(a);

// //math

// // Min max
// // round up
// // pi

// // date

// let today = new Date(2019,1);
// console.log(today);

// document.write(today)

// let person = {name:"Ravi", roll : 12 , class : "Msc cA"};
// console.log(person.name);

// let a = [1,2,3,4,5,6,6,7];

// a.forEach(function(element) {
//         console.log(element);

//     });

//     for(key in person)
//     {
//             console.log("Key is "+key +" value is "+person[key]);
// }

//Exception handling

// let a = 18;

// try {
//    throw new Error("This ios is not optimally constructed")

// } catch (error) {
//     console.log("The name of the error is :-",error.name);
//     console.log("The message of the error is :-",error.message);

// }
// finally{
//     console.log("The finally block will get executed whether error occurs or not ");
// }

// stric mode --- cannot use unnamed variables , cannot use same parameters names , convert mistakes into errors , cannot delete variables , cannot delete  undeletable properties of object ,  no refernce for window object

// newFunction();

// function newFunction() {
//   //  "use strict" ;
//   var x = 7;
//   let obj = { name: "abcd" };
//   with (obj) {
//     x;
//   }
// }
// for (keys in console){
//     console.log(keys);
// }
// console.time();
// for (let index = 0; index < 10000; index++) {
//     console.log(index);

// }
// console.timeEnd();

// JSON
// let a = `[
//     {
//         "name": "Event corp",
//         "property": "Tis is new eevent",
//     },
//     {
//         "name": "Event corp",
//         "property": "Tis is new eevent",
//     }
// ]`
// console.log(JSON.parse(a))


// let user = {
//     name: "John",
//     age: 30,
  
//     toString() {
//       return `{name: "${this.name}", age: ${this.age}}`;
//     }
//   };

//   console.log(user);


//   let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };


//   console.log(JSON.stringify(student));



// pass by value
// let a = {num:2};

// let change = (val) => {
//     val = {} ;
// }
// console.log(a);


/*
let data = "this data is a new DaTa for regular expression data";

let reg = /data/;

reg = /data/gi; //g--- global for searching entire string, i--- case insensitive

console.log(reg.source);

//1) finding string and flags

let ans = reg.exec(data);
console.log(ans);
ans = reg.exec(data);
console.log(ans);
ans = reg.exec(data);
console.log(ans);

//2) test function
let data2 = "this is  a New data type for the new class of data types";
let reg2 = /ata/;

let result = reg2.test(data2);
console.log(result);

// 3) match() gives the array of the matched items and if not found it will return the null
let data3 = "This is a new set for the new data types";
let reg3 = /new/g;

console.log(data3.match(reg3));

// 4) search() if found it will return the index and if not the function will return the -1 value

let data4 =
  "searching the new data type in the complex data stream is very difficult";
let reg4 = /searching/;
console.log(data4.search(reg4));

// 5) replace() return new replaced string with all the replacements

let data5 =
  " this is a new repalcemnts for the new type of the programming project, that is to be done on new system";

let reg5 = /new/g;

console.log(data5.replace(reg5, "--- replaced string ---"));


// meta characters

// ^abc --starts with abc,,    abc$ ends with abc
let data6 = "this data wil give idea about new data";
// let reg6 = /i.ea/g;  // the dot[.] states that to match only one char after i

let reg6 = /i*dea/g;  // the Star[*] states that to match from 0 to many  char after i


if (reg6.test(data6)) {
  console.log(`the string ${data6} matches with the expression ${reg6} `);
} else {
  console.log(`the string ${data6} does not matches with the expression ${reg6} `);
}
let data7  = "this is an example of optional characters"
let reg7 = /exda?mple/;
console.log(reg7.test(data7));


// email validator

let  email = prompt("Enter your email address");

let reg_email = /^[a-z A-Z 0-9 _ -]+@[a-zA-Z]+\.com$/g;

if(reg_email.test(email)){
    document.write("correct email");
} else{
    document.write("incorrect email");
}

quantifiers 
let data8 = "this is a neew data type for the neew evaluation for the neew position as a neew analsyt required ";
const reg8 = /ne{2}w/g;
console.log(reg8.test(data8));

Modifiers, Brackets
*/

// shorthand character
// \w ---- word character -  _ or alpahbet or numebrss
// \w+ --- one or more 
// \W  -- non word character 
// \d -- digit 
// \D ---non digit
// \s  --- white space character
// \S

//assertions 
//regex = /h(?=y)/  if we want t osearch for h and we want y to be the next letter
//  let data = "this is a mew data type ";
