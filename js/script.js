let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
})

// ---------------------------------------------------------------------------------

let sections = document.querySelectorAll("section");

let navliks = document.querySelectorAll("header nav a");

window.addEventListener('scroll',()=>{
    sections.forEach((sec)=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top>=offset && top<offset+height){
            navliks.forEach((link)=>{
                link.classList.remove("active");
                document.querySelector('header nav a[href*='+ id +']').classList.add("active");
            })
        }
    })


    let header = document.querySelector('.header');
    header.classList.toggle("sticky",window.scrollY>100);


    menuIcon.classList.remove("bx-x");
    navbar.classList.remove('active');

})


// -------------------------------------------------------------------

let darkMode = document.querySelector("#darkMode-icon");

darkMode.addEventListener('click',()=>{
    darkMode.classList.toggle("bx-sun");
    document.body.classList.toggle('dark-mode');
   
})

// ---------------------------------------------------------------------
