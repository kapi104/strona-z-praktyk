const slidesLeft = document.querySelectorAll('.tabl');
const slidesRight = document.querySelectorAll('.tabr');
let styleElement = document.head.appendChild(document.createElement("style"));

slidesLeft.forEach((slide) => {
    slide.addEventListener('mouseenter', () => {
        let bcgColor = getBackgroundColor(currentPage + 1);
        styleElement.innerHTML = `.tabl::before {transform: translateX(100%);
        background-color: ${bcgColor};
    }`;
    });
    
    slide.addEventListener('mouseleave', () => {
        let bcgColor = getBackgroundColor(currentPage + 1);
        styleElement.innerHTML = `.tabl::before {transform: translateX(0);
        background-color: ${bcgColor};
    }`;
    });
})

slidesRight.forEach((slide) => {
    slide.addEventListener('mouseenter', () => {
        if (slide.classList.contains('tab4')) {
            bcgColor = getBackgroundColor('1');
        } else {
            bcgColor = getBackgroundColor(currentPage + 1);
        }
        styleElement.innerHTML = `.tabr::after {transform: translateX(-100%);
        background-color: ${bcgColor};
    }`;
    });

    slide.addEventListener('mouseleave', () => {
        if (slide.classList.contains('tab4')) {
            bcgColor = getBackgroundColor('1');
        } else {
            bcgColor = getBackgroundColor(currentPage + 1);
        }
        styleElement.innerHTML = `.tabr::after {background-color: ${bcgColor};
        transform: translateX(0);
        }`;
    });
})