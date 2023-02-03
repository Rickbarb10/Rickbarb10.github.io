// Initial references

let inputFrom, inputTo, formatBtn

inputFrom = document.querySelector('#from_input')
inputTo = document.querySelector('#to_input')
formatBtn = document.querySelector('#format')

// Camel Case Formatter

const camelCaseFormatter = (fromEl, toEl = null) => {
    let value
    if (fromEl.value != null && fromEl.value != undefined && fromEl.value != '') {
        value = fromEl.value.replace('__', '_')
    } else {
        value = fromEl.replace('__', '_')
    }

    let words = value.split(/-|_/gm)

    let output = ''
    words.filter(word => word.trim() != '').forEach((el, i) => {

        if (i > 0) {
            let newWord = el[0].toUpperCase() + el.slice(1).toLowerCase()
            output += newWord
        } else {
            output += el
        }
    })
    // inputTo.value = output
    return output
}
// camelCaseFormatter()

if (formatBtn != null && formatBtn != undefined) {
    formatBtn.addEventListener('click', () => {
        inputTo.value = camelCaseFormatter(inputFrom, inputTo)
    })
}