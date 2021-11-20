const body = document.body;
const mobile_toggle = document.querySelector("#nav_toggle");
const header_nav_buttons = document.querySelector("#header_nav_buttons");

const mobileToggleParts = [ body, mobile_toggle, header_nav_buttons ];

mobile_toggle.addEventListener( "click", toggleMobileMenu );

function toggleMobileMenu()
{
    mobileToggleParts.forEach(element => {
        element.classList.toggle("active");
    });
}