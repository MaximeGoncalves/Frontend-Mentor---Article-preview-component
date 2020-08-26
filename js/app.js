let button = document.querySelector('#share')
let footer = document.querySelector('.card__footer')
let profile = document.querySelector('.profile__content')
let share = document.querySelector('.share')
button.addEventListener('click', () => {
    if(window.screen.width > 765){
        share.style.opacity = "1"
    }
    else{
        footer.classList.add('active')
        profile.classList.add('d-none')
        share.classList.remove('d-none')
    }

})