const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    

    //guardar modo

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "true");
    } else{
        localStorage.setItem("dark-mode", "false");
    }
})


//Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader-wrapper");
    setTimeout(function () {
      loader.style.display = "none";
    }, 2000);
  });
  


//optener modo al actualizar

if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
} else {
    document.body.classList.remove("dark");
}