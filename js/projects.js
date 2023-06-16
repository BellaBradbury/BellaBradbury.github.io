// ---------- VARIABLES & DATA ---------- //
const foliosSect = document.getElementById('folios');
const foliosCot = document.getElementById('js-cot-folios');

const projects = [
    {
        "project_name": "Registration Form",
        "description": "Interactive form to register for a fictional coding conference.",
        "technologies": ["JavaScript"],
        "live_link": "https://bellabradbury.github.io/Interactive-Registration-Form/",
        "github_link": "https://github.com/BellaBradbury/Interactive-Registration-Form",
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
        "project_name": "Phrase Hunter",
        "description": "Online game reminiscent of 'Wheel of Fortune' phrase puzzle.",
        "technologies": ["JavaScript", "CSS", "HTML"],
        "live_link": "https://bellabradbury.github.io/OOP-Word-Guessing-Game/",
        "github_link": "https://github.com/BellaBradbury/OOP-Word-Guessing-Game",
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
        "project_name": "Dashboard",
        "description": "Mock dashboard displaying user interactions and charted data.",
        "technologies": ["JavaScript", "SASS", "HTML"],
        "live_link": "https://bellabradbury.github.io/web-app-dashboard/",
        "github_link": "https://github.com/BellaBradbury/web-app-dashboard",
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
        "project_name": "Quote Generator",
        "description": "Random quotes and background colors displayed via user click and automatic refresh.",
        "technologies": ["JavaScript"],
        "live_link": "https://bellabradbury.github.io/Random-Quote-Generator/",
        "github_link": "https://github.com/BellaBradbury/Random-Quote-Generator",
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
        "project_name": "Student Database",
        "description": "Database showcasing pagination and filtering of fictional students.",
        "technologies": ["JavaScript"],
        "live_link": "https://bellabradbury.github.io/Student-Database/",
        "github_link": "https://github.com/BellaBradbury/Student-Database",
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
        "project_name": "Style Guide",
        "description": "Page showcasing responsive SASS styling.",
        "technologies": ["HTML", "SASS"],
        "live_link": "https://bellabradbury.github.io/web-style-guide/",
        "github_link": "https://github.com/BellaBradbury/web-style-guide",
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
        "project_name": "Photo Gallery",
        "description": "Site displaying photos with modal and search functionality.",
        "technologies": ["JavaScript", "HTML", "SASS"],
        "live_link": "https://bellabradbury.github.io/interactive-photo-gallery/",
        "github_link": "https://github.com/BellaBradbury/interactive-photo-gallery",
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
            <a href="${itm.live_link} target="_blank">LIVE</a>
            <a href="${itm.github_link}" target="_blank">REPO</a>
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
foliosCot.addEventListener('click', modalEvent);
foliosCot.addEventListener('keyup', (e)=> {
    if (e.key === 'Tab' || e.key === 'Enter') {
        modalEvent(e);
    }
});

window.addEventListener('click', closeEventClick);
window.addEventListener('keyup', (e)=> {
    if (e.key === 'Tab' || e.key === 'Enter') {
        closeEventKey(e);
    }
});
