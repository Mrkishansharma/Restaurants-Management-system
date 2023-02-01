// Write code related to Home page here


let formEl = document.querySelector("form");

let menuArray = JSON.parse(localStorage.getItem("menu")) || [];

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    let obj = {
        name: formEl.name.value,
        desc : formEl.desc.value,
        type: formEl.type.value,
        category: formEl.category.value,
        price: formEl.price.value
    }
    menuArray.push(obj);
    localStorage.setItem("menu", JSON.stringify(menuArray));
})