nodes=document.querySelectorAll("li") ;
nodes.forEach(element => {
    element.addEventListener("click",()=>{
        element.parentNode.style.color= '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    });
    
});