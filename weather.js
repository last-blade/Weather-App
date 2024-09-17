const apiKey = "362a606dfb29627fa1f8f6757db2b7dc"

const cityName = document.querySelector(".cityName").value;
const button = document.querySelector(".searchBtn");

button.addEventListener('click', ()=>{
    let cityName = document.querySelector(".cityName").value;
    console.log(cityName);
    if(cityName){
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
            if(data.message){
                // alert("Location not found");
                document.getElementById("error").style.display= "block";
                document.getElementById("error").innerHTML = "Location not found!";
                // document.querySelectorAll(".errorMessage").style.display = "none";
                document.querySelector(".location").style.display = "none"; 
                document.getElementById("celcius").style.display = "none"; 
                document.getElementById("clear").style.display = "none"; 
                document.getElementById("clearSky").style.display = "none"; 
                document.getElementById("country").style.display = "none"; 
                document.getElementById("wind").style.display = "none"; 
                document.getElementById("pressure").style.display = "none"; 
                document.getElementById("humidity").style.display = "none"; 
                document.querySelector(".temperature").style.display = "none"; 
            }
            else{

                document.querySelector(".location").style.display = "block"; 
                 
                document.getElementById("clear").style.display = "block"; 
                document.getElementById("clearSky").style.display = "block"; 
                document.getElementById("country").style.display = "block"; 
                document.getElementById("wind").style.display = "block"; 
                document.getElementById("pressure").style.display = "block"; 
                document.getElementById("humidity").style.display = "block"; 
                document.querySelector(".temperature").style.display = "block"; 





                // document.querySelectorAll(".errorMessage").style.display = "block";                
                document.getElementById("error").style.display= "none"
                document.querySelector(".location").innerHTML = cityName;
                const temp = data.main.temp-(273.15);
                document.querySelector(".temperature").innerHTML = Math.round(temp);
                document.getElementById("celcius").style.display = "block";
                document.getElementById("clear").innerHTML = data.weather[0].main;
                document.getElementById("clearSky").innerHTML = data.weather[0].description;
                document.getElementById("country").innerHTML = data.sys.country;
                document.getElementById("country").style.display = "block";
                // document.getAnimations("humidity").innerHTML = data.main.humidity;
                let wind = data.wind.speed*(3.6);
                document.getElementById("wind").innerHTML = "Wind" + ": " + Math.round(wind) + "km/h";  
                let pressure = data.main.pressure;
                pressure = pressure*0.0295;
                document.getElementById("pressure").innerHTML = "Pressure" + ": " + Math.round(pressure);
                document.getElementById("humidity").innerHTML = "Humidity" + ": " + data.main.humidity + "%";
            }
            }
            )
    }

    else{
        alert("Please enter any location first...")
    }
})