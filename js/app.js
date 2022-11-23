/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const fragment = new DocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildTheNavigation(){
    for(let section of sections) {
        const id = section.getAttribute('id');
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.classList.add("menu__link");
        link.href = `#${id}`;
        link.textContent = section.getAttribute('data-nav');
        // scroll function
        link.addEventListener('click', function(e) {
            e.preventDefault();
            section.scrollIntoView({
                behavior: 'smooth'
              });
        })
        item.appendChild(link);
        fragment.appendChild(item);
        
    }
    document.getElementById("navbar__list").appendChild(fragment);
}
buildTheNavigation();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


