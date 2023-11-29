window.onload = navbar;

function navbar () {
    var $nav1 = $(".navbar-fixed-top");
    $nav1.toggleClass('scrolled', $(this).scrollTop() > $nav1.height());
    var $nav2 = $(".navbar-default .navbar-brand");
    $nav2.toggleClass('scrolled', $(this).scrollTop() > $nav1.height());
    var $nav3 = $(".navbar-default .navbar-nav");
    $nav3.toggleClass('scrolled', $(this).scrollTop() > $nav1.height());
    var $nav4 = $(".navbar-default .navbar-toggle");
    $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav1.height());
};

$(function () {
    $(document).scroll(navbar);
});