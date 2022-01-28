// event.js
document.write('<h1 onclick="h1Click(event)"=>Hello</h1>');
document.write('<p>nice</p>');

function h1Click(e) {

    // 이벤트 핸들러.
    console.log('h1Click');
    console.log(e.target.style.backgroundColor = 'yellow');
}

function turnOnFnc() {
    var img = document.getElementsByTagName('img');
    // HTMLCollection -> 배열처럼 여러개의 요소.
    console.log(img[0].src = 'https://www.w3schools.com/js/pic_bulbon.gif');
}

function turnOfFnc() {
    var img = document.getElementsByTagName('img');
    console.log(img[0].src = 'https://www.w3schools.com/js/pic_bulboff.gif');
}

var btns = document.getElementsByTagName('button');
console.log(btns);
btns[0].onmouseover = turnOnFnc;
btns[1].onmouseover = turnOfFnc;

var colorbtn = document.getElementsByClassName('color')
console.log(colorbtn);

colorbtn[0].onclick = changeColorFnc;
colorbtn[1].onclick = changeColorFnc;
colorbtn[2].onclick = changeColorFnc;

function changeColorFnc(e) {
    console.log(e.target.innerText);
    var show = document.getElementById('show');
    show.style.backgroundColor = e.target.innerText;
}