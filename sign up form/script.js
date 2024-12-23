const form = document.getElementById('signupForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // جلوگیری از ارسال فرم
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  let isValid = true;

  // اعتبارسنجی نام کاربری
  if (username.value.trim() === '') {
    showError(username, 'Username is required');
    isValid = false;
  } else {
    hideError(username);
  }

  // اعتبارسنجی ایمیل
  if (!isValidEmail(email.value)) {
    showError(email, 'Enter a valid email address');
    isValid = false;
  } else {
    hideError(email);
  }

  // اعتبارسنجی رمز عبور
  if (password.value.length < 6) {
    showError(password, 'Password must be at least 6 characters');
    isValid = false;
  } else {
    hideError(password);
  }

  // اگر تمام فیلدها معتبر بود
  if (isValid) {
    successMessage.textContent = 'Sign up successful!';
    form.reset();
  }
});

function showError(input, message) {
  const parent = input.parentElement;
  const errorMessage = parent.querySelector('.error-message');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  input.style.borderColor = '#ff4d4d';
}

function hideError(input) {
  const parent = input.parentElement;
  const errorMessage = parent.querySelector('.error-message');
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
  input.style.borderColor = '#ccc';
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
