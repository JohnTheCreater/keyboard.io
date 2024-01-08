
function playsound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime=0;    
    audio.play()
    
    key.classList.add("playing");

    setTimeout(() => {
        key.classList.remove("playing");
    }, 300);
}
// function removeTransition(e){
//     if (e.propertyName !=='transform') return;
    
//     console.log(e.propertyName);
//     e.target.classList.remove('playing');
// }

// const keys=document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener("transitionend",removeTransition));
// keys.forEach(key => key.addEventListener("animationend", removeTransition));


window.addEventListener("keydown",playsound);
