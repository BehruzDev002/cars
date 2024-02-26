

const sidebar = document.querySelector('.sidebar')
const btn = document.querySelector('.sidebar__btn')
const list = document.querySelector('.sidebar')
btn.addEventListener('click', function () {
    sidebar.classList.toggle('shown_sidebar')
    sidebar.style.transform = "translateY(12%)"
    list.classList.toggle('none')
    list.classList.toggle('flex')
})
