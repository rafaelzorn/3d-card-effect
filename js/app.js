const card = document.querySelector('.card')
const container = document.querySelector('.container')
const name = document.querySelector('.name')
const hero = document.querySelector('.hero img')
const description = document.querySelector('.container-information p')
const information = document.querySelector('.information')

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'
    name.style.transform = 'translateZ(90px)'
    hero.style.transform = 'translateZ(150px) rotateZ(-45deg)'
    description.style.transform = 'translateZ(75px)'
    information.style.transform = 'translateZ(50px)'
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    name.style.transform = 'translateZ(0px)'
    hero.style.transform = 'translateZ(0px) rotateZ(0deg)'
    description.style.transform = 'translateZ(0px)'
    information.style.transform = 'translateZ(0px)'
});