"use strict";

function modalFunction() {
  const modal = document.getElementById("hidden");
  if (modal.style.display == "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

function closeModal() {
  const modal = document.getElementById("hidden");
  if (modal.style.display == "block") {
    modal.style.display = "none";
  }
}

function getData() {
  const data1 = document.getElementById("data-1").value;
  const data2 = document.getElementById("data-2").value;
  const data3 = document.getElementById("data-3").value;
  const data4 = document.getElementById("data-4").value;
  const data5 = document.getElementById("data-5").value;
  const data6 = document.getElementById("data-6").value;
  const data7 = document.getElementById("data-7").value;
  const data8 = document.getElementById("data-8").value;

  document.getElementById("data-1-rec").innerHTML = data1;
  document.getElementById("data-2-rec").innerHTML = data2;
  document.getElementById("data-3-rec").innerHTML = data3;
  document.getElementById("data-4-rec").innerHTML = data4;
  document.getElementById("data-5-rec").innerHTML = data5;
  document.getElementById("data-6-rec").innerHTML = data6;
  document.getElementById("data-7-rec").innerHTML = data7;
  document.getElementById("data-8-rec").innerHTML = data8;

  alert("PLEASE CHECK YOU GWA");
  acceptDatas();
}

function getAverage() {
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
  let remarks = document.querySelectorAll(".remarks");
  let sum = 0;
  for (let i = 0; i < add.length; i++) {
    sum += add[i];
  }
  let average = (document.getElementById("result").innerHTML = Math.round(
    sum / add.length
  ));

  //*CONDITON IF PASSED OR FAILED

  if (average >= 75) {
    document.getElementById("passOrfail").innerHTML = "Passed";
    document.getElementById("passOrfail").style.color = "green";
  } else if (average >= 69 && average <= 74) {
    document.getElementById("passOrfail").innerHTML = "Remedial";
    document.getElementById("passOrfail").style.color = "yellow";
  } else if (average <= 68 && average >= 50) {
    document.getElementById("passOrfail").innerHTML = "Failed";
    document.getElementById("passOrfail").style.color = "orange";
  } else if (average <= 50) {
    document.getElementById("passOrfail").innerHTML = "Invalid ";
    document.getElementById("passOrfail").style.color = "red";
  }

  for (let i = 0; i < add.length; i++) {
    for (let j = 0; j < remarks.length; j++) {
      if (add[i] >= 75) {
        remarks[i].innerHTML = "Passed ";
        remarks[i].style.color = "green";
      } else if (add[i] >= 69 && add[i] <= 74) {
        remarks[i].innerHTML = "Remedial ";
        remarks[i].style.color = "yellow";
      } else if (add[i] <= 68 && add[i] >= 50) {
        remarks[i].innerHTML = "Failed ";
        remarks[i].style.color = "orange";
      } else if (add[i] <= 50) {
        remarks[i].innerHTML = "Invalid";
        remarks[i].style.color = "red";
      }
    }
  }
}

//* RESET CURRENT GRADE LIST

function reset() {
  const resetGrade = document.querySelectorAll(".reset");
  const resetGrade2 = document.querySelectorAll(".reset-2");
  for (let i = 0; i < resetGrade.length; i++) {
    resetGrade[i].value = "";
  }
  for (let i = 0; i < resetGrade2.length; i++) {
    resetGrade2[i].innerHTML = "-";
  }
}

//*LOCAL STORAGE
// *SIGN UP
function signUp(e) {
  event.preventDefault();
  const loginModal = document.querySelector(".loginModal");
  loginModal.classList.toggle("hide");
  let email = document.getElementById("semail").value;
  let password = document.getElementById("spassword").value;
  let studentNum = document.getElementById("studentNumber").value;
  let login = document.querySelector(".login");

  login.classList.toggle("loginhidden");

  let user = {
    email: email,
    password: password,
    studentNum: studentNum,
  };

  let json = JSON.stringify(user);
  localStorage.setItem(studentNum, json);
  console.log("user added successfully");
}

let nameplace = document.getElementById("namePlace");
let snplace = document.getElementById("snPlace");
// *LOGIN
function login(e) {
  event.preventDefault();
  let login = document.querySelector(".login");
  let studentNum = document.getElementById("lnumber").value;
  let password = document.getElementById("lpassword").value;
  let email = document.getElementById("semail").value;
  let dataInvalid = document.querySelector(".invalid");

  let user = localStorage.getItem(studentNum);
  let data = JSON.parse(user);
  // console.log(data);

  if (user == null) {
    console.log("wrong student number");
  } else if (studentNum == data.studentNum && password == data.password) {
    console.log("login successful");
    login.classList.toggle("loginhidden");
    nameplace.innerHTML = email;
    snplace.innerHTML = studentNum;
    alert("login successful!");
  } else {
    console.log("invalid student number or password!");
    dataInvalid.classList.remove("hide");
  }
}

// *LOGOUT
function logout() {
  const loginModal = document.querySelector(".loginModal");
  loginModal.classList.toggle("hide");
}

//*SUBJECT ADDITION

function addSubject() {
  event.preventDefault();
  const modals = document.querySelector(".hidesubcont");

  if (modals.style.display == "none") {
    modals.style.display = "block";
  } else {
    modals.style.display = "block";
  }

  const modal = document.querySelector(".hidemodalsub");
  if (modal.style.display == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "none";
  }
}

let addbtn = document.querySelector(".addbtn");
let modalAddSub = document.querySelector(".addsub");

addbtn.addEventListener("click", () => {
  modalAddSub.classList.toggle("try");
});

//* REMOVE SUBJECTS

function removeSubjectbtn() {
  let trash = document.querySelectorAll(".trash");

  for (let i = 0; i < trash.length; i++) {
    trash[i].classList.toggle("trash-hide");
  }
}
let deletePost = (e) => {
  e.parentElement.remove();
};

//* CRUD

let form = document.getElementById("form");
let teacherName = document.getElementById("TeacherName");
let lessonTopic = document.getElementById("lessonv");
let subs = document.getElementById("subjectv");
let post = document.getElementById("post");
let msg = document.getElementById("msg");

let teacher = {};
let lesson = {};
let subject = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
  hide();
});

