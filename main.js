//header menu icon animation
let menuIcon = document.querySelector(".icon")
let spans = document.querySelectorAll(".icon span")
let ul = document.querySelector("ul")


function menuIconAnimation() {
    spans.forEach(function (span) {
        span.classList.toggle("active")
    })
}
function ulTranslate() {
    ul.classList.toggle("active")
}
menuIcon.addEventListener("click", menuIconAnimation)
menuIcon.addEventListener("click", ulTranslate )