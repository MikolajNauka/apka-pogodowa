const cityName = document.querySelector('p.city_name');
const input = document.querySelector('input');
const date = document.querySelector('p.date');
const temp = document.querySelector('p.temp');
const description = document.querySelector('p.description');
const feelsLike = document.querySelector('p.feels_like');
const windSpeed = document.querySelector('p.wind_speed');
const pressure = document.querySelector('p.pressure');
const humidity = document.querySelector('p.humidity');
const visibility = document.querySelector('p.visibility');
const clouds = document.querySelector('p.clouds');
const rain = document.querySelector('p.rain');

const apiInfo = {
    link : "https://api.openweathermap.org/data/2.5/weather?q=",
    key : "&appid=3a23db435c5c116140a32454d2856965",
    units : "&units=metric",
    lang : "&lang=pl"
};

function getWeather (){
    const apiCity = input.value.toLowerCase().trim();
    const URL = `${apiInfo.link}${apiCity}${apiInfo.key}${apiInfo.units}${apiInfo.lang}`;
    // console.log(URL);

    axios.get(URL).then((response) => {
        console.log(response.data);
        cityName.textContent = `${response.data.name}, ${response.data.sys.country}`;
        input.textContent = ``;
        temp.textContent = `Temperatura ${Math.round(response.data.main.temp)} C`;
        feelsLike.textContent = `Odczuwalna ${parseInt(response.data.main.feels_like)} C`;
        description.textContent = `${response.data.weather[0].description}`;
        windSpeed.textContent = `${response.data.wind.speed}`;
        pressure.textContent = `${response.data}`;
    })
};

function getWheatherByEnter (e) {
    if (e.key === 'Enter') {
        getWeather();
    }
};

input.addEventListener('keypress', getWheatherByEnter);