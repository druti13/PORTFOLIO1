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

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu items click
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
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

    // Form submission handling
    $('#contact-form').submit(function(e){
        e.preventDefault(); // Prevent default form submission
        
        // Get form data
        let formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };
        
        // Replace with your form submission logic (e.g., AJAX)
        console.log(formData); // For testing purposes
        
        // Optionally, clear form fields after submission
        $('#name').val('');
        $('#email').val('');
        $('#subject').val('');
        $('#message').val('');
    });
});

// Function to download CV
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1Y_YEDT-_Q0rL7pFkvLZsB5mqjo85c6DV/view';
    link.download = 'Druti_Choudhury_CV.pdf';
    link.click();
}
