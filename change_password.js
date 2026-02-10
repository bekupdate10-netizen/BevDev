const changePasswordForm = document.getElementById('changePasswordForm');

changePasswordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validation
    if (!oldPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
        alert('Please fill in all fields');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (newPassword.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    if (newPassword === oldPassword) {
        alert('New password must be different from old password');
        return;
    }
    
    // Password change successful
    alert('Password changed successfully!');
    
    // Redirect to account page
    window.location.href = 'Account.html';
});
