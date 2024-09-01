console.log("Raunak Kaushal ❤");

const barBtn = document.querySelector(".bar-btn");
const slideBar = document.getElementById("slideBar");
const closeBtn = document.querySelector(".close-btn");

barBtn.addEventListener('click', () => {
    slideBar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    slideBar.classList.remove('active');
});