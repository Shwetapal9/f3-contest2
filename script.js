
const signbtn = document.getElementById('signup-btn');
const error = document.getElementById('error-msg');
const success= document.getElementById('success-msg');

signbtn.addEventListener('click', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('pass').value;
  const confirmPassword = document.getElementById('confirm').value;
  
  if( name ==='' || email ==='' || password ==='' ){
    error.textContent = ' Error: All the fieds are mandatory'
    success.textContent = '';
    password.textContent='';
    return
  }
  if(password!==confirmPassword){
    passwordMatching.textContent='Error: Password does not match';
    error.textContent = '';
    success.textContent = '';
    return
  }

  const accessToken = generateToken();
  const userProfile = {
    name: name,
    email: email,
    password: password,
    accessToken: accessToken
  };
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('pass').value = '';
  document.getElementById('confirm').value = '';
  error.textContent = '';
  success.textContent = 'Successfully Signed Up!'; 
  
  setTimeout(function() {
    window.location.href = 'profile.html';
  }, 2000);

}); 

// function to generate random 16-byte string as access token
function generateToken() {
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';
    for (let i = 0; i < 16; i++) {
      accessToken += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return accessToken;
}

