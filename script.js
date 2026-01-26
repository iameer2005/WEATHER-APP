const cityinput = document.querySelector('.city-search');
const weatherapi = '';
const searchbt = document.querySelector('.search-but');
const loader = document.querySelector('.loader');
const searchbar = document.querySelector('.searchbar');
const errorload = document.querySelector('.error-no-city');
const welcomescreen = document.querySelector('.welcomegreet');
const continuebut = document.querySelector('.continue');
const headingname = document.querySelector('.weatherapp .heading-main');
const weather = document.querySelector('.weathermain');


function showloader(){
    loader.classList.remove('hidder');
    // searchbar.classList.add('hidder');
    errorload.classList.add('hidder');
    weather.classList.add('hidder');
    // headingname.classList.add('hidder');
    searchbt.disabled = true;
}

function showWeather() {
    loader.classList.add("hidder");
    weather.classList.remove("hidder");
    errorload.classList.add("hidder");
    // searchbar.classList.add('hidder');
    searchbt.disabled = false;
}

function showhome(){
    welcomescreen.classList.add('hidder');
    searchbar.classList.remove('hidder');
    headingname.classList.remove('hidder');
    loader.classList.add('hidder');
    errorload.classList.add('hidder');
    weather.classList.add('hidder');
}

function showError(message) {
    loader.classList.add("hidder");
    weather.classList.add("hidder");
    // searchbar.classList.add('hidder');
    errorload.classList.remove("hidder");
    searchbt.disabled = false;
    document.querySelector('.errormsg').textContent = message;
}
function updateweatherui(data){
    
    document.querySelector('.citynameinjs').textContent = `${data.name}`;

    document.querySelector('.weathericon').src = `./asset/openweathermap/${data.weather[0].icon}.svg`;

    document.querySelector('.temperature-today').textContent = `${Math.round(data.main.temp)}°C`;

    document.querySelector('.feels_like_deg').textContent=`${Math.round(data.main.feels_like)}°C`;

    document.querySelector('.humidity-con').textContent=`${data.main.humidity}%`;

    document.querySelector('.wind-speed').textContent = `${(data.wind.speed).toFixed(2)} m/s`;

    document.querySelector('.pressure-con').textContent=`${data.main.pressure} hPa`;

    document.querySelector('.mintemp').textContent=`${Math.round(data.main.temp_min)}°C`;

    document.querySelector('.maxtemp').textContent=`${Math.round(data.main.temp_max)}°C`;

    document.querySelector('.visibl-ty').textContent=`${((Number(data.visibility
    ))/1000).toFixed(1)} km`;
    const seaLevelValue = data.main.sea_level
  ? `${data.main.sea_level} hPa`
  : "N/A";
    document.querySelector('.sealevel').textContent=seaLevelValue;
}
async function getWeather(url){
    showloader();
    try{
        let response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found!");
        }

        const data = await response.json();
        console.log(data); // Debug: check what data you're getting
        updateweatherui(data);
        showWeather();
    } catch(error){
        showError(error.message);
        console.log(error);
    }
}
function searchcity(){
    let cityname = cityinput.value.trim();
    
    if(!cityname) {
        showError("Please enter a city name!");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${weatherapi}&units=metric`;
    getWeather(url);

}
searchbt.addEventListener('click',searchcity);

continuebut.addEventListener('click', showhome);

searchbar.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        searchcity(); 
    }
    
});