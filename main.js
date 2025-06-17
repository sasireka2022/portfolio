// TOGGLE ICON NAVBAR
let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navBar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// function to download pdf
function downloadPDF() {
    document.getElementById("downloadLink").click();
}



// error not working
// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbarlinks
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}





window.onscroll = () => {
    //sticky header
    let head = document.querySelector('header');

    head.classList.toggle('sticky', window.scrollY > 100);
    // remove toggle icon and navbar when click navbar links(scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}