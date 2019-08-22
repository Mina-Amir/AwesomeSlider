var event = new Event('initSlider');
function Slider(e){
    console.log(e.target)
}
document.getElementById('test').addEventListener('initSlider' , Slider)
document.getElementById('test').dispatchEvent(event);