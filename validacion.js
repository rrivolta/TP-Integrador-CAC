document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = ''; 
  
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessage.innerHTML += 'Correo electrónico no es válido.<br>';
    }
  
    
    if (password.length < 6) {
      errorMessage.innerHTML += 'La contraseña debe tener al menos 6 caracteres.<br>';
    }
  
    
    if (errorMessage.innerHTML === '') {
      this.submit();
    }
  });
  