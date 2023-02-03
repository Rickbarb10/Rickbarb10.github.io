const txtArea1 = document.querySelector('#textarea_1')
const txtArea2 = document.querySelector('#textarea_2')
const convertBtn = document.querySelector('button[data-trigger="css_to_js"]')


const convertCSStoJS = () => {
    let txtArea1Val = txtArea1.value
    if (txtArea1Val == '') txtArea2.value = 'Inserisci del codice nel riquadro superiore'
    let chunks = txtArea1Val.split('\n')
    chunks = chunks.map(ch => ch.slice(0, -1).split(':').map(str => str.trim()))
    chunksWithObjects = []
    chunks.forEach(chunk => {
        let chunkObj = {}
        if (!chunk[0].includes('-')) {
            chunkObj[chunk[0]] = chunk[1]
        } else {
            jsLikeKey = camelCaseFormatter(chunk[0])
            chunkObj[jsLikeKey] = chunk[1]
        }
        chunksWithObjects.push(chunkObj)
    });
    txtArea2.value = ''
    chunksWithObjects.forEach((element, i) => {
        let singleLine = ''
        if (i < chunksWithObjects.length - 1) {
            singleLine = `${Object.keys(element)}: '${Object.values(element)}',`
            txtArea2.value += singleLine + '\n'

        } else {
            singleLine = `${Object.keys(element)}: '${Object.values(element)}'`
            txtArea2.value += singleLine
        }
    });
}

if (convertBtn != null && convertBtn != undefined) {
    convertBtn.addEventListener('click', convertCSStoJS)
}