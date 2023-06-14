const scrollBackround = document.getElementById("wrap_header");
const scrollButton1 = document.getElementById("button1");
const scrollButton2 = document.getElementById("button2");
const scrollButton3 = document.getElementById("button3");
const scrollButtonTop = document.getElementById("btn_top");
const scrollButtonStart = document.getElementById("btn_start");
const scrollButtonStartSub = document.getElementById("btn_start_sub");

window.addEventListener('scroll', function(){
    if(window.scrollY > 10){
        scrollBackround.style.backgroundColor = "white";
    } else if(window.scrollY < 10){
        scrollBackround.style.backgroundColor = "transparent";
    }
});

scrollButton1.addEventListener('click', () => {
    const location = document.querySelector("#con-text1").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
});

scrollButton2.addEventListener('click', () => {
    const location = document.querySelector("#con-text2").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
});

scrollButton3.addEventListener('click', () => {
    const location = document.querySelector("#con-text3").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
});

scrollButtonTop.addEventListener('click', () => {
    const location = document.querySelector(".container").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
});

scrollButtonStart.addEventListener('click', () => {
    const location = document.querySelector(".con-type").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
});

scrollButtonStartSub.addEventListener('click', () => {
    const location = document.querySelector(".con-type").offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
});