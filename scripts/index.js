

// DOM = Document Object Module
// JavaScript는 html 태그를 가져다가 객체로 만든다.

//console.log(title);
//console.dir(document);

const title = document.getElementById("title");

title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I on you now";

const query = document.querySelector("#title"); // ID로 찾으려면 #을 붙인다.

// JavaScript는 웹사이트에서 발생하는 이벤트에 반응하기 위해서 만들어졌다.

function handleResize(event){
    console.log(event);
} // event가 발생할때마다 log 호출

window.addEventListener("resize", handleResize);

// 자바스크립트는 로직만 처리하게 하고 싶다면?
const CLICKED_CLASS = "clicked";

function handleClick(){
    //const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKED_CLASS);
    console.log(title.classList);   
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
}

title.addEventListener("click", handleClick);
