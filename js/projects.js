// ---------- VARIABLES & DATA ---------- //
const foliosSect = document.getElementById('folios');
const foliosCot = document.getElementById('js-cot-folios');

const projects = [
    {
        "project_name": "Profile Page",
        "description": "A customized web page to serve as a personal profile site.",
        "technologies": ["HTML", "CSS"],
        "live_link": "https://bellabradbury.github.io/Create-A-Profile-Page-WD-1/",
        "github_link": "https://github.com/BellaBradbury/Create-A-Profile-Page-WD-1.git",
        "image_urls": {
            "thumbnail": {
                "src": "../imgs/temp-img.png",
                "alt": "thumbnail alt text"
            },
            "modal_sm": {
                "src": "../imgs/temp-img.png",
                "alt": "sm alt text"
            },
            "modal_md": {
                "src": "../imgs/temp-img.png",
                "alt": "md alt text"
            },
            "modal_lg": {
                "src": "../imgs/temp-img.png",
                "alt": "lg alt text"
            }
        },
    },
    {
        "project_name": "Responsive Layout",
        "description": "A responsive, mobile-first layout that also accommodates medium and large screens.",
        "technologies": ["HTML", "CSS"],
        "live_link": "https://bellabradbury.github.io/Mobile-First-Responsive-Layout-WD-2/",
        "github_link": "https://github.com/BellaBradbury/Mobile-First-Responsive-Layout-WD-2.git",
        "image_urls": {
            "thumbnail": {
                "src": "../imgs/temp-img.png",
                "alt": "thumbnail alt text"
            },
            "modal_sm": {
                "src": "../imgs/temp-img.png",
                "alt": "sm alt text"
            },
            "modal_md": {
                "src": "../imgs/temp-img.png",
                "alt": "md alt text"
            },
            "modal_lg": {
                "src": "../imgs/temp-img.png",
                "alt": "lg alt text"
            }       
        },
    }
]; 

// ---------- CREATE & PRINT PROJECTS FROM ARRAY ---------- //
projects.forEach(project => {
    const li = document.createElement('li');
    const cardData = `
        <img src="${project.image_urls.thumbnail.src}" class="img-thumbnail" alt="${project.image_urls.thumbnail.alt}">
        <h3>${project.project_name}</h3>
    `;
    li.innerHTML = cardData;
    li.classList.add('card-project');
    li.tabIndex = '0';

    foliosCot.appendChild(li);
});

// ---------- MODAL CLOSE EVENT FUNCTIONS ---------- //
function closeEventClick(e) {
    const modalCot = document.getElementById('js-cot-folio_detail');

    if (modalCot) {
        if ( !foliosCot.contains(e.target) && !modalCot.contains(e.target) ) {
            modalCot.remove();
        }
    }
}
function closeEventKey(e) {
    const modalCot = document.getElementById('js-cot-folio_detail');

    if (modalCot) {
        console.log('EVENT TARGET', e.target);
        const isFolio = (e.target.parentElement.id === 'js-cot-folios');
        const isModal = (e.target.parentElement.id === 'folio-links');
    
        if (!isFolio && !isModal) {
            modalCot.remove();
        }
    }
}

// ---------- CREATE DETAIL MODAL ---------- //
function createModal(card, itm, type) {
    const checkDiv = document.getElementById('js-cot-folio_detail');
    if (checkDiv) {
        checkDiv.remove();
    }

    const modalCot = document.createElement('div');
    modalCot.id = 'js-cot-folio_detail';

    const modalData = `
        <h4>${itm.project_name}</h4>
        <div id="folio-imgs">
            <img src="${itm.image_urls.modal_sm.src}" class="img-thumbnail" alt="${itm.image_urls.modal_sm.alt}">
            <img src="${itm.image_urls.modal_md.src}" class="img-thumbnail" alt="${itm.image_urls.modal_md.alt}">
            <img src="${itm.image_urls.modal_lg.src}" class="img-thumbnail" alt="${itm.image_urls.modal_lg.alt}">
        </div>
        <div id="folio-links">
            <a href="${itm.live_link}">LIVE</a>
            <a href="${itm.github_link}">REPO</a>
        </div>
        <p>${itm.description}</p>
    `;
    modalCot.innerHTML = modalData;

    const techCot = document.createElement('ul');
    techCot.id = 'folio-tech';

    itm.technologies.forEach(tech => {
        const techLi = document.createElement('li');
        techLi.innerHTML = tech;

        techCot.append(techLi);
    });

    modalCot.append(techCot);

    if (type === 'keyup') {
        console.log('CARD', card);
        card.after(modalCot);
    } else if (type === 'click') {
        foliosSect.append(modalCot);
    }
};

// ---------- DETAIL MODAL EVENT FUNCTION ---------- //
function modalEvent(e) {
    let isParent = e.target.classList.contains('card-project');
    let isChild = e.target.parentElement.classList.contains('card-project');

    let clicked;
    if (isParent) {
        clicked = e.target;
    } else if (isChild) {
        clicked = e.target.parentElement;
    }

    if (clicked) {
        let projectTitle = clicked.getElementsByTagName('h3')[0].innerHTML;

        projects.forEach(project => {
            if (projectTitle === project.project_name) {
                let type = e.type;
                createModal(clicked, project, type);
            }
        });
    }
};

// ---------- EVENTS ---------- //
foliosCot.addEventListener('click', (e)=> {
    console.log(e);
    modalEvent(e);
});
foliosCot.addEventListener('keyup', (e)=> {
    if (e.key === 'Tab' || e.key === 'Enter') {
        modalEvent(e);
    }
});

window.addEventListener('click', closeEventClick);
window.addEventListener('keyup', (e)=> {
    console.log(e);

    if (e.key === 'Tab' || e.key === 'Enter') {
        closeEventKey(e);
    }
});
