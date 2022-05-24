function updated() {
  alert("The data has been updated");
}
function deleted() {
  alert("The data has been deleted");
}
const form = document.getElementById('form');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');


let checkemail = 0;
let checknum = 0;

form.addEventListener('submit', (e) => {
  checkInputs();
  if (checkemail == 0 || checknum == 0) {
    e.preventDefault();
  }
});
function ValidateEmail(input) {
  var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {

    return false;
  }
}
function isPhoneVaild(mobile) {
  const reg = /^[0-9]{11}$/;
  return reg.test(mobile);
}
function checkInputs() {
  const emailvalue = email.value.trim();
  const mobilevalue = mobile.value.trim();
  if (emailvalue === '') {
    setErrorFor(email, 'Email cannot be empty');
  }
  else if (!ValidateEmail(email)) {
    setErrorFor(email, 'Email is not valid');
  }
  else {
    setSuccessFor(email);
    checkemail = 1;
  }
  if (mobilevalue === '') {
    setErrorFor(mobile, 'Mobile number cannot be empty');
  }
  else if (!isPhoneVaild(mobilevalue)) {
    setErrorFor(mobile, 'invalid mobile number');
  }
  else {
    setSuccessFor(mobile);
    checknum = 1;
  }
};
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.error');
  formControl.classList.add('error');
  formControl.classList.remove('success');
  small.innerText = message;

}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('.error');
  formControl.classList.add('success');
  formControl.classList.remove('error');
  small.innerText = '';
}