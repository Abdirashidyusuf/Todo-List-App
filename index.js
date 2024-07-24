const userInput=document.querySelector(".userInput");
const addBtn=document.querySelector(".add-btn");
const listsContainer=document.querySelector(".lists");

addBtn.addEventListener("click",addTodo);

function addTodo(){
    const test= userInput.value.trim();
    if(test){
        const listItem=document.createElement("div");
        listItem.innerHTML=`<p class="list">${test}</p>
            <ion-icon name="trash-outline" class="clearIcon"></ion-icon>`;
        listItem.classList.add("list-item");
        listsContainer.appendChild(listItem);

        listItem.querySelector(".clearIcon").addEventListener("click",()=>{
            listsContainer.removeChild(listItem);
        })

        listItem.addEventListener("click",()=>{
            listItem.querySelector(".list").classList.toggle("done")
        })
    } 
    userInput.value="";      
}
