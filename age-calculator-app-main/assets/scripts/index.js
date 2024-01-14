document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1; // The getMonth() method returns values from 0 to 11
  const currentYear = currentDate.getFullYear();

  console.log("Current Date:", currentDay, currentMonth, currentYear);

  const inputDay = document.querySelector("#day");
  const inputMonth = document.querySelector("#month");
  const inputYear = document.querySelector("#year");

  //flags to validate the inputs for 'input' event type
  let dayCheck = false;
  let monthCheck = false;
  let yearCheck = false;
  let submitCheck = false;

  const emptyMessage = "This field is required";
  const dayMessage = "Must be a valid day";
  const monthMessage = "Must be a valid month";
  const initialYearMessage = "Must be up from 1920";
  const pastYearMessage = "Must be in the past";
  const validDateMessage = "Must be a valid date";

  function toggleAlert(tagElement, errorString, message, isBlock) {
    const errorMessage = tagElement.parentElement.querySelector(
      `.s-${errorString}-error`
    );
    const label = tagElement.parentElement.querySelector("label");
    const input = tagElement.parentElement.querySelector("input");
    // const isBlock = errorMessage.style.display === true ? 'block' : 'none';
    if (isBlock) {
      label.style.color = "var(--light-red)";
      input.style.border = "1px solid var(--light-red)";
      errorMessage.innerText = message;
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
      label.style.color = "";
      input.style.border = "";
    }
  }

  //Collecting invalid inputs
  function errorInvalidCheck() {
    inputDay.addEventListener("input", (e) => {
      const tagElement = e.target; //HTML tag
      const value = e.target.value; //its value
      dayCheck = false;
      if (value === "") {
        toggleAlert(tagElement, tagElement.id, emptyMessage, true);
      } else if (value < 1 || value > 31) {
        toggleAlert(tagElement, tagElement.id, dayMessage, true);
      } else {
        toggleAlert(tagElement, tagElement.id, "", false);
        dayCheck = true;
      }
    });

    inputMonth.addEventListener("input", (e) => {
      const tagElement = e.target;
      const value = e.target.value;
      monthCheck = false;

      if (value === "") {
        toggleAlert(tagElement, tagElement.id, emptyMessage, true);
      } else if (value < 1 || value > 12) {
        toggleAlert(tagElement, tagElement.id, monthMessage, true);
      } else {
        toggleAlert(tagElement, tagElement.id, "", false);
        monthCheck = true;
      }
    });

    inputYear.addEventListener("input", (e) => {
      const tagElement = e.target;
      const value = e.target.value;
      const lastValidYear = currentDate.getFullYear();
      yearCheck = false;

      if (value === "") {
        toggleAlert(tagElement, tagElement.id, emptyMessage, true);
      } else if (value < 1920) {
        toggleAlert(tagElement, tagElement.id, initialYearMessage, true);
      } else if (value > lastValidYear) {
        toggleAlert(tagElement, tagElement.id, pastYearMessage, true);
      } else {
        toggleAlert(tagElement, tagElement.id, "", false);
        yearCheck = true;
      }
    });
  }

  //Collecting empty fields
  function errorEmptyCheck() {
    if (inputDay.value === "") {
      toggleAlert(inputDay, inputDay.id, emptyMessage, true);
    }

    if (inputMonth.value === "") {
      toggleAlert(inputMonth, inputMonth.id, emptyMessage, true);
    }

    if (inputYear.value === "") {
      toggleAlert(inputYear, inputYear.id, emptyMessage, true);
    }
  }

  //Collecting inputs after submiting
  function errorWholeFormCheck() {
    const calendario = {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };

    //leapYearCheck
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    for (const month in calendario) {
      if (calendario.hasOwnProperty(month)) {
        if (month == 2) {
          calendario[month] = isLeapYear(inputYear.value) ? 29 : 28;
        }
      }
    }

    //If the user type zeros at left, this trick will remove them to help the condition statement
    const monthWithoutZero = String(Number(inputMonth.value));

    for (const month in calendario) {
      if (calendario.hasOwnProperty(month)) {
        if (month === monthWithoutZero) {
          const days = calendario[month];
          if (inputDay.value > days || inputDay.value < 1) {
            toggleAlert(inputDay, inputDay.id, validDateMessage, true);
            toggleAlert(inputMonth, inputMonth.id, "", true);
            toggleAlert(inputYear, inputYear.id, "", true);
            submitCheck = false;
          } else {
            toggleAlert(inputDay, inputDay.id, "", false);
            toggleAlert(inputMonth, inputMonth.id, "", false);
            toggleAlert(inputYear, inputYear.id, "", false);
            submitCheck = true;
          }
        }
      }
    }
  }

  function calculatingAge() {
    let spanYears = document.querySelector("#spanyears");
    let spanMonths = document.querySelector("#spanmonths");
    let spanDays = document.querySelector("#spandays");

    let inputD = parseInt(inputDay.value);
    let inputM = parseInt(inputMonth.value);
    let inputY = parseInt(inputYear.value);

    spanYears.textContent = "- -";
    spanMonths.textContent = "- -";
    spanDays.textContent = "- -";

    // letter-spacing will be changed to -1px from JavaScript because the word 'months' breaks down at 375px
    function letterSpacingChange(span) {
      span.style.letterSpacing = "-0.0625rem";
    }

    //used in case animation won't work
    function textContentShow(day, month, year) {
      spanDays.textContent = day;
      letterSpacingChange(spanDays);
      spanMonths.textContent = month;
      letterSpacingChange(spanMonths);
      spanYears.textContent = year;
      letterSpacingChange(spanYears);
    }

    function remainingMonths(birthMonth) {
      let monthsRemaining = currentMonth - birthMonth;
      if (monthsRemaining <= 0) {
        monthsRemaining += 12;
      }
      return monthsRemaining;
    }

    //To-Do: improve this code
    function remainingDays() {
      if (currentDay === inputD) {
        inputD = 0;
      } else if (currentDay > inputD) {
        inputD = currentDay - inputD;
      } else if (currentDay < inputD) {
        inputM -= 1;
        const temp = 31 - inputD; //calculation formula ((31 - (day entry > current day)) + current day)
        inputD = temp + currentDay;
      }
    }

    if (currentMonth === inputM) {
      //To-Do: improve this code
      if (currentDay === inputD) {
        inputY = currentYear - inputY;
        inputM = 12; //Freud will tell us the truth
        inputD = 0;
      } else if (currentDay > inputD) {
        inputY = currentYear - inputY;
        inputM = 0;
        inputD = currentDay - inputD;
      } else if (currentDay < inputD) {
        inputY = currentYear - inputY - 1;
        inputM = 11;
        const temp = 31 - inputD; //calculation formula ((31 - (day entry > current day)) + current day)
        inputD = temp + currentDay;
      }
    } else if (currentMonth > inputM) {
      inputY = currentYear - inputY;
      inputM = remainingMonths(inputM);
      remainingDays();
    } else if (currentMonth < inputM) {
      inputY = currentYear - inputY - 1;
      inputM = remainingMonths(inputM);
      remainingDays();
    }

    // textContentShow(inputD, inputM, inputY);

    letterSpacingChange(spanDays);
    letterSpacingChange(spanMonths);
    letterSpacingChange(spanYears);

    animation(inputD, spanDays);
    animation(inputM, spanMonths);
    animation(inputY, spanYears);
  }

  function animation(targetNumber, span) {
    if (targetNumber === 0) {
      span.textContent = 0;
    } else {
      const threeNumbersCutDay = targetNumber - 3;
      let currentNumber = 0;
      let animationInterval = 100;
      let intervalId;

      function updateCounter() {
        if (currentNumber < targetNumber) {
          currentNumber += 1;
          span.textContent = currentNumber.toString(); //<span> tag receives the value
          if (currentNumber >= threeNumbersCutDay && animationInterval) {
            animationInterval = 500;
            clearInterval(intervalId);
            intervalId = setInterval(updateCounter, animationInterval);
          }
        }
      }
      intervalId = setInterval(updateCounter, animationInterval);
    }
  }

  //real-time assessment
  errorInvalidCheck();

  //form submitting
  document.querySelector(".m-form").addEventListener("submit", (event) => {
    event.preventDefault();

    //check the inputs after clicking submit
    if (dayCheck === true && monthCheck === true && yearCheck === true) {
      errorWholeFormCheck();
      if (submitCheck) {
        calculatingAge();
      }
    } else {
      if (!dayCheck) {
        toggleAlert(inputDay, inputDay.id, dayMessage, true);
      } else {
        toggleAlert(inputDay, inputDay.id, "", false);
      }

      if (!monthCheck) {
        toggleAlert(inputMonth, inputMonth.id, monthMessage, true);
      } else {
        toggleAlert(inputMonth, inputMonth.id, "", false);
      }

      if (!yearCheck) {
        // const lastValidYear = currentDate.getFullYear() - 1;
        const lastValidYear = currentDate.getFullYear();
        if (inputYear.value === "") {
          toggleAlert(inputYear, inputYear.id, emptyMessage, true);
        } else if (inputYear.value < 1920) {
          toggleAlert(inputYear, inputYear.id, initialYearMessage, true);
        } else if (inputYear.value > lastValidYear) {
          toggleAlert(inputYear, inputYear.id, pastYearMessage, true);
        } else {
          toggleAlert(inputYear, inputYear.id, "", false);
        }
      } else {
        toggleAlert(inputYear, inputYear.id, "", false);
      }
    }

    //collecting empty fields mostly when the user clicks the button
    errorEmptyCheck();
  });
});
