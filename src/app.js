const tabs = document.querySelectorAll('.tabs a')

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function () {

        const li = this.parentNode
        const div = this.parentNode.parentNode.parentNode;

        if (this.parentNode.classList.contains('active')) {
            return false
        }
        div.querySelector('.tabs .active').classList.remove('active')
        li.classList.add('active')

        div.querySelector('.tab-content.active').classList.remove('active')
        div.querySelector(this.getAttribute('href')).classList.add('active')
    })
}