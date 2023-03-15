function start() {
  console.log("Before promise");

//   const p = new Promise((resolve, reject) => { //Може така но най-често се чейнват
//     setTimeout(reject, 2000, "Intentional error");
//   });
//   p.then((result) => {
//     console.log(result);
//   });
//   p.catch((error) => {
//     console.log("Encountered error: " + error);
//   });

      new Promise((resolve, reject) => {            //Така се записват най-често с чейн
        setTimeout(reject, 2000, "Intentional error");
      }).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log("Encountered error: " + error);
      });

  console.log("After promise");
}
start();
