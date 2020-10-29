this.onmessage = function (e) {
  if (e.data.data != undefined) {
    let f1 = false,
      f2 = false;
    const n2 = e.data.data.data1;
    if (n2.localeCompare("mactavish") == 0) f2 = true;
    const n1 = e.data.data.data2;
    if (n1.localeCompare("DEFG") == 0) f1 = true;

    if (f1 == true && f2 == true) {
      console.log(n2, " Authorised for 007 proceed for rendezvou point");
    } else{
        console.log("You are not authorised");
    }

    this.postMessage({ result: e.data.data.data1 + " This from worker" });

    // this.postMessage({result:`Welcome ${e.data.data.data1} !!! good luck and have a good hunting` });
  } else {
    this.postMessage({ result: "DIDn't work" });
    // console.log("not working");
  }
};
