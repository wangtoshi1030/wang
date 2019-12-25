

console.log(123);

$(function(){
    $(".slick").slick({
        infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    // cssEase: 'linear',
    pauseOnHover: false,
    arrows:false,
    })
})