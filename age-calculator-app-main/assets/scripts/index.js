let flag = false;

function toggleAlert (tagElement, errorString, message, isBlock) {
    const errorMessage = tagElement.parentElement.querySelector(`.s-${errorString}-error`);
    const label = tagElement.parentElement.querySelector('label');
    const input = tagElement.parentElement.querySelector('input');
    // const isBlock = errorMessage.style.display === 'block' ? true : false;
    if (isBlock) {
        label.style.color = "var(--light-red)";
        input.style.border = "1px solid var(--light-red)";
        // emptyErrorMessage.style.display = 'block';
        errorMessage.innerText = message;
        errorMessage.style.display = 'block';
        flag = false;
    } else {
        errorMessage.style.display = 'none';
        label.style.color = "";
        input.style.border = "";
    }
}

//Collecting empty fields
function errorEmpty () {
    let emptyArray = [];
    flag = true;
    const inputDay = document.querySelector('#day');
    const inputMonth = document.querySelector('#month');
    const inputYear = document.querySelector('#year');

    // function addError (tagElement, errorString) {
    //     const label = tagElement.parentElement.querySelector('label');
    //     const input = tagElement.parentElement.querySelector('input');
    //     const emptyErrorMessage = tagElement.parentElement.querySelector(`.s-${errorString}-error`);

    //     label.style.color = "var(--light-red)";
    //     input.style.border = "1px solid var(--light-red)";
    //     emptyErrorMessage.style.display = 'block';
    //     emptyErrorMessage.innerText = 'This field is required';
    //     flag = false;

    //     // input.style.caretColor = "var(--light-red)";
    //     // input.style.color = "var(--light-red)";
    // }

    // function removeError (tagElement, errorString) {
    //     const label = tagElement.parentElement.querySelector('label');
    //     const input = tagElement.parentElement.querySelector('input');
    //     const emptyErrorMessage = tagElement.parentElement.querySelector(`.s-${errorString}-error`);

    //     label.style.color = "";
    //     input.style.border = "";
    //     emptyErrorMessage.style.display = 'none';
    // }

    if (inputDay.value === '') {
        emptyArray.push('dayempty');
        addError(inputDay, 'day');
    } else {
        removeError(inputDay, 'day');
    }
    
    if (inputMonth.value === '') {
        emptyArray.push('monthempty');
        addError(inputMonth, 'month');
    } else {
        removeError(inputMonth, 'month');
    }
    
    if (inputYear.value === '') {
        emptyArray.push('yearempty');
        addError(inputYear, 'year');
    } else {
        removeError(inputYear, 'year');
    }

    emptyArray.forEach((emptyField) => {
        console.log(emptyField);
    })
}

function errorInvalid () {
    const inputDay = document.querySelector('#day');
    const inputMonth = document.querySelector('#month');
    const inputYear = document.querySelector('#year');

    // function addError (tagElement, errorString) {
    //     const mustBeValidDay = tagElement.parentElement.querySelector(`.s-${errorString}-error`);
    //     console.log(mustBeValidDay);
    //     mustBeValidDay.style.display = 'block';
    //     mustBeValidDay.innerText = 'Must be a valid day';
    // }

    // function removeError (tagElement, errorString) {
    //     const mustBeValidDay = tagElement.parentElement.querySelector(`.s-${errorString}-error`);
    //     mustBeValidDay.style = 'none';
    //     mustBeValidDay.innerText = '';
    // }

    inputDay.addEventListener('input', (e) => {
        // console.log(e.target);
        const tagElement = e.target; //HTML tag
        const value = e.target.value; //it's value
        if (value === '') {
            // removeError(inputDay, 'day');
            toggleAlert(tagElement, 'day', '', false);
        } else if (value < 1 || value > 31) {
            // addError(inputDay, 'day');
            toggleAlert(tagElement, 'day', 'Must be a valid day', true);
        } else {
            // removeError(inputDay, 'day');
            toggleAlert(tagElement, 'day', '', false);
        }
    });

    inputMonth.addEventListener('input', (e) => {
        // console.log(e.target);
        const tagElement = e.target; //HTML tag
        const value = e.target.value; //it's value
        if (value === '') {
            // removeError(inputDay, 'day');
            toggleAlert(tagElement, 'month', '', false);
        } else if (value < 1 || value > 12) {
            // addError(inputDay, 'day');
            toggleAlert(tagElement, 'month', 'Must be a valid month', true);
        } else {
            // removeError(inputDay, 'day');
            toggleAlert(tagElement, 'month', '', false);
        }
    });

    inputYear.addEventListener('input', (e) => {
        // console.log(e.target);
        const tagElement = e.target; //HTML tag
        const value = e.target.value; //it's value
        const currentDate = new Date();
        const lastValidYear = (currentDate.getFullYear() - 1);

        if (value === '') {
            // removeError(inputDay, 'day');
            toggleAlert(tagElement, 'year', '', false);
        } else if (value < 1920) {
            toggleAlert(tagElement, 'year', 'Must be up to 1920', true);
        } else if (value > lastValidYear) {
            // addError(inputDay, 'day');
            toggleAlert(tagElement, 'year', 'Must be in the past', true);
        } else {
            // removeError(inputDay, 'day');
            toggleAlert(tagElement, 'year', '', false);
        }
    });
}

function errorWholeForm () {
    const calendario = {
        jan: 31,
        fev: 29,
        march: 31,
        april: 30,
        may: 31,
        jun: 30,
        july: 31,
        agust: 31,
        sep: 30,
        oct: 31,
        nov: 30,
        dec: 31
    }
}

errorInvalid();

//form submitting
document.querySelector('.m-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (flag) {
        console.log("submit done!");
        flag = false;
    } else {
        errorEmpty();
    }
});