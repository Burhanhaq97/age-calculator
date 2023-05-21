const userDate = document.querySelector(".age-input input");
const btn = document.querySelector(".age-input span");
const ageOutput = document.querySelectorAll(".age-output ul li span");
const errorMsg = document.querySelector(".error-msg");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

const calculateAge = () => {
  let uDate = new Date();
  let hour = uDate.getHours();
  let minute = uDate.getMinutes();
  let second = uDate.getSeconds();

  let userVal = userDate.value;
  if (userVal !== "") {
    let arr = userVal.split("-");
    let [userYear, userMonth, userDay] = arr;

    if (userYear <= year) {
      let userTotalDay = 30 + day - Number(userDay);
      let userTotalMonth = 12 + month - Number(userMonth);
      let userTotalYear = year - 1 - Number(userYear);

      if (userTotalDay >= 30) {
        userTotalDay = 0 + (userTotalDay % 30);
        userTotalMonth = userTotalMonth + 1;
      }

      if (userTotalMonth >= 12) {
        userTotalMonth = userTotalMonth % 12;
        userTotalYear = userTotalYear + 1;
      }

      if (userTotalYear < 10) {
        userTotalYear = "0" + userTotalYear;
      }
      if (userTotalMonth < 10) {
        userTotalMonth = "0" + userTotalMonth;
      }
      if (userTotalDay < 10) {
        userTotalDay = "0" + userTotalDay;
      }
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (second < 10) {
        second = "0" + second;
      }

      ageOutput[0].innerHTML = userTotalYear;
      ageOutput[1].innerHTML = userTotalMonth;
      ageOutput[2].innerHTML = userTotalDay;
      ageOutput[3].innerHTML = hour;
      ageOutput[4].innerHTML = minute;
      ageOutput[5].innerHTML = second;

      setInterval(calculateAge, 1000);
    } else {
      errorMsg.style = `display:flex`;
      setTimeout(() => {
        errorMsg.style = `display:none`;
      }, 3000);
    }
  } else {
    errorMsg.style = `display:flex`;
    setTimeout(() => {
      errorMsg.style = `display:none`;
    }, 3000);
  }
};

btn.addEventListener("click", calculateAge);
