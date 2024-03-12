document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var surename = document.getElementById('surename').value;
    var name = document.getElementById('name').value;
    var login = document.getElementById('login').value;
    var email = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    var passwordVerification = document.getElementById('passwordVerification')

    //Валидация

    //Валидация фамилии
    if (!(surename.length >= 2) || !(surename.length <= 10)) {
        alert('Фамилия должнa содержать не менее 2 символов и не более 10 символов.');
        return;
    } 
    if (!((/^[A-ZА-Я][a-zа-яё]*$/).test(surename))) {
        alert('Фамилия должнa содержать только строчные буквы и одну заглавную букву.\nНапример, "Иванов".');
        return;
    }

    //Валидация имени
    if (!(name.length >= 2) || !(name.length <= 10)) {
        alert('Имя должно содержать не менее 2 символов и не более 10 символов.');
        return;
    } 
    if (!((/^[A-ZА-Я][a-zа-яё]*$/).test(name))) {
        alert('Имя должно содержать только строчные буквы и одную букву.\nНапример, "Иван".');
        return;
    }

    //Валидация логина
    if (!((/^[A-Za-z0-9_]+$/).test(login))) {
        alert('Логин должнен содержать только буквы, цифры и нижнее подчёркивание (_).\nНапример, "d_e_v_e_l_o_p_e_r123455"');
        return;
    }

    //Валидация почты
    if (!((/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email))) {
        alert('Неверный формат почты.\nПочта должна иметь вид: 123abС@mail.ru');
        return;
    }


    //Пароль
    if (!(password.length >= 12)) {
        alert('Пароль должен содержать не менее 12 символов.');
        return;
    }
     if (!(passwordVerification.test(password))){
         alert('Пароли не совпадают');
         return;
     }

    
    this.submit();
});