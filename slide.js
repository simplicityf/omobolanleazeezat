<<<<<<< HEAD
//variable

let thumb= document.getElementsByClassName("thumb");
let slider = document.getElementById("slider");

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
 // document.alert(maxScrollLeft);

 //autolay slider

 function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
 }

 let play = setInterval(autoPlay, 10);

 //pause slider on hover
 for(let i=0; i<thumb.length; i++){
    thumb[i].addEventListener("mouseover", () =>{
        clearInterval(play);
    })
    thumb[i].addEventListener("mouseout", () =>{
        return play = setInterval(autoPlay, 10);
    })
=======
//variable

let thumb= document.getElementsByClassName("thumb");
let slider = document.getElementById("slider");

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
 // document.alert(maxScrollLeft);

 //autolay slider

 function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
 }

 let play = setInterval(autoPlay, 10);

 //pause slider on hover
 for(let i=0; i<thumb.length; i++){
    thumb[i].addEventListener("mouseover", () =>{
        clearInterval(play);
    })
    thumb[i].addEventListener("mouseout", () =>{
        return play = setInterval(autoPlay, 10);
    })
>>>>>>> efd4cb135b1e04593075afda44f09100e6afced4
 }