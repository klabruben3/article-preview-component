const button = document.querySelector("button");
const shareClicked = document.querySelector(".share-clicked");
const wrapper = document.querySelector(".wrapper")
const share = document.querySelector("svg path");

button.onclick = () => {
    shareClicked.style.animation = 'fade-in 500ms forwards';
    shareClicked.setAttribute('open', "");

    wrapper.onclick = (e) => {
        if (!shareClicked.contains(e.target)) {
            shareClicked.style.animation = 'fade-out 500ms forwards';
            shareClicked.removeAttribute('open')
            shareClicked.setAttribute('closing', "");
            shareClicked.addEventListener('animationend', () => {
                shareClicked.removeAttribute('closing');
            })
            button.style.removeProperty('background-color');
            share.style.cssText -= 'fill: hsl(0, 0%, 100%)';
        }

    }
}

button.onmouseenter = () => {
    button.style.backgroundColor = 'hsl(214, 17%, 51%)';
    share.style.fill = 'hsl(0, 0%, 100%)';

    button.onmouseleave = () => {
        if (shareClicked.hasAttribute('open')) {
            return;
        }
        button.style.removeProperty('background-color');
        share.style.cssText -= 'fill: hsl(0, 0%, 100%)';
    }
}

const viewport = window.matchMedia("(max-width: 375px) or (orientation: portrait)");
const span = document.querySelector(".share-clicked .icons span");
const icons = document.querySelector(".icons");

function mediaquery(viewport) {
    if (viewport.matches) {
        // If media query matches
        span.style.cssText = 'font-size: 13.4px;';
        icons.style.cssText = 'margin-left: 20px;'
        button.style.cssText = 'margin-top: 10px;'


        button.onclick = () => {
            shareClicked.style.animation = 'mobile-fade-in 500ms forwards';
            shareClicked.setAttribute('open', "");

            wrapper.onclick = (e) => {
                if (!shareClicked.contains(e.target)) {
                    shareClicked.style.animation = 'mobile-fade-out 500ms forwards';
                    shareClicked.removeAttribute('open')
                    shareClicked.setAttribute('closing', "");
                    shareClicked.addEventListener('animationend', () => {
                        shareClicked.removeAttribute('closing');
                    })
                    button.style.removeProperty('background-color');
                    share.style.cssText -= 'fill: hsl(0, 0%, 100%)';
                }

            }
        }

    } else {
        button.onclick = () => {
            shareClicked.style.animation = 'fade-in 500ms forwards';
            shareClicked.setAttribute('open', "");

            wrapper.onclick = (e) => {
                if (!shareClicked.contains(e.target)) {
                    shareClicked.style.animation = 'fade-out 500ms forwards';
                    shareClicked.removeAttribute('open')
                    shareClicked.setAttribute('closing', "");
                    shareClicked.addEventListener('animationend', () => {
                        shareClicked.removeAttribute('closing');
                    })
                    button.style.removeProperty('background-color');
                    share.style.cssText -= 'fill: hsl(0, 0%, 100%)';
                }

            }
        }
    }
}

viewport.addEventListener("change", () => {
    mediaquery(viewport);
});