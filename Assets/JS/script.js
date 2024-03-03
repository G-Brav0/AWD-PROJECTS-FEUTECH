const classCards = document.querySelectorAll('.card');

classCards.forEach(card => {
    card.addEventListener('click', () => {
        showAlert('You\'re about to leave this page.');
    });
});

function showAlert(message) {
    alert(message);
}
