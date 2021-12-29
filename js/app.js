const looking = document.querySelector('#looking')
const removed = document.querySelector('#removed')
const unavailable = document.querySelector('#unavailable')
const img = document.querySelector('img')
const logo = document.querySelector('#logo')

removed.addEventListener('mouseenter', (e) => {
    logo.classList.add('is-removed')
    e.stopPropagation()
})
removed.addEventListener('mouseleave', (e) => {
    logo.classList.remove('is-removed')
    e.stopPropagation()
})
unavailable.addEventListener('mouseenter', (e) => {
    logo.classList.add('is-unavailable')
    e.stopPropagation()
})
unavailable.addEventListener('mouseleave', (e) => {
    logo.classList.remove('is-unavailable')
    e.stopPropagation()
})
looking.addEventListener('mouseenter', (e) => {
    img.classList.add('is-active')
    e.stopPropagation()
})
looking.addEventListener('mouseleave', (e) => {
    img.classList.remove('is-active')
    e.stopPropagation()
})