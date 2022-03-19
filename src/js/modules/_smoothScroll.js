export const smoothScroll = () => {
  $('a[href^="#"]').on("click", e => {
    let speed = 600;
    let href = $(e.currentTarget).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    let navHeight = $('.siteHeader').outerHeight(true);
    console.log(navHeight);
    position = position - navHeight;
    $("body, html").delay(200).animate({ scrollTop: position }, speed, "swing");
    return false;
  });
};