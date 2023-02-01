// Write code related to Favourites page here

let tbodyEl = document.querySelector("tbody");

let favArray = JSON.parse(localStorage.getItem("fav-menu")) || [];



displayMenu();

function displayMenu(){
    tbodyEl.innerHTML = ""
    favArray.forEach((elem,index) => {
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
            td6.innerText = "Delete";
            td6.addEventListener("click", () => {
                favArray.splice(index, 1);
                localStorage.setItem("fav-menu", JSON.stringify(favArray));
                displayMenu();
            })
    
            tr.append(td1,td2,td3,td4,td5,td6);
            tbodyEl.append(tr);
    })
}