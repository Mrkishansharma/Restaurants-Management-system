// Write code related to dashboard page here

let tbodyEl = document.querySelector("tbody");

let menuArray = JSON.parse(localStorage.getItem("menu")) || [];
let favArray = JSON.parse(localStorage.getItem("fav-menu")) || [];


let filterEl = document.getElementById("filter");
filterEl.addEventListener("change", (event) => {
    displayMenu(event.target.value)
})


displayMenu();

function displayMenu(filterValue=""){
    tbodyEl.innerHTML = ""
    menuArray.forEach((elem) => {
        if(filterValue=="" || filterValue==elem.type){
            let tr = document.createElement('tr');
    
            let td1 = document.createElement("td");
            td1.innerText = elem.name;
    
            let td2 = document.createElement("td");
            td2.innerText = elem.desc;
    
            let td3 = document.createElement("td");
            td3.innerText = elem.type;
    
            let td4 = document.createElement("td");
            td4.innerText = elem.category;
    
            let td5 = document.createElement("td");
            td5.innerText = elem.price;
    
            let td6 = document.createElement("td");
            td6.innerText = "Add";
            td6.addEventListener("click", () => {
                favArray.push(elem);
                localStorage.setItem("fav-menu", JSON.stringify(favArray));
            })
    
            tr.append(td1,td2,td3,td4,td5,td6);
            tbodyEl.append(tr);
        }
    })
}