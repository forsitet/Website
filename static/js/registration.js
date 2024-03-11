document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var surename = document.getElementById('surename').value;
    var name = document.getElementById('name').value;
    var login = document.getElementById('login').value;
    var email = document.getElementById('mail').value;
    var password = document.getElementById('password').value;

    //Валидация
    //Валидация имени
    if (!(name.length >= 2) || !(name.length <= 10)) {
        alert('Имя должно содержать не менее 2 символов и не более 10 символов.');
        return;
    } 
    if (!((/^[A-Z][a-z]*$/).test(name))) {
        alert('Имени должно содержать только строчные буквы и только одна заглавная.');
        return;
    }

    //Валидация фамилии
    if (!(surename.length >= 2) || !(surename.length <= 10)) {
        alert('Фамилия должнa содержать не менее 2 символов и не более 10 символов.');
        return;
    } 
    if (!((/^[A-Z][a-z]*$/).test(surename))) {
        alert('Фамилия должнa содержать только строчные буквы и только одна заглавная.');
        return;
    }

    //Валидация почты
    if (!((/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email))) {
        alert('Неваерный формат почты.');
        return;
    }

    //Валидация логина
    if (!((/^[A-Za-z0-9_]+$/).test(login))) {
        alert('Логин должнен содержать только буквы, цифры и нижнее подчёркивание (_).');
        return;
    }

    if (!(password.length >= 10) || !((/^(?=.*[!@#$%^&*])[A-Za-z\d]+$/).test(password))) {
        alert('Пароль должен содержать не менее 10 символов и хотя бы один специальный символ.');
        return;
    } 

    
    this.submit();
});