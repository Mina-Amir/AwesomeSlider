import slider from './slider'
document.addEventListener('DOMContentLoaded', () => {
    slider.init(document.querySelector('.carousel'), {items: 4, responsive:[{breakpoint: 800, settings: {items: 2}}]})
})