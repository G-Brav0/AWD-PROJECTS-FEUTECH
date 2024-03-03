// manual type
// const scrollIndicator = document.getElementById('scrollIndicator');

// const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

// // function UpdateScrollIndicator(): void{
// function UpdateScrollIndicator(){
//     const scrollPercentage = (window.scrollY/totalScrollHeight) * 100;
//     scrollIndicator.style.width = `${scrollPercentage}%`;
// }

// window.addEventListener('scroll', UpdateScrollIndicator);

// code by sir
const scrollIndicator = document.getElementById('_indicator');

const totalScrollHeight = document.body.scrollHeight - window.innerHeight;

function UpdateScrollIndicator() {
  const newScrollHeight = (window.scrollY / totalScrollHeight) * 100;
  scrollIndicator.style.width = `${newScrollHeight}%`;
}

window.addEventListener('scroll', UpdateScrollIndicator);