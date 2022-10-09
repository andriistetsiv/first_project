(function () {
const burger =  document?.querySelector('.burger');
const navbar =  document?.querySelector('.navbar');
const body = document.body
const navItems = navbar?.querySelectorAll('a')

burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll')
    burger?.classList.toggle('burger--active');
    navbar.classList.toggle('navbar--visible');
});

navItems. forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll')
        burger?.classList.remove('burger--active');
        navbar.classList.remove('navbar--visible');
    })
})
})()
