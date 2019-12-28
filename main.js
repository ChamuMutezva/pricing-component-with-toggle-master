const toggleBtn = document.querySelector(".slider");
const yearly = Array.from(document.querySelectorAll(".yearly"));
const monthly = Array.from(document.querySelectorAll(".monthly"));
let isMonthly = true;

console.log(toggleBtn);
console.log(yearly);
toggleBtn.addEventListener("click", () => {
    console.log("button clicked");
    if (isMonthly){
        monthly.forEach(element  => {
            console.log(element);
            element.style.visibility = "hidden";
        })
        yearly.forEach(element  => {
            console.log(element);
            element.style.visibility = "visible";
        })        
        isMonthly = false;
    } else {
        monthly.forEach(element  => {
            element.style.visibility = "visible";
        })
        yearly.forEach(element  => {
            element.style.visibility = "hidden";
        })        
        isMonthly = true;
    }
})