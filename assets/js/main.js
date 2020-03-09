/**
 * Main JS file of the template
 * 
 * Poto - Portfolio template
 * By frontSoldier
 */

 var command = document.querySelector('.command');
 var icon = document.querySelector('.command i');
 var longMenu = document.querySelector('header .nav-menu');
 // var menuLink = document.querySelector('nav ul li a');

 command.onclick = function() {
     if(icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-close');
        longMenu.style.width = "135px";
        longMenu.style.visibility = "visible";
     } else {
        icon.classList.replace('fa-close', 'fa-bars');
        longMenu.style.width = "0";
        longMenu.style.visibility = "hidden";
     }
 }