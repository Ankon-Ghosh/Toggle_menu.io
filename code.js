let navtoggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu_bar");

navtoggle.addEventListener("click",function(){
    if(navtoggle.firstElementChild.classList.contains("fa-bars")){
        navtoggle.firstElementChild.classList.replace("fa-bars","fa-times");
    }
    else{
        navtoggle.firstElementChild.classList.replace("fa-times","fa-bars");
    }
    menu.classList.toggle("show_menu_bar")
}) 