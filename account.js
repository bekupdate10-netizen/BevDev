// Check if user is logged in
window.addEventListener('load', function() {
    const username = localStorage.getItem('username');
    
    if (!username) {
        // Redirect to login if not logged in
        window.location.href = 'index.html';
        return;
    }
    
    // Display welcome message and account info
    document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;
    document.getElementById('accountUsername').textContent = username;
    
    // Load learning time statistics
    const totalHours = parseFloat(localStorage.getItem('totalHours') || '0');
    document.getElementById('totalHours').textContent = totalHours + ' hrs';
    
    // Calculate week hours (assuming it's stored separately)
    const weekHours = parseFloat(localStorage.getItem('weekHours') || '0');
    document.getElementById('weekHours').textContent = weekHours + ' hrs';
    
    // Calculate streak days
    const streakDays = parseInt(localStorage.getItem('streakDays') || '0');
    document.getElementById('streakDays').textContent = streakDays + ' days';
});

// Logout function
function logout() {
    // Clear localStorage
    localStorage.removeItem('username');
    
    // Redirect to login page
    window.location.href = 'index.html';
}