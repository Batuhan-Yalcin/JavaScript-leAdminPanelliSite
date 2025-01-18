document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById('signup-form');

    // Kayıt işlemi
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Kullanıcı verilerini localStorage'a kaydetme
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Kullanıcı kaydını localStorage'a ekleyelim
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Kayıt başarıyla tamamlandı!');

        // Formu sıfırlayalım
        signupForm.reset();
    });
});
