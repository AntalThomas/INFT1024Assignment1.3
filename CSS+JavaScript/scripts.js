function whichBird(birdName) {
    if (birdName === "pardalote") {
        document.getElementById("birdImage").src = "http://www.outgrabe.net/bird00.jpg";
        document.getElementById("birdCaption").innerHTML = "Pardalote by fir0002 (CC-by-NC)";
    } else if (birdName === "purpleSwampHen") {
        document.getElementById("birdImage").src = "http://www.outgrabe.net/bird01.jpg";
        document.getElementById("birdCaption").innerHTML = "Purple swamp hen by Toby Hudson (CC-by-SA)";
    } else if (birdName === "whiteHeadedStilt") {
        document.getElementById("birdImage").src = "http://www.outgrabe.net/bird02.jpg";
        document.getElementById("birdCaption").innerHTML = "White-headed Stilt by JJ Harrison (CC-by-SA)";
    } else if (birdName === "inlandThornbill") {
        document.getElementById("birdImage").src = "http://www.outgrabe.net/bird03.jpg";
        document.getElementById("birdCaption").innerHTML = "Inland Thornbill by Peter Jacobs (CC-by-SA)";
    } else if (birdName === "roseRobin") {
        document.getElementById("birdImage").src = "http://www.outgrabe.net/bird04.jpg";
        document.getElementById("birdCaption").innerHTML = "Rose Robin by JJ Harrison (CC-by-SA)";
    }
}

function changeTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");

    if (currentTheme === "dark") {
        html.setAttribute("data-theme", "light");
    } else {
        html.setAttribute("data-theme", "dark");
    }
}