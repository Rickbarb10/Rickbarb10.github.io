let doc = document.documentElement
let body = document.body
let modeSwitcher = document.querySelector('[data-switcher]')

const changeMode = () => {
    if (doc.getAttribute('data-theme') == 'light') {
        doc.setAttribute('data-theme', 'dark')
    } else {
        doc.setAttribute('data-theme', 'light')
    }
}
// changeMode()

if (modeSwitcher) {
    modeSwitcher.addEventListener('click', (e) => {

        if (e.target.firstElementChild.name == 'moon') {
            e.target.firstElementChild.name = 'sunny'
        } else {
            e.target.firstElementChild.name = 'moon'
        }

        changeMode()
    })
}