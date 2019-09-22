const slider = {
    default: {
        items: 3,
        speed: 500,
        slideMove: 1,
        easing: 'linear',
        loop: false,
        arrows: true,
        dots: false,
        responsive: []
    },
    init: function(el, settings = {...this.default}) {
        //Start initlizing properties of slider
        let options = {...this.default, ...settings}
        //End initlizing properties of slider

        //Start Add wrapper
        let wrapper = document.createElement('div')
        wrapper.classList.add('slider-container')
        el.classList.add('slider-track')
        el.parentNode.insertBefore(wrapper, el)
        wrapper.appendChild(el)
        //End Add wrapper

        //Start get Slides
        let slides = Array.from(el.children)
        slides.forEach(slide => {
            slide.classList.add('slide')
        })
        //End get Slides

        // Start give width to slides
        let parentWidth = wrapper.clientWidth * 3
        el.style.width = `${parentWidth}px`
        slides.forEach(slide => {
            slide.style.width = `${wrapper.clientWidth / options.items}px`
        })
        // End give width to slides

        //Start adding arrows
        if(options.arrows){
            //Start prev button
            let prevButton = document.createElement('button')
            let prevIcon = document.createElement('i')
            prevIcon.classList.add('fas','fa-angle-left')
            prevButton.appendChild(prevIcon)
            prevButton.classList.add('slides-buttons', 'slider-button-prev')
            wrapper.appendChild(prevButton)
            //End prev button
        }
        //End adding arrows
    }
}
export default slider