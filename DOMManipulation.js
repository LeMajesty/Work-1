document.getElementById("container");
document.querySelector("#container");
document.getElementsByClassName("second");
document.querySelector("ol .third");

let foundDiv = document.querySelector("#container");
foundDiv.innerText = "Hello";

let footer = document.querySelector("footer");
footer.classList.add("main");

let newLi = document.createElemtent("li");

newLi.innerText = "four"

let list = document.querySelector("ul");
list.appendChild(newLi);

let liInside01 = document.querySelectorAll("ol li");
for(let i = 0; i < liInside01.length; i++){
    liInside01[i].computedStyleMap.backgroundColor ="green";
}

let footer = document.querySelector(".footer");
footer.remove();