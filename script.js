// Handle Sign-Up Form Submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;

    if (password !== repeatPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Here you can add code to store the user information
    // For this example, we'll just log the information and redirect to index
    const userData = {
        name: document.getElementById('name').value,
        familyName: document.getElementById('family-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        userId: document.getElementById('userid').value,
        password: password
    };

    console.log('User signed up:', userData);

    // Redirect to index page
    window.location.href = 'index.html';
});

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userId = document.getElementById('login-userid').value;
    const password = document.getElementById('login-password').value;

    // Here you can add code to validate the user credentials
    // For this example, we'll just simulate a successful login
    const storedUserId = 'testUser';  // Example stored user ID
    const storedPassword = 'testPass';  // Example stored password

    if (userId === storedUserId && password === storedPassword) {
        // Successful login
        window.location.href = 'index.html';
    } else {
        // Failed login
        document.getElementById('error-message').textContent = 'Invalid User ID or Password!';
    }
});
