function changecolour(x) {
    x.style.backgroundColor = '#007070';
}

function revertcolour(x) {
    x.style.backgroundColor = 'aqua';
}

function enlargeimage(x) {
    x.style.height = '150px';
    x.style.width = '150px';
}

function revertimage(x) {
    x.style.height = '100px';
    x.style.width = '100px';
}

function inserttable() {
    var n = document.getElementById("namebox").value;

    var s = document.getElementById("skill").value;

    var l = document.getElementById("level").options[document.getElementById("level").selectedIndex].value;

    if (n == "" || s == "") {
        document.getElementById("errormsg").innerHTML = "Please fill out all the fields";
    } else {
        document.getElementById("datable").innerHTML += ("<tr><td>" + n + "</td><td>" + s + "</td><td>" + l + "</td></tr>");
        document.getElementById("errormsg").innerHTML = "";
    }
}

var current = 1;
var imagearr = [];
imagearr = document.getElementsByClassName("slideshow-imges");

for (var i = 1; i < 5; i++) {
    imagearr[i].style.display = "none";
}


function changeimg() {
    current++;
    display(current);
}

function display(n) {
    // alert("gonna show next image");
    if (n > 5) {
        current = 1;
    }
    for (var i = 0; i < 5; i++) {
        imagearr[i].style.display = "none";
    }
    imagearr[current - 1].style.display = "block";
};

// window.onscroll = function() {
//     alert("did scroll work?");
//     stickbar();
// };

// var nbar = document.getElementById("temp");
// var pos = nbar.offsetTop;

// function stickbar() {
//     // alert("Im trying");
//     if (window.pageYOffset >= pos) {
//         nbar.classList.add("stick_bar");
//     } else {
//         nbar.classList.remove("stick_bar");
//     }
// }