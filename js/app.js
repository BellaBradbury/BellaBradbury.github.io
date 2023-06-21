// PICTURE SPIN
let techCot = document.getElementsByClassName('about-tech')[0];
let techItmArr = Array.from(techCot.children);

techItmArr.forEach(itm => {
    itm.addEventListener('mouseover', (e)=> {
        itm.style.animation = "spin 1.5s linear forwards";
    });
});
