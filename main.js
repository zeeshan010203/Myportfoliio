var typed = new Typed(".text", {
    strings: ["Web developer" ,"Game Developer", "Infrastructure"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
document.getElementById("toggleButton").onclick = function() {
    var englishContent = document.getElementById("englishContent");
    var japaneseContent = document.getElementById("japaneseContent");

    if (englishContent.style.display === "none") {
        englishContent.style.display = "block";
        japaneseContent.style.display = "none";
        document.getElementById("toggleButton").textContent = "Switch to Japanese";
    } else {
        englishContent.style.display = "none";
        japaneseContent.style.display = "block";
        document.getElementById("toggleButton").textContent = "Switch to English";
    }
};
document.querySelector('.square').addEventListener('dblclick', function () {
    document.querySelector('.navbar').classList.toggle('active');
});