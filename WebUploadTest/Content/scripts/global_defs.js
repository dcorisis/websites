$(document).ready(function () {
    //loadHeaders();
});

function loadHeaders(isHome)
{
    if(isHome)
        $("#header").load("./views/Header.html");
    else
        $("#header").load("./Header.html");
}
