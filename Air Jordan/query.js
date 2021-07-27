// JQUERY //

$(document).ready(function(){

    // ===== NAVBAR ===== //
    $('#fixed-toggle').click(function(){
        $('#navbar').toggleClass('show-menu');
        $('.submenu').hide();
        $('.nav-dropdown-icon').removeClass('rotate');
    });

    $('.nav-links:not(.dropbtn), .nav-dropdown-item').click(function(){
        $('#navbar').removeClass('show-menu');
        $('#menuz').removeClass('open');
    });

    $('#navbar').mouseleave(function(){
        $('.submenu').hide();
        $('.nav-dropdown-icon').removeClass('rotate');
    });
    




    // ===== DROP NAV BAR ===== //
    $('.dropbtn').click(function(){
        $(this).next('.submenu').slideToggle(300);
        $(this).find('.nav-dropdown-icon').toggleClass('rotate');
    });





    // ===== DARK MODE TOGGLE ===== //
    $('#checkbox').change(function(){
        $('body').toggleClass('dark-mode');
    });





    //  ===== ANIMATED BURGER MENU ===== //
    $('#menuz').click(function(){
        $(this).toggleClass('open');
    });





    // ===== LOGIN AND SIGN UP ===== //
    $('#login').click(function(){
        $('.form').addClass('login-active');
    });

    $('.sign-up-btn').click(function(){
        $('.form').addClass('signup-active').removeClass('login-active');
    });

    $('.already').click(function(){
        $('.form').addClass('login-active').removeClass('signup-active');
    });

    $('.close-form').click(function(){
        $('.form').removeClass('login-active').removeClass('signup-active');
    });

});





// VANILLA JS //

// ===== LINK ACTIVE ===== //
const linkKulay = document.querySelectorAll('.nav-links',);

function colorLink() {
    linkKulay.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkKulay.forEach(l => l.addEventListener('click', colorLink))