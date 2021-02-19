let inputNumber = document.querySelector('.images-number__input')
let btn = document.querySelector('.btn')
let resultDiv = document.querySelector('.images-number__result')

btn.addEventListener('click', () => {
    if (inputNumber.value > 10 || inputNumber.value < 1) {
        resultDiv.innerHTML = 'Число вне диапазона от 1 до 10'
    } else {
        console.log(inputNumber.value)
        xhrRequest(`https://picsum.photos/v2/list?limit=${inputNumber.value}`, elementModify)
    }
})

function xhrRequest(url, callback) {
    // Request to url and using response for callback(JSON.parse(response))
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)

    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.log('Response status: ', xhr.status)
        } else {
            let result = JSON.parse(xhr.response)
            callback(result)
            console.log('Success! The response is passed to the callback function.')
        }
    }

    xhr.onerror = function () {
        console.error('Error with status: ', xhr.status)
    }

    xhr.send()
}

function elementModify(ListOfObjects) {
    // Modified the elements innerHTML
    let resultHTML = ''
    ListOfObjects.forEach(object => {
        resultHTML += `<div class="card">
                        <div class="card__item">
                            <img src="${object['download_url']}" alt="" class="card__image">
                            <a href="${object['download_url']}" class="card__download"><img src="images/download.svg" alt="Download this picture" class="card__icon icon"></a>
                        </div>
                        <div class="card__author">${object['author']}</div>
                    </div>

`
    })
    resultDiv.innerHTML = resultHTML
}