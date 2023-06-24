const profileName = document.getElementById('name');
const profileEmail = document.getElementById('email');
const password = document.getElementById('pass');
const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', function() {
  localStorage.removeItem('userProfile');  
  // Redirect to signup page
  window.location.href = 'index.html';
});

const userProfile = localStorage.getItem('userProfile');

if (!userProfile) {
  // User is not authenticated, redirect to signup page
   window.location.href = 'index.html';
} 
else {
  // User is authenticated, retrieve details from local storage
  const user = JSON.parse(userProfile);
  profileName.textContent = user.name;
  profileEmail.textContent = user.email;
  password.textContent =user.password;
}