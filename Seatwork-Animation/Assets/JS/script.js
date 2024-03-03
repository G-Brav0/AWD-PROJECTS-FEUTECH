const imgReveals = document.querySelectorAll('.img_reveal');

imgReveals.forEach(imgReveal => {
    imgReveal.addEventListener('mouseover', () => {
        imgReveal.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.8)';
        imgReveal.style.transform = 'scale(1.2)';
    });

    imgReveal.addEventListener('mouseout', () => {
        imgReveal.style.boxShadow = '';
        imgReveal.style.transform = '';
    });
});