$(document).ready(function () {
    loadHeaders();
    loadNavBars();
});

function loadHeaders()
{
    $("#header").load("./Header.html");
}

function loadNavBars() {
    $("#top-navbar-container").load("./TopNavBar.html");
    $("#bottom-navbar-container").load("./BottomNavBar.html");
}