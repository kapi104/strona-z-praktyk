const pages = document.querySelectorAll('.page');
const next = document.querySelector('.next')
const prev = document.querySelector('.previous')
let currentPage = 0;



function scrollTo(num) {
    pages[num].scrollIntoView({ behavior: 'smooth' }, true);
    return;
}

next.addEventListener('click', scrollTo)