let title; 
title = document.querySelector("#Title_H1");
title.style.color = "magenta";

let paragraph;
paragraph = document.querySelector("#paragraph1");
paragraph.style.fontWeight = "bold";
paragraph.style.fontStyle = "italic";
paragraph.style.fontSize = "150%";

let picture;
picture = document.querySelector("#groundhog");
picture.src="sysel.jpg";

function move_square() {
    let square = document.querySelector(".ctverecek");
    square.style.marginLeft = "200px";
    square.style.transform = "rotate(90deg)";
}
