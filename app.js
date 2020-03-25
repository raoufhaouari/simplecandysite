var myNav = document.getElementById('mynav');
window.onscroll = function () {
    console.log(`yoo${document.documentElement.scrollTop}`);
    "use strict";

    if (document.documentElement.scrollTop >= 481) {
        this.changeNavColor(0)
        document.getElementById('brand').classList.add("brand-colored");
    } else {

        this.changeNavColor(-1)
        document.getElementById('brand').classList.remove("brand-colored");

    }
};

function changeNavColor(i) {
    switch (i) {
        case 0:
            document.getElementById('mynav').classList.add("nav-colored0");
            document.getElementById('mynav').classList.remove("nav-colored1");
            document.getElementById('mynav').classList.remove("nav-colored2");
            document.getElementById('mynav').classList.remove("nav-colored3");
            break;
        case 1:
            document.getElementById('mynav').classList.remove("nav-colored0");
            document.getElementById('mynav').classList.add("nav-colored1");
            document.getElementById('mynav').classList.remove("nav-colored2");
            document.getElementById('mynav').classList.remove("nav-colored3");
            break;
        case 2:
            document.getElementById('mynav').classList.remove("nav-colored0");
            document.getElementById('mynav').classList.remove("nav-colored1");
            document.getElementById('mynav').classList.add("nav-colored2");
            document.getElementById('mynav').classList.remove("nav-colored3");
            break;
        case 3:
            document.getElementById('mynav').classList.remove("nav-colored0");
            document.getElementById('mynav').classList.remove("nav-colored1");
            document.getElementById('mynav').classList.remove("nav-colored2");
            document.getElementById('mynav').classList.add("nav-colored3");
            break;
        default:
            document.getElementById('mynav').classList.remove("nav-colored0");
            document.getElementById('mynav').classList.remove("nav-colored1");
            document.getElementById('mynav').classList.remove("nav-colored2");
            document.getElementById('mynav').classList.remove("nav-colored3");
            break;
    }
}