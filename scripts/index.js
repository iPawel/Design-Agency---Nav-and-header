const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');


const handleClick = () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('menu--active');
}




burger.addEventListener('click', handleClick);