const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms').checked;
    
    // Validation
    if (!email.trim() || !username.trim() || !password.trim() || !confirmPassword.trim()) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
    }
    
    if (!terms) {
        alert('Please agree to the Terms & Conditions');
        return;
    }
    
    // You can replace this with actual registration logic
    console.log('Signup attempt:', {
        email: email,
        username: username,
        password: password
    });
    
    // Redirect to login page
    window.location.href = 'index.html';
});
