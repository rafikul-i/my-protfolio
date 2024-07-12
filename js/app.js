/**==============================Typing Animation ============================== */
var typed = new Typed('.typing', {
    strings: ["", "Web designer", "Web Developar", "Graphic Designer", "Youtob"],
    typeSpeed: 100,
    BackSpreed: 60,
    loop: true,
})


/**============================== Aside ============================== */

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavlist = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
for (i = 0; i < totalNavlist; i++) {
    const a = navList[i].querySelector('a')

    a.addEventListener('click', function (e) {
       removeBackSection()
        for (j = 0; j < totalNavlist; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                // console.log('back-section'+ navList[j].querySelector('a'))
                // allSection[j].classList.add('back-section')
                addBackSection(j)
            }

            navList[j].querySelector('a').classList.remove('active')
        }
        this.classList.add('active')
        showSection(this)
        if (window.innerWidth < 1200) {
            asideSectionBtn()
        }
    })
}
function removeBackSection(){
    for (i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section')
    }
}
function addBackSection(j){
    allSection[j].classList.add('back-section')
}
function showSection(element) {
    for (i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active')
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active')

}



document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index')
    showSection(this)
    updateNave(this)
    removeBackSection()
    addBackSection(sectionIndex)
})

function updateNave(element) {
    // console.log(element.getAttribute('href').split('#')[1])
    for (let i = 0; i < totalNavlist; i++) {
        navList[i].querySelector('a').classList.remove('active')
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active')
        }
    }

}
/**============================== Nav Togglar ============================== */
const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', function () {
    asideSectionBtn();
})

function asideSectionBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open')
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open')
    }
}