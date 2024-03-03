// prompt
// create a javascript code that will allow the button type to change the background-image of class card-body and vice-versa

// 1st set (Free Sign up btn)
const button = document.querySelector('button');
const cbg = document.getElementById("bg");
button.addEventListener('click', () => {
    // controls the body background-image
    if (cbg.style.backgroundImage === '') {
        cbg.style.backgroundImage = 'url("https://wallpapercave.com/wp/wp2758037.gif")';
    } 
    else {
        cbg.style.backgroundImage = '';
    }
  });

const cardBody = document.querySelector('.card-body');
button.addEventListener('click', () => {
    //controls the inside card-body image
    if (cardBody.style.backgroundImage === '') {
        cardBody.style.backgroundImage = 'url("https://i.makeagif.com/media/2-24-2021/JT4fO9.gif")';
    } else {
        cardBody.style.backgroundImage = '';
    }
});

// 2nd set (Get started btn)
// const button = document.querySelector('button');
const cbtn = document.getElementById("changebg1");
const cbg1 = document.getElementById("bg");
cbtn.addEventListener('click', () => {
    // controls the body background-image
    if (cbg1.style.backgroundImage === '') {
        cbg1.style.backgroundImage = 'url("https://i.gifer.com/65r.gif")';
    } 
    else {
        cbg1.style.backgroundImage = '';
    }
  });

const cardBody2 = document.getElementById("card-body2");
cbtn.addEventListener('click', () => {
    //controls the inside card-body image
    if (cardBody2.style.backgroundImage === '') {
        cardBody2.style.backgroundImage = 'url("https://i.pinimg.com/originals/7d/2a/9f/7d2a9fca264faa93561f72b5fc885fec.gif")';
    } else {
        cardBody2.style.backgroundImage = '';
    }
});


// 3rd set (Contact us btn)
const cbtn2 = document.getElementById("changebg2");
const cbg2 = document.getElementById("bg");
cbtn2.addEventListener('click', () => {
    // controls the body background-image
    if (cbg2.style.backgroundImage === '') {
        cbg2.style.backgroundImage = 'url("https://i.pinimg.com/originals/53/40/d4/5340d47947c1e4117e36c295ad146d4c.gif")';
    } 
    else {
        cbg2.style.backgroundImage = '';
    }
  });

const cardBody3 = document.getElementById("card-body3");
cbtn2.addEventListener('click', () => {
    //controls the inside card-body image
    if (cardBody3.style.backgroundImage === '') {
        cardBody3.style.backgroundImage = 'url("https://i0.wp.com/i.pinimg.com/originals/98/01/84/980184fe0897895825bb2e751d8007f7.gif")';
    } else {
        cardBody3.style.backgroundImage = '';
    }
});


// 4th set (Sign up upper panel btn) - reset all bg and card bg
const resetButton = document.getElementById("changebg");
resetButton.addEventListener('click', () => {
    // Reset background images
    const cbg = document.getElementById("bg");
    cardBody.style.backgroundImage = '';
    

    const cardBody2 = document.getElementById("card-body2");
    cardBody2.style.backgroundImage = '';

    const cardBody3 = document.getElementById("card-body3");
    cardBody3.style.backgroundImage = '';

    const cbg3 = document.getElementById("bg");
    cbg3.style.backgroundImage = '';

});