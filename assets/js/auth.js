const authTitle = document.getElementById("authTitle");
const authAlertContainer = document.getElementById("authAlertContainer");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const lLoginInput = document.getElementById("login_loginInput");
const lPasswordInput = document.getElementById("login_passwordInput");
const sLoginInput = document.getElementById("signup_loginInput");
const sPasswordInput = document.getElementById("signup_passwordInput");
const sPasswordRepeatInput = document.getElementById("signup_passwordRepeatInput");

const FORMS = {
    "login": loginForm,
    "sign up": signupForm,
}

function showForm(form) {
    for (let f in FORMS) {
        if (f === form) {
            FORMS[f].classList.remove("d-none");
            FORMS[f].classList.add("d-flex");
            continue;
        }
        FORMS[f].classList.remove("d-flex");
        FORMS[f].classList.add("d-none");
    }
    authTitle.innerText = form.charAt(0).toUpperCase() + form.slice(1);
}
