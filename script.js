function weatherInfo(){
    var searchCity = document.getElementById("searchCity");
    var city = document.getElementById("city");
    city.innerHTML = searchCity.value;
console.log(searchCity.value);

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=b10b53fbc2324467dd61d37404b79e91')
.then(response => response.json())
.then(data =>{
    for(i=0; i<5; i++){
        "Min:" + Number(data.list[i].main.temp_min-293.2).toFixed(2)+ "°";
    }
    for(i=0; i<5; i++){
         "Max:" + Number(data.list[i].main.temp_max-293.2).toFixed(2)+ "°";
    }
    console.log(data);
});
};
