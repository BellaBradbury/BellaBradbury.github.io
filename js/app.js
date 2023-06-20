// PICTURE SPIN
let techCot = document.getElementsByClassName('about-tech')[0];
let techItmArr = Array.from(techCot.children);

techItmArr.forEach(itm => {
    itm.addEventListener('mouseover', (e)=> {
        itm.style.transform = "rotate(360deg) scale(1.5)";
    });
    itm.addEventListener('mouseout', (e)=> {
        itm.style.transform = "scale(1)";
    })
});