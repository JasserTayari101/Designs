const restSection = document.querySelector(".rest");
const children = restSection.children
for(child in children){
    if(!isNaN(child))
        children[child].addEventListener("click",changeIMage)
}
function changeIMage(){     //chnage the displayed image with the clicked one
    const displayed = document.getElementById("displayed");     // the image that is displayed
    new_src = this.firstElementChild.src;
    displayed.src = new_src;
}