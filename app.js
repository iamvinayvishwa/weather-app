const API_KEY = '63c5cdcafabff56bd1ad421882a1c936'
const form = document.querySelector("form")  //selector//
const search = document.querySelector("#search")    //selector//
const weather = document.querySelector("#weather")      //selector//


const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}


const showWeather = (data) => {
    console.log(data)
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `
}



form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)  //jo hum search karenge wo console me print ho jaayega//
        event.preventDefault();  //stop form reload
    }
)

