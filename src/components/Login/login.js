document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
  
    loginBtn.addEventListener('click', function() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Check credentials (replace with your actual logic)
      if (username === 'Employer' || username === 'employer' && password === 'Portfolio2024') {
        // Set logged in user in local storage
        localStorage.setItem('loggedInUser', 'Employer');
        // Redirect to profile page
        window.location.href = '../Profile/profile.html';
      } else if (username === 'Admin' && password === '2024@Portfolio') {
        // Set logged in user in local storage
        localStorage.setItem('loggedInUser', 'Admin');
        // Redirect to profile page
        window.location.href = '../Profile/profile.html';
      } else {
        // Invalid credentials, show error message (you can customize this part)
        alert('Invalid username or password. Please try again.');
      }
    });
  });
  