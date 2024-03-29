// Add click event listeners to all drum buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var ch = this.innerHTML;
        playSoundAndShake(ch);
    });
}

// Function to play sound and apply shake effect
function playSoundAndShake(ch) {
    playSound(ch); // Play sound
    var button = document.querySelector("." + ch); // Select corresponding button
    // Add shake effect
    button.classList.add("shake");
    // Remove shake effect after 500 milliseconds
    setTimeout(() => {
        button.classList.remove("shake");
    }, 500);
}

// Function to play sound based on button clicked or key pressed
function playSound(ch) {
    var audio;
    switch (ch) {
        case 'a':
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case 's':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'f':
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/crash.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/snare.mp3");
            break;
    }
    // If audio is defined, play it
    if (audio) {
        audio.play();
    }
}

// Add keypress event listener to document
document.addEventListener("keypress", function(event) {
    var ch = event.key.toLowerCase();
    playSoundAndShake(ch);
});
