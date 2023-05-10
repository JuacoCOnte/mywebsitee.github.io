//Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader-wrapper");
    setTimeout(function () {
      loader.style.display = "none";
    }, 2000);
  });
  


let weather = {
    "apiKey": "ffb21dc64329c90c7d4349b4b081eb28",
    fetchWeather: function () {
        fetch("https://v1.nocodeapi.com/juacoconte/ow/UpfHRHGqmxdTqfQv/byCityName?q=Cordoba")
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
}

 