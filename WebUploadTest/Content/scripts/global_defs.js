$(document).ready(function () {
    loadHeaders();
    loadNavBars();
    document.getElementById('background').style.minHeight = (window.innerHeight - 150) + 'px';
});


function loadHeaders()
{
    $("#header").load("./Header.html");
}

function loadNavBars() {
    $("#top-navbar-container").load("./TopNavBar.html");
    $("#bottom-navbar-container").load("./BottomNavBar.html");
}