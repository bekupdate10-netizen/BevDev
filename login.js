const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Simple validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // You can replace this with actual authentication logic
    console.log('Login attempt:', {
        username: username,
        password: password,
        remember: remember
    });
    
    // Store username in localStorage
    localStorage.setItem('username', username);
    
    // Redirect to account page
    window.location.href = 'Account.html';
});
