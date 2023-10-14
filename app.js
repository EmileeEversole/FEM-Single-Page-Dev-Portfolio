const form = document.querySelector('form');
const errorMsg = document.querySelector('.error-msg');
const contact = document.querySelector('.contact');

form.addEventListener('submit', validateEmail);

function validateEmail(e) {
  e.preventDefault();

  const email = document.querySelector('.email');
  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!regEx.test(email.value)) {
    console.log("invalid");
    errorMsg.style.display = 'block';
    email.style.borderBottomColor = 'var(--error-clr)';
  }
  else {
    console.log ("valid");
    errorMsg.style.display = 'none';
    email.style.borderBottomColor = 'var(--white)';
    form.submit();
  }
  email.value = '';
}