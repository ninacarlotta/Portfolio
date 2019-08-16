document.addEventListener("DOMContentLoaded", function (event) {
    // menu mobile
    var mobileMenuButton = document.querySelector('.mobile-menu-button')
    var navigation = document.querySelector('.main-nav')
    mobileMenuButton.addEventListener('click', function () {
        mobileMenuButton.classList.toggle('active')
        navigation.classList.toggle('visible')
    })

    // scroll effects
    navigation.addEventListener('click', function (e) {
        if (e.target.classList[0].includes('main-nav__item')) {
            var classes = e.target.classList
            var item = classes[1].split('-')[0]
            var section = document.querySelector('#' + item)
            section.scrollIntoView({behavior: "smooth"})
        }
    })

    // scroll effect arrow
    var arrow = document.querySelector('.downarrow')

    arrow.addEventListener('click', function (e) {
        var projects = document.querySelector('#projects')
        projects.scrollIntoView({behavior: "smooth"})
    })

    var nextone = document.querySelector('.nextone')

    nextone.addEventListener('click', function (e) {
        var project2 = document.querySelector('#project2')
        project2.scrollIntoView({behavior: "smooth"})
    })

    var nexttwo = document.querySelector('.nexttwo')

    nexttwo.addEventListener('click', function (e) {
        var project3 = document.querySelector('#project3')
        project3.scrollIntoView({behavior: "smooth"})
    })


})
