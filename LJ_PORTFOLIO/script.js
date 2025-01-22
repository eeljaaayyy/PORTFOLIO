$(document).ready(function(){
    // Sticky navbar on scroll
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    // Scroll-up button action
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
    
    // Smooth scroll on menu items click
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation
    var typed = new Typed(".typing", {
        strings: ["Student", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Student", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel setup
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // 1. Dynamically Update Content Using innerHTML
    document.getElementById("update-content-btn").addEventListener("click", function() {
        document.getElementById("about-me-description").innerHTML = "Hello, I'm LJ! I am a passionate student, designer, and developer. Welcome to my portfolio.";
    });

    // 2. Use getElementById to Manipulate Specific Elements (Show/Hide Skills)
    document.getElementById("show-skills-btn").addEventListener("click", function() {
        var skillsSection = document.getElementById("skills");
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
            this.textContent = "Hide Skills"; // Change button text
        } else {
            skillsSection.style.display = "none";
            this.textContent = "Show Skills"; // Change button text back
        }
    });

    // 3. Create Events Using addEventListener (Alert on Project Click)
    document.getElementById("project-1").addEventListener("click", function() {
        alert("You clicked on Project 1!");
    });

    document.getElementById("project-2").addEventListener("click", function() {
        alert("You clicked on Project 2!");

    
    });

});
