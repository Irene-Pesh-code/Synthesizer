function playSound(keyCode) {
    let audio;

    if  (keyCode === '81') {
        audio = new Audio('sounds/Emin-Blue-Christmas-for-Q.mp3');
    } else if (keyCode === '87') {
        audio = new Audio('sounds/Iamalex-Meadow-for-W.mp3');
    } else if (keyCode === '69') {
        audio = new Audio('sounds/path_to_sound-for-E.mp3');
    } else if (keyCode === '82') {
        audio = new Audio('sounds/path_to_sound-for-R.mp3');
    } else if (keyCode === '54') {
        audio = new Audio('sounds/path_to_sound-for-T.mp3');
    } else if (keyCode === '89') {
        audio = new Audio('sounds/path_to_sound-for-Y.mp3');
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