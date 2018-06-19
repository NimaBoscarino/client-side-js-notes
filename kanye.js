let sounds = [
    'agh.wav',
    'dadada.wav',
    'heh.wav',
    'scream.wav',
]

let kanyes = document.querySelectorAll('.sound-list img')
kanyes.forEach((kanye, index) => {
    var audio = new Audio(sounds[index]);

    kanye.addEventListener('click', (e) => {
        audio.play();
    })
})