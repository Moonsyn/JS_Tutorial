let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable = "Bob";

if(myVariable === "Bob"){
    alert("The Variable name is Bob");
}else{
    alert("No, You're not Bob!");
}

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

document.querySelector('html').onclick = function(){
    alert('Poke Poke Poke!');
}

let webImage = document.querySelector('img');
webImage.onclick = function(){
    let mySrc = webImage.getAttribute('src');
    if(mySrc === 'images/world_wide_web.jpg'){
        webImage.setAttribute('src', 'images/html.png');
    }else{
        webImage.setAttribute('src','images/world_wide_web.jpg');
    }
}