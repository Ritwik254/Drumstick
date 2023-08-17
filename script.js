//We are trying to know the key pressed in keyboard so we are using window to add event listener
window.addEventListener('keydown',(e)=>{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio)return;
    audio.currentTime =0;
    audio.play();
    const item=document.querySelector(`div[data-key="${e.keyCode}"]`)
    item.classList.add('playing');
    
})

window.addEventListener('keyup',(e)=>{
    document.querySelectorAll(`div[data-key="${e.keyCode}"]`)
    .forEach(element=>{
        element.classList.remove('playing');
    })
})

