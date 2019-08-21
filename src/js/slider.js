let defaults = {
    items: 3,
    speed: 500,
    slideMove: 1,
    easing: 'linear',
    loop: false,
    arrows: true,
    dots: false,
    responsive: []
}
export default slider = (options = defaults) => {
    $(this).wrap("<div class=''></div>")
    let finalOptions = {...defaults, ...options}
    let slideWidth = slideWidth($(window).width(), finalOptions.items, this.children())
    $(this).width($(window).width() * 2)

    function slideWidth(windowWidth, itemsNumber, slides){
        $(slides).css('width', windowWidth/itemsNumber)
    }

    function prevSlides(slideWidth, items){

    }

    function nextSlides(slideWidth, items){
        
    }

    console.group('Status')
    console.log(this.children())
    console.log(finalOptions)
    console.groupEnd()
}