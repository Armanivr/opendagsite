function openNav() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.getElementById("myNav").style.width = "50%";
    } else {
        document.getElementById("myNav").style.width = "40%";
    }
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
