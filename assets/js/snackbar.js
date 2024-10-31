
function showSnackbar(message, progressColor) {
    const snackbar = document.getElementById('snackbar');
    const snackbarBody = snackbar.querySelector('.snackbar-body');
    const snackbarProgress = snackbar.querySelector('.snackbar-progress');

    snackbarBody.textContent = message;
    snackbarProgress.style.backgroundColor = progressColor;
    snackbar.style.display = 'block';

    setTimeout(closeSnackbar, 5000);
}

function closeSnackbar() {
    const snackbar = document.getElementById('snackbar');
    snackbar.style.display = 'none';
}
