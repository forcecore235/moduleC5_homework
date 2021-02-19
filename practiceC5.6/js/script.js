const btn = document.querySelector('.image-size__button')
const inputValue1 = document.querySelector('.image-size__input1')
const inputValue2 = document.querySelector('.image-size__input2')
const resultDiv = document.querySelector('.result')

btn.addEventListener('click', () => {
    if (inputValue1.value > 300 || inputValue1.value < 100 || isNaN(inputValue1.value) || inputValue2.value > 300 || inputValue2.value < 100 || isNaN(inputValue2.value)) {
        resultDiv.innerHTML = 'Одно из чисел вне диапазона от 100 до 300'
        console.log('input values',inputValue1, inputValue2)
    } else {
        useRequest(`https://picsum.photos/${inputValue1.value}/${inputValue2.value}`)
        console.log('worked!')
    }
})

function useRequest(url) {
    fetch(url)
        .then((response) => resultDiv.innerHTML = `<img src="${response.url}" alt="">`)
}