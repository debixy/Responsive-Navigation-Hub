const hamburger = document.querySelector(".hamburger"); 

const mobileNavs = document.querySelector(".nav-menu"); 

 

hamburger.addEventListener("click", () => { 

    mobileNavs.classList.toggle("active"); 

}); 