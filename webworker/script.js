//web workers in javascript, lets see with an example where our worker.js file will authenticate the user (if your Password is Taskforce141)
try{
if (window.Worker) {
  console.log("The browser supports web worker!! let's begin with our work");
  let myWorker = new Worker("worker.js");
  let user = prompt("Please Enter Your Name","");
  let pwd =  prompt(` please enter your password ${user}`,"");; 
  let c ="";
  for (let i = 0; i < pwd.length; i++) {
    c = c + String.fromCharCode((pwd.charCodeAt(i)+3));
  }

  let message = {  data:{data1 :`${user}`, data2 :`${c}` } };

  myWorker.postMessage(message);

  myWorker.onmessage = function(e){
    console.log(e.data);
  };

} else {
  console.log("The browser does not support web worker");
}
}
catch(Error){
    console.log("Error is "+Error);
}