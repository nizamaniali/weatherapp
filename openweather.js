let api_Key = 'bef64e3af7c446ee74e612d499a836c4';

// dotenv.config();

// const api_Key = process.env.API_Key;

let newCity = 'hyderabad';
const cityName = document.getElementById('cityName');
const currTemp = document.getElementById('currTemp');
const feelLike = document.getElementById('feellike');
const minTemp = document.getElementById('minTemp');
const maxTemp = document.getElementById('maxTemp');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const temps = document.querySelector('.currentTemp');

function weather() {
  const cityCity = document.getElementById('city');
  newCity = cityCity.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${api_Key}&&units=metric`;

  // Perform GET request without headers
  axios
    .get(url)
    .then((response) => {
      console.log(response.data); // Log the response data
      cityName.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
      currTemp.innerHTML = `${response.data.main.temp}°C`;

      minTemp.innerHTML = `${response.data.main.temp_min}°C`;
      maxTemp.innerHTML = `${response.data.main.temp_max}°C`;
      feelLike.innerHTML = `${response.data.main.feels_like}°C`;
      wind.innerHTML = `${response.data.wind.speed}Km/h`;
      humidity.innerHTML = `${response.data.main.humidity}%`;
      pressure.innerHTML = `${response.data.main.pressure} hPa`;
    })
    .catch((error) => {
      console.error('Error:', error); // Log any error
      cityName.innerHTML = `City Not found`;
      currTemp.innerHTML = `..`;
      minTemp.innerHTML = `..`;
      maxTemp.innerHTML = `..`;
      feelLike.innerHTML = `..`;
      wind.innerHTML = `..`;
    });

  // get request end
}
