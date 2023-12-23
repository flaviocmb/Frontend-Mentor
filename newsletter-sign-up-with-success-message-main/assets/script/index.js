const buttonSubmit = document.querySelector('.m-principal__button');
const buttonDismiss = document.querySelector('.m-success__button');
const inputEmail = document.getElementById('email');
const label = document.querySelector('.m-principal__label');
const mainWindow = document.querySelector('.m-principal');
const successWindow = document.querySelector('.m-success');
const header = document.querySelector('.l-header');
const validEmail = document.getElementById('valid-email');

function isEmail(email) {
    return /^[A-Za-z0-9._%+-]{3,}@[a-z0-9-]{2,}\.[a-z]{2,}(?:\.[A-Za-z]{2})?$/.test(
        email
    );
}

function validarEmail() {
    const emailValue = inputEmail.value.trim();

    if (emailValue === "") {
        label.classList.add('s-email-required');
        inputEmail.classList.add('s-email-input-required');
    } else if (!isEmail(emailValue)) {
        label.classList.add('s-email-required');
        inputEmail.classList.add('s-email-input-required');
    } else {
        label.classList.remove('s-email-required');
        inputEmail.classList.remove('s-email-input-required');

        //Jimi Hendrix
        inputEmail.style.backgroundColor = '#5df59c34';
        inputEmail.style.color = '#72AA89';
        inputEmail.style.border = '1px solid #72AA89';
        
        setTimeout(() => {
            validEmail.innerText = emailValue;
            inputEmail.value = '';
            header.style.display = 'none';
            mainWindow.style.display = 'none';
            successWindow.style.display = 'flex';
            // successWindow.style.display = successWindow.style.display === 'none' ? 'block' : 'flex';
        }, 1000);
    }
}

function dismissMessage() {
    inputEmail.removeAttribute('style');
    successWindow.style.display = 'none';
    header.style.display = header.style.display === 'block' ? 'none' : ''; //responsiveness requires that
    mainWindow.style.display = 'block';
}

buttonSubmit.addEventListener('click', () => {
    validarEmail();
})

buttonDismiss.addEventListener('click', () => {
    dismissMessage();
})