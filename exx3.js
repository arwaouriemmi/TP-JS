node=document.querySelector("button") ;
nnode=document.querySelector("ul") ;
node.disabled=true;
document.querySelectorAll("input").forEach(
    (element)=>{
    element.addEventListener("keyup", ()=>{
    if (document.querySelector("#nom").value!="" && document.querySelector("#content").value!=""){
        node.disabled=false;}
       
    })})

    node.addEventListener('click',()=> {
        node.disabled= true;
         newnode = document.createElement("li");
        newnode.innerText = document.querySelector("#nom").value + " :" + document.querySelector("#content").value + " ";
        document.querySelector("#nom").value = "";
        document.querySelector("#content").value = "";
        newnode.className = "list-group-item";
        icon = document.createElement("i");
        icon.className="fa fa-trash" ;
        newnode.appendChild(icon);
        newnode.style.backgroundColor="white" ;
        nnode.appendChild(newnode);
        document.querySelectorAll(".fa").forEach(
            function (element) {
                element.addEventListener("click", () => {
                    element.parentNode.parentNode.removeChild(element.parentNode);
                });
            })})