const apikey = "c31fbba63b24bf66ff50c3fba50727fb"; //copy from open weather map
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button'); //when pepople will click on search btn then it will send city info.in this check weather func.
const imag_d = document.querySelector('.imag');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();  //data will have all info.

        // console.log(data);  // display data on our webpage

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windd").innerHTML = data.wind.speed + " km/h";

        // For image updating
        if (data.weather[0].main == "Clouds"){
            imag_d.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear"){
            imag_d.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain"){
            imag_d.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            imag_d.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist"){
            imag_d.src = "images/mist.png";
        }

        //for display the weather info after giving city name
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";

    }
 
}

searchbtn.addEventListener('click', ()=>{
    checkWeather(searchbox.value); //searchbox.value:- give city name
})
// checkWeather(); //city will come from two variable