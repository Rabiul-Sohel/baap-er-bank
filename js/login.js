document.getElementById('btn-submit').addEventListener('click', function () {
  const emailField = document.getElementById('input-email');
  const email = emailField.value;
  const passwordField = document.getElementById('input-password');
  const password = passwordField.value;
  if (email === 'rabiulalamsohel@gmail.com' && password === 'smhall011') {
    window.location.href = 'bank.html';
  }
  else {
    alert('Type valid user email and password');
  }
})