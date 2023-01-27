const form = document.querySelector("#form")
const input1 = document.querySelector(".first-input")
const btn = document.querySelector("button")
const title = document.querySelector("h1")

// form.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     let resourse = input2.value
//     input2.value = input1.value
//     input1.value = resourse
    
//     // document.body.style.background = input.value;
//     // title.textContent = input.value;
// })

let list = document.querySelector("ul");
form.addEventListener("submit", (e)=>{

    // preventDefault => formdagi submit click bolganda saytni aftomayik qayta ishga tushb ketishini oldini oladi 
    e.preventDefault();
    
    // createElement => item nomli ozgaruvchiga <li></li> tagli element yaratilmoqda
    let item = document.createElement("li")

    // createElement => btnDelete nomli ozgaruvchiga <button></button> tagli element yaratilmoqda
    let btnDelete = document.createElement("button")
    btnDelete.classList.add("btnItem")
    btnDelete.textContent = "🗑"


    // regEX => user tomonidan kiritilayotgan malumotga cheklov yoki miqdorlar qoyadi , test qiladi 
    // const regEx = /^[a-zA-Z0-9]{6, 15}$/
    // // let values = input1.value
    // console.log(regEx.test(input1.value))


    item.textContent = input1.value;
    list.appendChild(item)
    input1.value = ""
    item.classList.add("items")

    item.appendChild(btnDelete)
    
    // add to list qib qoshilgan itemlar click bolganda uni delete qiladi
    btnDelete.addEventListener("click" , () => {
        item.remove()
    })
    btnDelete.addEventListener("mouseover", ()=>{
         item.style.boxShadow = "5px 5px 5px red"
    })
})
