let wrapperMenu = document.querySelector('.wrapper-menu');
function openNav() {
    document.getElementById("navbar").style.height = "100%";
    wrapperMenu.classList.toggle('open');
}

function closeNav() {
    document.getElementById("navbar").style.height = "0%";
    wrapperMenu.classList.toggle('open');
}
