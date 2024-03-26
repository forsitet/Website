const surename = document.getElementById('surename');
const namee = document.getElementById('name');
const login = document.getElementById('login');
const email = document.getElementById('mail');
const password = document.getElementById('password');
const passwordVer = document.getElementById('passwordVerification');


document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault();
    //Валидация
    const surenameV = surename.value.trim();
    const nameV = namee.value.trim();
    const loginV = login.value.trim();
    const emailV = email.value.trim();
    const passwordV = password.value.trim();
    const passwordVerV = passwordVer.value.trim();

    //Валидация фамилии
    if (surenameV === '') {
        errorEvent(surename, 'Вы не ввели фамилию.');
        return;
    }
    else if (!(surenameV.length >= 2) || !(surenameV.length <= 10)) {
        errorEvent(surename, 'Фамилия должнa содержать не менее 2 символов и не более 10 символов.');
        return;
    } 
    else if (!((/^[A-ZА-Я][a-zа-яё]*$/).test(surenameV))) {
        errorEvent(surename, 'Фамилия должнa содержать только строчные буквы и одну заглавную букву. Например, "Иванов".');
        return;
    }
    else{
        successEvent(surename);
    }

    //Валидация имени
    if (nameV === ''){
        errorEvent(namee, 'Вы не ввели имя.');
        return;
    }
    else if (!(nameV.length >= 2) || !(nameV.length <= 10)) {
        errorEvent(namee, 'Имя должно содержать не менее 2 символов и не более 10 символов.');
        return;
    } 
    else if (!((/^[A-ZА-Я][a-zа-яё]*$/).test(nameV))) {
        errorEvent(namee, 'Имя должно содержать только строчные буквы и одную букву. Например, "Иван".');
        return;
    }
    else{
        successEvent(namee);
    }

    //Валидация логина
    if (loginV === ''){
        errorEvent(login, 'Вы не ввели логин.');
        return;
    }
    else if (!((/^[A-Za-z0-9_]+$/).test(loginV))) {
        errorEvent(login, 'Логин должнен содержать буквы, цифры и _ . Например, "d_e_v_e_l_o_p_e_r123455".');
        return;
    }
    else{
        successEvent(login);
    }

    //Валидация почты
    if (emailV === ''){
        errorEvent(email, 'Вы не ввели почту.');
        return;
    }
    else if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[!<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[1-9]{1,3}\.[1-9]{1,3}\.[1-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailV))) {
        errorEvent(email, 'Неверный формат почты. Почта должна иметь вид: 123abС@mail.ru');
        return;
    }
    else{
        successEvent(email);
    }


    //Пароль
    if (passwordV === ''){
        errorEvent(password, 'Вы не ввели пароль.');
        return;
    }
    else if (!(passwordV.length >= 12)) {
        errorEvent(password, 'Пароль должен содержать не менее 12 символов.');
        return;
    }
    else {
        successEvent(password);
    }
    
    if (passwordVerV === ''){
        errorEvent(passwordVer, 'Вы не ввели подтверждение пароля.');
        return;
    }
    else if (!(passwordVerV === passwordV)){
        errorEvent(passwordVer, 'Пароли не совпадают.');
        return;
    }
    else{
        successEvent(passwordVer);
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