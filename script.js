document.addEventListener('DOMContentLoaded', function() {
    
    let hambur = document.querySelector(".hambur");
    let menu1 = document.querySelector("#menu1");
    let cierre=document.querySelector("#cierre")
    hambur.addEventListener("click", () => {
        menu1.style.display="block";
        document.body.style.overflow = "hidden";
    });
    cierre.addEventListener("click", () => {
        menu1.style.display="none"
        document.body.style.overflow = "auto"; 
    });
});
