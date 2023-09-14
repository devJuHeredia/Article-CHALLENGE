const shareBtn = document.querySelector('.card_share_button');
const carIcons = document.querySelector('.card_icons');

shareBtn.addEventListener('click', ()=>{
    carIcons.classList.toggle('show')
});