const toggle=document.querySelector(".toggle");
const navbar=document.querySelector(".navbar-menu");
const icon=document.querySelector(".fa-solid");

toggle.addEventListener("click", function(){
    navbar.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
})

const nav = document.querySelector("nav");
const app = document.querySelector("#up");
window.addEventListener("scroll", function(){
    if (window.scrollY >= 650) {
        nav.style.backgroundColor="#ddd";
    }else {
        nav.style.backgroundColor="";
    }


    // if (window.scrollY >= 800) {
    //     up.classList.add("active");
    // } else {
    //     up.classList.remove("active");
    // }

    // if (this.window.screenY >=800) up.classList.add("active");
    // else up.classList.remove("active");


    // codition ? true : false
    window.scrollY >=800 ? up.classList.add("active") : up.classList.remove("active");
})


up.onclick= () => {
    window.scrollTo({
        behavior: "smooth",
        top: 0,
    })
}