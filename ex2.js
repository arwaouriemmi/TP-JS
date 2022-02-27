nodes=document.querySelector("#i");
nodess=document.querySelector("#ii");
nodesss=document.querySelector("#iii");
h=document.querySelector("h1");
nodes.addEventListener("input",()=>{
    h.style.color=nodes.value ;
});
nodess.addEventListener("input",()=>{
    h.style.fontSize=nodess.value+ "px" ;
});
nodesss.addEventListener("change",()=>{
    h.style.fontFamily=nodesss.value;
});