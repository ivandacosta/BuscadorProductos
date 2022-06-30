const productos = [
    {
        nombre: "aguila brownie",
        precio: 120,
        img: "../img/aguilabrownie.jpg",
    },
    {
        nombre: "aguila clasica",
        precio: 110,
        img: "../img/aguilaclasica.jpg",
    },
    {
        nombre: "bonobon",
        precio: 100,
        img: "../img/bonobon.jpg",
    },
    {
        nombre: "block",
        precio: 150,
        img: "../img/coflerblock.jpg",
    },
    {
        nombre: "guaymallen",
        precio: 90,
        img: "../img/guaymallenchocolate.jpg",
    },
    {
        nombre: "milka",
        precio: 115,
        img: "../img/milkamouse.jpg",
    },
    {
        nombre: "pepitos",
        precio: 125,
        img: "../img/pepitos.jpg",
    },
    {
        nombre: "milka oreo",
        precio: 115,
        img: "../img/terrabusidulcedeleche.jpg",
    },
    
];




 let selectorjs = document.querySelector(".selectorjs")


 let button = document.getElementById("button")
 let searcher = document.getElementById("searcher")
 
button.addEventListener("click",() =>{
    
    const search = productos.find((el) => el.nombre === searcher.value)

    selectorjs.innerHTML = `<img src="${search.img}" alt="">`

    
})

let button2 = document.getElementById("red")

button2.onclick = () =>{
let ul = document.querySelector(".ulcart")
let li = document.createElement("li")
const search = productos.find((el) => el.nombre === searcher.value)

li.innerHTML = `<img src="${search.img}" alt="">`
ul.append(li)
}



