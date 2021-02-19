const inputPage = document.querySelector('.image-content__input1')
const inputImages = document.querySelector('.image-content__input2')
const inputButton = document.querySelector('.image-content__button')
let resultDiv = document.querySelector('.result')

inputButton.addEventListener('click', () => {
    debugger
    if ((inputPage.value < 1 || inputPage.value > 10 || isNaN(inputPage.value)) && (inputImages.value < 1 || inputImages.value > 10 || isNaN(inputImages.value))) {
        resultDiv.innerHTML = 'Page number and limit out of range 1 to 10'
    } else {
        if (inputPage.value < 1 || inputPage.value > 10 || isNaN(inputPage.value)) {
            resultDiv.innerHTML = 'Page number out of range 1 to 10'
        } else if (inputImages.value < 1 || inputImages.value > 10 || isNaN(inputImages.value)) {
            resultDiv.innerHTML = 'Limit out of range from 1 to 10'
        } else {
            debugger
            useRequest(`https://picsum.photos/v2/list?page=${inputPage.value}&limit=${inputImages.value}`, buildResultNode)
        }
    }
})

function useRequest(url, callback) {
    debugger
    fetch(url)
        .then(response => response.json())
        .then(json => {
            debugger
            callback(json)
            })
}

function buildResultNode(json) {
    debugger
    console.log(json)
    let counter = json.length
    let resultNode = ``
    while (counter > 0) {
        let templateNode = `<div class="result__item"><img src="${json[`${counter-1}`].download_url}" alt="" class="result__image"></div>`
        debugger
        resultNode += templateNode
        counter--
    }
    resultDiv.innerHTML = resultNode
    localStorage.resultDiv = resultNode
}

window.addEventListener('load', () => {
    if (localStorage.resultDiv) {
        debugger
        resultDiv.innerHTML = localStorage.resultDiv
    }
})