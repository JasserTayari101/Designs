//-----------------image substitution----------------------------------
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



//------------------ purchase count up and down-------------------------
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const count = document.querySelector("#quantity");
plus.addEventListener("click",()=>{
    count.textContent = Number(count.textContent)+1;
})
minus.addEventListener("click",()=>{
    const current = Number(count.textContent);
    if(current>0)
        count.textContent = current-1;
})
//------------------stars hover effect------------------------------
var stars = Array.from(document.querySelectorAll(".reviews i") );
var i = 1;
stars.forEach(star=>{
    const before_stars = stars.slice(0,i);
    i++;
    star.addEventListener("mouseover",()=>{
        before_stars.forEach(before_star=>{
            before_star.classList.add("active");
        })
    })
    star.addEventListener("mouseleave",()=>{
        before_stars.forEach(before_star=>{
            before_star.classList.remove("active");
        })
    })
});