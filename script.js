$(document).ready(function(){
    //Navbar Nav-items from top bar added here
    var find_dealer = "<li class='nav-item'><a class='nav-link' href='#'>Find Dealer</a></li>"
      $(find_dealer).insertAfter(".navbar-nav:first-child .nav-item:last-child");
    var call_assist = "<li class='nav-item'><a class='nav-link' href='#'>Call <span class='text-blue'>1800 209 8282</span> For Any Assistance</a></li>"
    $(call_assist).insertAfter(".navbar-nav:first-child .nav-item:last-child");
});