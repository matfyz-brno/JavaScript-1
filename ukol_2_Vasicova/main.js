let paragraph = document.querySelector("p");

function change_color(){
    paragraph.classList.toggle("text_color");
}

function get_bigger(){
    paragraph.classList.toggle("text_size");
}

let my_player = document.querySelector(".my_player");

function play_music(){
    my_player.play();
}

function pause_music(){
    my_player.pause();
}

function restart_music(){
    my_player.currentTime = 0;
}

function min_music(){
    my_player.volume = 0;
}

function normal_music(){
    my_player.volume = 0.5;
}

function max_music(){
    my_player.volume = 1;
}