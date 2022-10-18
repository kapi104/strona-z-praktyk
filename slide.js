const arrowl = document.querySelectorAll('.arrowl');
const arrowr = document.querySelectorAll('.arrowr');
const tabs = document.querySelectorAll('.tab');
const prevImgArrows = document.querySelectorAll('.prevImgBtn')
const nextImgArrows = document.querySelectorAll('.nextImgBtn')
const arrowSpans = document.querySelectorAll('.imgBtnSpan');
let styleElement = document.head.appendChild(document.createElement("style"));
let bcgColor;

// on hover slide

arrowl.forEach((slide) => {
    slide.addEventListener('mouseenter', () => {
        bcgColor = getBackgroundColor(currentPage + 1);
        let text = `.tabl::before {transform: translateX(100%);
            background-color: ${bcgColor};`;
        if (slide.classList.contains('reverse')) {
            text = `.tabl::before {transform: translateX(100%);
            background-color: ${bcgColor}; border-radius: 0px;`;
        }
        styleElement.innerHTML = text + '}';
    });

    slide.addEventListener('mouseleave', () => {
        slideOutLeft()
    });
})

arrowr.forEach((slide) => {
    slide.addEventListener('mouseenter', () => {
        if (currentPage == 4) {
            bcgColor = getBackgroundColor('1');
        } else {
            bcgColor = getBackgroundColor(currentPage + 1);
        }
        let text = `.tabr::after {transform: translateX(-100%);
            background-color: ${bcgColor};`;
        if (slide.classList.contains('reverse')) {
            text = `.tabr::after {transform: translateX(-100%);
            background-color: ${bcgColor}; border-radius: 0px;`;
        }
        styleElement.innerHTML = text + '}';
    });

    slide.addEventListener('mouseleave', () => {
        slideOutRight(slide);
    });

})

arrowl.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        slideOutLeft()
        setTimeout(() => {
            if (!tabs[currentPage - 1].classList.contains('enlarge')) {
                tabs[currentPage - 1].classList.add('enlarge');
                arrow.classList.add('reverse');
                arrowsAppear();
            } else {
                tabs[currentPage - 1].classList.remove('enlarge');
                arrow.classList.remove('reverse');
                arrowsDisappear();
            }
        }, 200);
    })
})

arrowr.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        slideOutRight();
        setTimeout(() => {
            if (!tabs[currentPage - 1].classList.contains('enlarge')) {
                tabs[currentPage - 1].classList.add('enlarge');
                arrow.classList.add('reverse');
                arrowsAppear();
            } else {
                tabs[currentPage - 1].classList.remove('enlarge');
                arrow.classList.remove('reverse');
                arrowsDisappear();
            }
        }, 200);
    })
})

function arrowsAppear() {
    arrowSpans.forEach((arrow) => {
        arrow.classList.remove('dissapear');
        arrow.classList.remove('dissapear');
        setTimeout(() => {
            arrow.classList.remove('transparent');
            arrow.classList.remove('transparent');
        }, 200);
    })
    return
}

function arrowsDisappear() {
    arrowSpans.forEach((arrow) => {
        arrow.classList.add('transparent');
        arrow.classList.add('transparent');
        setTimeout(() => {
            arrow.classList.add('dissapear');
            arrow.classList.add('dissapear');
        }, 200);
    })
    return
}

function slideOutRight() {
    if (currentPage == 4) {
        bcgColor = getBackgroundColor('1');
    } else {
        bcgColor = getBackgroundColor(currentPage + 1);
    }
    styleElement.innerHTML = `.tabr::after {background-color: ${bcgColor};
        transform: translateX(0);
        }`;
    return
}

function slideOutLeft() {
    bcgColor = getBackgroundColor(currentPage + 1);
    styleElement.innerHTML = `.tabl::before {transform: translateX(0);
        background-color: ${bcgColor};
    }`;
    return
}