let formValidation = () => {
  if (teacherName.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let acceptData = () => {
  teacher["text"] = teacherName.value;
  lesson["text"] = lessonTopic.value;
  subject["text"] = subs.value;
  console.log(teacher);
  console.log(lesson);
  console.log(subject);

  createPost();
};

let createPost = () => {
  post.innerHTML += `
  <div
        class="bg-[#212226] cont-bg text-white flex  flex-col flex-wrap p-5 gap-1 hover:-translate-y-2 shadow-lg  transition duration-500 hover:bg-[#3A3A40] rounded-md mb-9"
      >
      <ion-icon onClick="deletePost(this)" name="trash" class="relative left-52  text-4xl text-rose-700 cursor-pointer trash-hide trash "></ion-icon>
        <h4 class="text-2xl darks" id="lesson">${lesson.text}</h4>
        
        <span class="text-sm text-[rgb(162,181,192)] darks" id="teacher">${teacher.text}</span>
        <div class="grid grid-cols-2 gap-5">
          <p class="text-xs uppercase mt-14 me-10 darks" id="subject">
            <span class="text-6xl text-sky-500">.</span> ${subject.text}
          </p>
          <img src="/assets/9.jpg" class="rounded-lg mt-10 " alt="" />
        </div>

       
        <div class="grid grid-cols-1 gap-4">
          <input
            id="data"
            type="text"
            placeholder="Please Enter Your Grade"
            class="mt-5 p-1 input-hide  text-start rounded-md bg-[#374151] text-sm outline-none reset"
          />
        </div>
      </div>
      </div>
  `;
};

let hide = () => {
  let displayNone = document.querySelector(".addsub");
  displayNone.classList.add("try");
};

//*DARKMODE

let darkModeBtn = document.querySelector("#darkMode");
let containerSub = document.querySelectorAll(".cont-bg");
let darktext = document.querySelectorAll(".darks");
let outline = document.querySelectorAll(".outline");
let inputColor = document.querySelectorAll(".inputgrade");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  darkModeBtn.classList.toggle("darkbtn");

  for (let i = 0; i < inputColor.length; i++) {
    inputColor[i].classList.toggle("light-bg");
  }
  for (let i = 0; i < outline.length; i++) {
    outline[i].classList.toggle("borders");
  }

  for (let j = 0; j < containerSub.length; j++) {
    containerSub[j].classList.toggle("lighter");
    containerSub[j].classList.toggle("hover:bg-[#3A3A40]");
    containerSub[j].classList.toggle("hover:shadow-slate-700");
  }
  for (let i = 0; i < darktext.length; i++) {
    darktext[i].classList.toggle("darkss");
  }
});

//*RECIEVE NEW SUBJECT
