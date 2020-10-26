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

