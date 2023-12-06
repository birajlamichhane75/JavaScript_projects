let item = document.querySelector("#item");
let toDoList = document.querySelector("ul");

item.addEventListener(
    "keyup",
    function(event){
       if(event.key == "Enter"){
        if(this.value == ""){
            alert("Please Enter something!!");
        }
        else{
     addToDo(this.value)
     this.value = "";
        }
       }
    }
)


let addToDo = (work) =>{

    
    let listItem = document.createElement("div");
    listItem.classList.add("list");
    listItem.innerHTML = `
    <li id = "c-list">
    <p id = "l-para">${work}</p>
    <button id = "btn">Done</button>
    <i class="delete fa fa-times"></i>
</li> 
    `;
    toDoList.appendChild(listItem);
  

    listItem.querySelector(".delete").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )
    
    listItem.querySelector("#btn").addEventListener(
        "click",
        function(){
            listItem.querySelector("#btn").remove();
            listItem.querySelector("#c-list").style.backgroundColor = "rgb(126, 125, 125)";
            listItem.querySelector("#l-para").style.textDecoration = "line-through";
            
        
        }
    )

}


