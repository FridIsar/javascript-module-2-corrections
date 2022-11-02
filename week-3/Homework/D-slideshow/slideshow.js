// Write your code here

setInterval(() => {
    let newIndex = setNextIndex(findIndex())
    showImage(newIndex)
}, 10000)


autoPreviousBtn.addEventListener('click', () => {
autoPrevious()
})
autoNextBtn.addEventListener('click', () => {
autoNext()
})




