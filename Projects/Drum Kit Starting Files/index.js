var array = document.querySelectorAll('.drum');

for (let i = 0; i < array.length; i++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        var buttonInnerHTML = this.innerHTML;

        playAudio(buttonInnerHTML);

        playAnimation(buttonInnerHTML);


    });
}

document.addEventListener('keypress' , function(event){
playAudio(event.key);

playAnimation(event.key);

});

function playAudio(key) {

    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            console.log(key + " is pressed");
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/crash.mp3');
            console.log(key);
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            console.log(key);
            break;

        case "d":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            console.log(key);
            break;

        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            console.log(key);
            break;

        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            console.log(key);
            break;

        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            console.log(key);
            break;

        default:
            break;
    }
}

function playAnimation(key) {
var animationClass = document.querySelector('.' + key);
animationClass.classList.add('pressed');
setTimeout(function() {
    animationClass.classList.remove('pressed');    
}, 100);
}