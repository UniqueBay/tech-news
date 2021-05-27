const btnHam = document.querySelector(".ham");
const btnTimes = document.querySelector(".times");
const navBar = document.getElementById("navbar");

btnHam.addEventListener("click", function () {
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add(".show-nav");
    }
})

btnTimes.addEventListener("click", function name() {
    if (btnHam.className !== "") {
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})