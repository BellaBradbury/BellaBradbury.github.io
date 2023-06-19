// ---------- VARIABLES & DATA ---------- //
const foliosSect = document.getElementById('folios');
const foliosCot = document.getElementById('folios-cot');

const projects = [
    {
        "project_name": "Registration Form",
        "description": "Interactive form to register for a fictional coding conference.",
        "technologies": ["js"],
        "live_link": "https://bellabradbury.github.io/Interactive-Registration-Form/",
        "github_link": "https://github.com/BellaBradbury/Interactive-Registration-Form",
        "image_urls": {
            "thumbnail": {
                "src": "../img/thumbnail/registration-form.png",
                "alt": "thumbnail alt text"
            },
            "modal": {
                "src": "../img/modal/registration-form.png",
                "alt": "modal alt text"
            }
        },
    },
    {
        "project_name": "Phrase Hunter",
        "description": "Online game reminiscent of 'Wheel of Fortune' phrase puzzle.",
        "technologies": ["js", "css", "html"],
        "live_link": "https://bellabradbury.github.io/OOP-Word-Guessing-Game/",
        "github_link": "https://github.com/BellaBradbury/OOP-Word-Guessing-Game",
        "image_urls": {
            "thumbnail": {
                "src": "../img/thumbnail/phrase-hunter.png",
                "alt": "thumbnail alt text"
            },
            "modal": {
                "src": "../img/modal/phrase-hunter.png",
                "alt": "modal alt text"
            }
        },
    },
    {
        "project_name": "Dashboard",
        "description": "Mock dashboard displaying user interactions and charted data.",
        "technologies": ["js", "sass", "html"],
        "live_link": "https://bellabradbury.github.io/web-app-dashboard/",
        "github_link": "https://github.com/BellaBradbury/web-app-dashboard",
        "image_urls": {
            "thumbnail": {
                "src": "../img/thumbnail/dashboard.png",
                "alt": "thumbnail alt text"
            },
            "modal": {
                "src": "../img/modal/dashboard.png",
                "alt": "modal alt text"
            }
        },
    },
    {
        "project_name": "Quote Generator",
        "description": "Random quotes and background colors displayed via user click and automatic refresh.",
        "technologies": ["js"],
        "live_link": "https://bellabradbury.github.io/Random-Quote-Generator/",
        "github_link": "https://github.com/BellaBradbury/Random-Quote-Generator",
        "image_urls": {
            "thumbnail": {
                "src": "../img/thumbnail/quote-generator.png",
                "alt": "thumbnail alt text"
            },
            "modal": {
                "src": "../img/modal/quote-generator.png",
                "alt": "modal alt text"
            }
        },
    },
    {
        "project_name": "Student Database",
        "description": "Database showcasing pagination and filtering of fictional students.",
        "technologies": ["js"],
        "live_link": "https://bellabradbury.github.io/Student-Database/",
        "github_link": "https://github.com/BellaBradbury/Student-Database",
        "image_urls": {
            "thumbnail": {
                "src": "../img/thumbnail/student-database.png",
                "alt": "thumbnail alt text"
            },
            "modal": {
                "src": "../img/modal/student-database.png",
                "alt": "modal alt text"
            }
        },
    },
    {
        "project_name": "Style Guide",
        "description": "Page showcasing responsive SASS styling.",
        "technologies": ["html", "sass"],
        "live_link": "https://bellabradbury.github.io/web-style-guide/",
        "github_link": "https://github.com/BellaBradbury/web-style-guide",
        "image_urls": {
            "thumbnail": {
                "src": "../img/thumbnail/style-guide.png",
                "alt": "thumbnail alt text"
            },
            "modal": {
                "src": "../img/modal/style-guide.png",
                "alt": "modal alt text"
            }
        },
    },
    {
        "project_name": "Photo Gallery",
        "description": "Site displaying photos with modal and search functionality.",
        "technologies": ["js", "html", "sass"],
        "live_link": "https://bellabradbury.github.io/interactive-photo-gallery/",
        "github_link": "https://github.com/BellaBradbury/interactive-photo-gallery",
        "image_urls": {
            "thumbnail": {
                "src": "../img/thumbnail/photo-gallery.png",
                "alt": "thumbnail alt text"
            },
            "modal": {
                "src": "../img/modal/photo-gallery.png",
                "alt": "modal alt text"
            }
        },
    },
]; 

// ---------- CREATE & PRINT PROJECTS FROM ARRAY ---------- //
projects.forEach(project => {
    const btn = document.createElement('button');
    const cardData = `
        <img src="${project.image_urls.thumbnail.src}" class="img-thumbnail" alt="${project.image_urls.thumbnail.alt}">
        <h3>${project.project_name}</h3>
    `;
    btn.innerHTML = cardData;
    btn.classList.add('folios-card');

    foliosCot.appendChild(btn);
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
        const isFolio = (e.target.parentElement.id === 'folios-cot');
        const isModal = ( e.target.parentElement.classList.contains('folios-links') );
    
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
        <img src="${itm.image_urls.modal.src}" class="img-modal" alt="${itm.image_urls.modal.alt}">
        <h4>${itm.project_name}</h4>
        <div class="folios-links">
            <a href="${itm.live_link}" target="_blank">LIVE</a>
            <a href="${itm.github_link}" target="_blank">REPO</a>
        </div>
        <p>${itm.description}</p>
    `;
    modalCot.innerHTML = modalData;

    const techCot = document.createElement('ul');
    techCot.id = 'folio-tech';

    itm.technologies.forEach(tech => {
        const techIcon = document.createElement('img');
        
        if (tech === 'js') {
            techIcon.src = '../svg/javascript.svg';
            techIcon.alt = 'JS icon';
        } else if (tech === 'html') {
            techIcon.src = '../svg/html.svg';
            techIcon.alt = 'HTML icon';
        } else if (tech === 'css') {
            techIcon.src = '../svg/css.svg';
            techIcon.alt = 'CSS icon';
        } else if (tech === 'sass') {
            techIcon.src = '../svg/sass.svg';
            techIcon.alt = 'SASS icon';
        }

        techCot.append(techIcon);
    });

    modalCot.append(techCot);

    if (type === 'keyup') {
        card.after(modalCot);
        modalCot.scrollIntoView({behavior: "smooth"});
    } else if (type === 'click') {
        foliosSect.append(modalCot);
        modalCot.scrollIntoView({behavior: "smooth"});
    }
};

// ---------- DETAIL MODAL EVENT FUNCTION ---------- //
function modalEvent(e) {
    let isParent = e.target.classList.contains('folios-card');
    let isChild = e.target.parentElement.classList.contains('folios-card');

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
