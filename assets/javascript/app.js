const screenshotSlide = document.querySelector('.screenshot-slide')
const screenshotImages = document.querySelectorAll('.screenshot-slide img')

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1;
const size = screenshotImages[0].clientWidth

screenshotSlide.style.transform = 'translateX(' +  (-size * counter) + 'px)'    

nextBtn.addEventListener('click', function(){
    if (counter >= screenshotImages.length -1){
        return;
    }
    screenshotSlide.style.transition = "transform 0.4s ease-in-out"
    counter++
    screenshotSlide.style.transform = 'translateX(' +  (-size * counter) + 'px)'    
})

prevBtn.addEventListener('click', function(){
    if (counter <= 0){
        return;
    }
    screenshotSlide.style.transition = "transform 0.4s ease-in-out"
    counter--
    screenshotSlide.style.transform = 'translateX(' +  (-size * counter) + 'px)'    
})

screenshotSlide.addEventListener('transitionend', function(){
    if (screenshotImages[counter].id === 'lastImg'){
        screenshotSlide.style.transition = "none"
        counter = screenshotImages.length -2;
        screenshotSlide.style.transform = 'translateX(' +  (-size * counter) + 'px)'    
    }

    if (screenshotImages[counter].id === 'firstImg'){
        screenshotSlide.style.transition = "none"
        counter = screenshotImages.length - counter;
        screenshotSlide.style.transform = 'translateX(' +  (-size * counter) + 'px)'    
    }
})