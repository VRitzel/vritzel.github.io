
const header = document.querySelector(".header");
const hamburguer = document.getElementsByClassName("header__hamburguer");
let i;
let backgroundActive = true;

window.onscroll = () => {
    console.log(window.scrollY);
    if(window.scrollY > 50){
        header.style.backgroundColor = "black";
        header.style.transition = "all 0.5s ease-in-out";
    }
    else{
        header.style.backgroundColor = "transparent";
    }
};

for(i = 0; i < hamburguer.length; i++){
    hamburguer[i].addEventListener("click", function(){
        let hamburguerContent = this.previousElementSibling;

        this.classList.toggle("header__hamburguer-active");
        console.log(hamburguerContent)
        if(window.getComputedStyle(hamburguerContent).display === "none"){
            hamburguerContent.style.display = "flex";
        }
        else{
            hamburguerContent.style.display = "none"
        }
    });
}