const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 687.2000122070312){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active")
    }
});