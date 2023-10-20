document.getElementById("add").addEventListener("click", function () {
    var istatus = document.querySelector(".istatus");
    istatus.textContent = "friend";
    istatus.style.color = "#44bd32"; 
});

document.getElementById("remove").addEventListener("click", function () {
    var istatus = document.querySelector(".istatus");
    istatus.textContent = "stranger";
    istatus.style.color = "#e84118";
});
