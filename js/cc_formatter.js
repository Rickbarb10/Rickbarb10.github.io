// Initial references

let inputFrom, inputTo, formatBtn

inputFrom = document.querySelector('#from_input')
inputTo = document.querySelector('#to_input')
formatBtn = document.querySelector('#format')

// Camel Case Formatter

const camelCaseFormatter = (fromEl, toEl) => {
    let value = fromEl.value.replace('__', '_')
    let words = value.split('_')
    console.log(words); // ANCHOR console.log
    let output = ''
    words.filter(word => word.trim() != '').forEach((el, i) => {

        if (i > 0) {
            let newWord = el[0].toUpperCase() + el.slice(1).toLowerCase()
            output += newWord
        } else {
            output += el
        }
    })
    inputTo.value = output
}
// camelCaseFormatter()

if (formatBtn != null && formatBtn != undefined) {
    formatBtn.addEventListener('click', () => {
        camelCaseFormatter(inputFrom, inputTo)
    })
}