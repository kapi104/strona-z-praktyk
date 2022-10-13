const pages = document.querySelectorAll('.page');
const next = document.querySelector('.next')
const prev = document.querySelector('.previous')
let currentPage = 0;

function scrollTo() {
    pages[currentPage].scrollIntoView({ behavior: 'smooth' }, true);
    return;
}

next.addEventListener('click', () => {
    if (currentPage != 4)
    currentPage += 1;
    scrollTo()
}, false);
prev.addEventListener('click', () => {
    if (currentPage != 0)
    currentPage += -1;
    scrollTo()
}, false);