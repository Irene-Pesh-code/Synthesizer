function playSound(keyCode) {
    let audio;

    if  (keyCode === '65') {
        audio = new Audio('sounds/path_to_sound_for_A.mp3');
    } else if (keyCode === '83') {
        audio = new Audio('sounds/path_to_sound_for_S.mp3');
    } else if (keyCode === '68') {
        audio = new Audio('sounds/path_to_sound_for_D.mp3');
    }
    if (audio) {
        audio.play();
    }
}

function handleKeyDown(event) {
    let keyElemrnt = document.querySelector('[data-key="' + event.keyCode + '"');
    if (keyElemrnt) {
        playSound(keyElement.dataset.key);
    }
}