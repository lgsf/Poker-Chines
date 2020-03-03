


const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    // Cria novo usuário
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // Após criado, fecha o popup e limpa.
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
      });
    });

// Deslogar o usuário
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  window.location = 'index.html';
});

// Loga o usuário
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    // Após logado, fecha o popup e limpa.
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    LoginForm.reset();
  });
});
