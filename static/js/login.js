const email = document.getElementById('mail');
const password = document.getElementById('password');




document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailV = email.value.trim();
    const passwordV = password.value.trim();

    //Валидация почты
    if (emailV === ''){
        errorEvent(email, 'Вы не ввели почту');
        return;
    }
    else if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[!<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[1-9]{1,3}\.[1-9]{1,3}\.[1-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailV))) {
        errorEvent(email, 'Неверный формат почты. (Должно содержать @ и только английские буквы)');
    }
    else{
        successEvent(email);
    }

    if (passwordV === ''){
        errorEvent(password, 'Вы не ввели пароль');
    }
    else{
        successEvent(password);
    }

    
    this.submit();
});

const errorEvent = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}


const successEvent = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}