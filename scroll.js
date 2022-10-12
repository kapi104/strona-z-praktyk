const pages = document.querySelectorAll('.page');
let currentPage = 0;
let y = 0;
let date = Date.now();

setInterval(function () {
    y = scrollY;
}, 200)

function scrollTo(num) {
    pages[num].scrollIntoView({ behavior: 'smooth' }, true);
    
    return;
}

function check() {
    if (scrollY > y) {
        currentPage += 1;
        return currentPage;
    } else if (scrollY < y) {
        currentPage -= 1;
    } else {
        return currentPage;
    }
}

function wait(fn, delay) {
    return function () {
        if ((date + delay - Date.now()) < 0) {
            fn(check());
            date = Date.now();
            
        }
    }
}

document.addEventListener('scroll', wait(scrollTo, 1000), {passive: true});