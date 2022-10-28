function change_bg() {
    var Nav = document.querySelector("#navbar");

    if (scrollY <= 400){
        Nav.classList.remove("bgcolor");
        Nav.classList.add("container");
    }
    else{
        Nav.classList.remove("container");
        Nav.classList.add("bgcolor");
    }
}
window.addEventListener('scroll',change_bg);

var Btn = document.querySelector("#Btn") ;
function login(){
   if( scrollY >= 1300){
    Btn.style.display ="block";
} else {
    Btn.style.display ="none";
}
} 
window.onscroll = login;
Btn.onclick = function top() {
scroll(0,650);                      
}