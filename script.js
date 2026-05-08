const btnShare = document.querySelector('.btn-share')
const wrapperShare = document.querySelector('.wrapper-share')

btnShare.addEventListener('click' , () => {
    wrapperShare.classList.toggle('is-active')
    btnShare.classList.toggle('is-active')
})