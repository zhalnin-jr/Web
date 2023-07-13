function Changecolor() {
    let el2 = document.getElementById("el1");
    console.log(el2);
    el2.classList.toggle('chip')
}
let btn1 = document.getElementById("btn1");
console.log(btn1);
btn1.addEventListener('click',Changecolor)

function showName() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("nameOutput").innerText = "Ваше имя: " + name;
}
