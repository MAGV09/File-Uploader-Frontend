import 'modern-normalize/modern-normalize.css';
import './styles/reset.css';
import './styles/style.css';

const signUpForm = document.querySelector('#sign-up-form');
const loginForm = document.querySelector('#login-form');
signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const response = await fetch('/sign-up', {
    method: 'POST',
    body: new FormData(signUpForm),
  });

  if (response.ok) {
    window.location.href = '/login.html';
  }
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const response = await fetch('/sign-up', {
    method: 'POST',
    body: new FormData(loginForm),
  });

  if (response.ok) {
    window.location.href = '/';
  }
});
