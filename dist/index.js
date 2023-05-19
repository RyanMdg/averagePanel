"use strict";
function get() {
  let add = [
    parseInt(document.getElementById("data-1-rec").innerHTML),
    parseInt(document.getElementById("data-2-rec").innerHTML),
    parseInt(document.getElementById("data-3-rec").innerHTML),
    parseInt(document.getElementById("data-4-rec").innerHTML),
    parseInt(document.getElementById("data-5-rec").innerHTML),
    parseInt(document.getElementById("data-6-rec").innerHTML),
    parseInt(document.getElementById("data-7-rec").innerHTML),
    parseInt(document.getElementById("data-8-rec").innerHTML),
  ];

  for (let i = 0; i < add.length; i++) {
    // if (add[i] >= 75) {
    //   document.getElementById("remarks").innerHTML = "Passed ";
    // } else if (add[i] >= 69 && average <= 74) {
    //   document.getElementById("remarks").innerHTML = "Remedial ";
    // } else if (add[i] <= 68 && average >= 50) {
    //   document.getElementById("remarks").innerHTML = "Failed ";
    // } else if (add[i] <= 50) {
    //   document.getElementById("remarks").innerHTML = "Invalid ";
    // }
    console.log(add[i]);
  }
}
get();
