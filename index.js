var drums = document.querySelectorAll(".drum");
//console.log(drums[0].classList[0]);
document.addEventListener("keypress", (press) => { 
    var name = press.key;
    handleKeyPress(drums[0].classList[0], name)
});




for (let i = 0; i < drums.length; i++) {
    document.getElementsByClassName(drums[i].classList[0])[0].addEventListener("click", () => { handleClick(drums[i].classList[0])});
    
}

// var images = {
//     "w drum": "images/tom1.png",
//     "a drum": "images/tom2.png",
//     "s drum": "images/tom3.png",
//     "d drum": "images/tom4.png",
//     "j drum": "images/snare.png",
//     "k drum": "images/crash.png",
//     "l drum": "images/kick.png"
// }

var sounds = {
    "w": "sounds/tom-1.mp3",
    "a": "sounds/tom-2.mp3",
    "s": "sounds/tom-3.mp3",
    "d": "sounds/tom-4.mp3",
    "j": "sounds/snare.mp3",
    "k": "sounds/crash.mp3",
    "l": "sounds/kick-bass.mp3"
}




function handleClick(drum) {
    //alert(drum,"been clicked");
    // alert(audio[drum]);
    var audio = new Audio(sounds[drum]);
    audio.play();
    
    
}

function handleKeyPress(drum, keyName) {
    //alert(keyName);
    var audio = new Audio(sounds[keyName]);
    audio.play();
}