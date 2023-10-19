const menuBtn = document.querySelector("#abt-m-btn");
const navigation = document.querySelector("#abt-n");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll("#abt-nav-b");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll("#abt-cont");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");

    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    currentYOffset = self.pageYOffset;
    initYOffset = currentYOffset;

    var intervalId = setInterval(function () {
        currentYOffset -= initYOffset * 0.05;
        document.body.scrollTop = currentYOffset;
        document.documentElement.scrollTop = currentYOffset;

        if (self.pageYOffset == 0) {
            clearInterval(intervalId);
        }
    }, 15);

} 