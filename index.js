var button = document.querySelectorAll("button").length

for (i = 0; i < button; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var innerhtml = this.innerHTML;
        makesound(innerhtml);
        buttons(innerhtml);
    });
};
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttons(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        default:
            break;
    }
}
function buttons(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+ currentKey).classList.remove("pressed")
    } , 1);
};