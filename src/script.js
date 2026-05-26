import 'modern-normalize/modern-normalize.css';
import './styles/reset.css';
import './styles/style.css';

const signUpForm = document.querySelector('#sign-up-form');
const loginForm = document.querySelector('#login-form');

if (signUpForm) {
  signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('api/auth/sign-up', {
        method: 'POST',
        body: new URLSearchParams(new FormData(signUpForm)),
      });

      if (!response.ok) {
        const data = await response.json();
        data.errors.forEach((err) => {
          console.log(err.msg);
        });
        throw new Error('some field are invalid');
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      window.location.href = '/login.html';
    } catch (err) {
      console.error(err);
    }
  });
}

if (loginForm) {
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
}
