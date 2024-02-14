

//  let search_boxvalue=search_box.value;
//  console.log(search_box.value);
let main_container=document.querySelector(".container")
let serach_icon=document.querySelector("#serach_icon")
 let temperature=document.querySelector('h1');
 let cityname=document.querySelector("h2");
 let windspeed=document.getElementById('windspeed')
 let humidity=document.querySelector("#humidity");
 let button=document.querySelector("buuton");


 

    function Weather(){
        let apikey = "1ac41d822f470089588e62f6ac6cbdce";
        let search_box=document.querySelector("#search_input");
    
        let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
        
        if(search_box.value)
        {
            console.log('hhhhh');
            checkWeather(search_box.value)
        }
        function checkWeather(city)
        {
            fetch(apiurl+`&appid=${apikey}&q=${city}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data.main.temp);
              temperature.innerHTML=data.main.temp +"°C";
                    
    cityname.textContent=search_box.value;
    search_box.value='';
    
       windspeed.innerHTML=`<i class="fa-solid fa-wind icon"></i>`+`<br>`+data.main.humidity+"%";
       humidity.innerHTML=`<i class="fa-solid fa-droplet icon"></i>` +`<br>`+data.wind.speed+"m/s";
    
    updateBackground(data.main.temp);
            })
    
        }
    
    
    
    }
    


 
 



function updateBackground(temp){
    if(temp > 26){
   main_container.style.backgroundImage='url("Bg-1.webp")';
    }
    else if(temp >=20 && temp <= 25){
        main_container.style.backgroundImage='url("Bg-2.webp")';


    }
    else {
        main_container.style.backgroundImage='url("Bg-3.webp")';
    }
}
    
   





