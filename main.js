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

//preview the form
function preivew(){
    const Name = document.getElementById('name').value;
    const Address = document.getElementById('mailAddress').value;
    const Phone = document.getElementById('ph').value;
    const Subject = document.getElementById('query').value;
    const review = document.getElementById('info').value;

    document.getElementById('nameinfo').innerHTML = Name;
    document.getElementById('mailinfo').innerHTML = Address;
    document.getElementById('phinfo').innerHTML = Phone;
    document.getElementById('queryinfo').innerHTML = Subject;
    document.getElementById('inform').innerHTML = review;

    document.getElementById('previewSection').style.display = 'block';


}







