let sounds = [
    'agh.wav',
    'dadada.wav',
    'heh.wav',
    'scream.wav',
    // strong.wav
]

let kanyes = document.querySelectorAll('.sound-list img')
kanyes.forEach((kanye, index) => {
    var audio = new Audio(sounds[index]);

    kanye.addEventListener('click', (e) => {
        audio.play();
    })
})

let newSoundButton = document.querySelector('#new-sound')
newSoundButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    let imagePath = document.querySelector('input[name=kanye-image]')
    let soundPath = document.querySelector('input[name=kanye-sound]')

    newImage = document.createElement('img')
    newImage.src = imagePath.value

    let kanyeContainer = document.querySelector('.sound-list')
    kanyeContainer.appendChild(newImage)

    var audio = new Audio(soundPath.value);
    newImage.addEventListener('click', (e) => {
        audio.play();
    })
})