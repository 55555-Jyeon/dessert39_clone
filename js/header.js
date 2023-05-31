Window.onload = function(){

    /* header */
    /* menu hover */
    const navbar = $('nav');
    const subMenu = document.querySelectorAll('.menu-bar>.menu .sub-menu');

    navbar.mouseenter(function(){
        subMenu.stop().animate({height: '300px'}, 300);
    })
}