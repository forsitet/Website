document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('mail').value;

    //Валидация почты
    if (!((/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email))) {
        alert('Неваерный формат почты.');
        return;
    }
    
    this.submit();
});