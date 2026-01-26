const cityinput = document.querySelector('.city-search');
const weatherapi = 'abb35183e43f55ec14b38bef774ff665';
const searchbt = document.querySelector('.search-but');

let url = ``;


searchbt.addEventListener('click',()=>{
    let cityname = cityinput.value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${weatherapi}&units=metric`;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
    console.log(data.main.temp);
    console.log(data.weather);
    }).catch((error)=>{
        console.log("Invalid City Name");
    })
        
    
});

