$(document).ready(function () {
    loadHeaders();
    loadFooters();
});

function loadHeaders()
{
    $("#header").load("./Header.html");
}

function loadFooters() {
    $("#footer").load("./Footer.html");
}
