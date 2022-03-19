export const spNav = () => {
    $('#menuSp').click(function () {
        $(".siteHeader__navList").slideToggle();
        $(".menu-trigger").toggleClass("active");
    })

    $('.siteHeader__navItemLink').click(function () {
        $(".siteHeader__navList").slideToggle();
        $(".menu-trigger").toggleClass("active");
    })
}