const pages = document.querySelectorAll('.page');
const next = document.querySelector('.next')
const prev = document.querySelector('.previous')
let currentPage = 0;


function scrollTo() {
    pages[currentPage].scrollIntoView({ behavior: 'smooth' }, true);
    return;
}

function getBackgroundColor() {
    if (currentPage == 0) {
        return color = 'rgb(73, 73, 73)';
    } else {
        let tab = document.querySelector(`.tab${currentPage}`)
        let color = window.getComputedStyle(tab).backgroundColor;
        return color;
    }
}

next.addEventListener('mouseenter', () => {
    if (currentPage != 4) {
        next.style.backgroundColor = getBackgroundColor();
    }

})
next.addEventListener('mouseleave', () => {
    next.style.backgroundColor = 'rgba(0, 0, 0, 0)';
})

prev.addEventListener('mouseenter', () => {
    if (currentPage != 0) {
        prev.style.backgroundColor = getBackgroundColor();
    }

})
prev.addEventListener('mouseleave', () => {
    prev.style.backgroundColor = 'rgba(0, 0, 0, 0)';
})

function toggleOpacity() {
    if (currentPage != 0) {
        prev.classList.remove('transparent');
    } else {
        prev.classList.add('transparent');
    }
    if (currentPage != 4) {
        next.classList.remove('transparent');
    } else {
        next.classList.add('transparent');
    }
}

function dissapear() {
    prev.classList.add('transparent');
    next.classList.add('transparent');
    setTimeout(function() {
        prev.classList.add('dissapear');
        next.classList.add('dissapear');
    },500)
}

function appear() {
    if (currentPage != 0) {
        prev.classList.remove('dissapear');
        setTimeout(() => {
            prev.classList.remove('transparent');
        }, 100);
    }
    if (currentPage != 4) {
        next.classList.remove('dissapear');
        setTimeout(() => {
            next.classList.remove('transparent');
        }, 100);
    }
}

next.addEventListener('click', () => {
    if (currentPage != 4)
        currentPage += 1;
        dissapear()
        setTimeout(() => {
            scrollTo()
        }, 450)
        setTimeout(() => {
            appear()
        }, 950)
}, false);

prev.addEventListener('click', () => {
    if (currentPage != 0)
        currentPage += -1;
        dissapear()
        setTimeout(function () {
            scrollTo()
        }, 450)
        setTimeout(function () {
            appear()
    }, 950)
}, false)