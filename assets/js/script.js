const menuItems = document.getElementById('menu-item');
menuItems.style.maxHeight = '0px';
function menuToggle() {
    if (menuItems.style.maxHeight == '0px') {
        menuItems.style.maxHeight = '200px';
    }
    else {
        menuItems.style.maxHeight = '0px';
    }
}



// ----------------------js for Account Page
const loginForm = document.getElementById('login-form');
const regiForm = document.getElementById('regi-form');
const indicator = document.getElementById('indicator')

function register() {
    regiForm.style.transform = 'translateX(0px)';
    loginForm.style.transform = 'translateX(0px)';
    indicator.style.transform = 'translateX(100px)';
}
function login() {
    regiForm.style.transform = 'translateX(300px)';
    loginForm.style.transform = 'translateX(300px)';
    indicator.style.transform = 'translateX(0px)';
}