var lvl = 0;
const color = ["green", "red", "yellow", "blue"];
var randSeq = [];
const playAudio = ["./sounds/green.mp3",
                    "./sounds/red.mp3",
                    "./sounds/yellow.mp3",
                    "./sounds/blue.mp3",
                    "./sounds/wrong.mp3",];
var userSeq = [];

$(document).keydown(function (){
    if(lvl === 0){
        $("h1").text("Level "+lvl);
        nextSeq();
    }
});

$(".btn").on('click', function() {
    var userNo = this.id;
    userSeq.push(userNo);
    keyPress(userNo);
    check(userSeq.length);
});

function check(len){
    if(userSeq[len - 1] === randSeq[len - 1]){
        if(userSeq.length === randSeq.length){
            setTimeout(function(){
                nextSeq();
            },500);
        }
    } else{
        $("h1").text("Game Over, Press Any Key to Restart")
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        } ,300);
        audio = new Audio(playAudio[4]);
        audio.play();
        resetGame();
    }
}

function resetGame(){
    lvl = 0;
    randSeq = [];
    userSeq = [];
}

function nextSeq(){
    lvl++;
    userSeq = [];
    $("h1").text("Level "+lvl);
    var randNo = Math.floor(Math.random() * 4);
    randSeq.push(color[randNo]);
    var audio = new Audio(playAudio[randNo]);
    audio.play();
    keyPress(color[randNo]);
}

function keyPress(key){
    $("#"+key).addClass("pressed");
    setTimeout(function(){
        $("#"+key).removeClass("pressed");
    } ,150);
}