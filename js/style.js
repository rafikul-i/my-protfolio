/**  ========================================Toggle style switcher ========================== */
const styleSwitcherToggle = document.querySelector('.style-shitcher-toggoler')
styleSwitcherToggle.addEventListener('click', function () {
    document.querySelector('.style-switcher').classList.toggle("open")
})

// hid style switcher on scroll
window.addEventListener('scroll', function () {
    if (document.querySelector('.style-switcher').classList.contains("open")) {
        document.querySelector('.style-switcher').classList.remove("open")
    }
})

/**  ========================================Text color style switcher ========================== */
const alternateStyles = document.querySelectorAll('.alternate-style')
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color == style.getAttribute('title')) {
            style.removeAttribute('disabled')
        } else {
        
            style.setAttribute('disabled', 'true')
        }
    })
}

/**  ========================================Theme light dark mode ========================== */
const dayNight = document.querySelector('.day-night');

dayNight.addEventListener('click', function () {
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
})
window.addEventListener('load', function () {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun')
    }
    else {
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})