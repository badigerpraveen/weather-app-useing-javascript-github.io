
 let city = document.getElementById('search') ;
 
  city.addEventListener("click",((e)=> {  
    e.preventDefault();
    let userInput = document.getElementById("city").value;
    document.getElementById("cityName").innerHTML = userInput;
    document.getElementById("city").value="";  
    document.getElementById("content").innerHTML="";
    console.log(userInput); 
    getCityname(userInput) ;
    
    
  }))
 

function getCityname(a){ 
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${a}&appid=3386430cdc761d9dc21135677fa6b4bd&units=matrics`)
.then((responce)=>{
    return responce.json();
}).then((data)=>{ 

  for(let i=0; i< data.list.length; i = i+8){
  let imgg = data.list[i].weather[0].icon ; 
  let weather = data.list[i].weather[0].main;  
  let description = data.list[i].weather[0].description;
  let minTemp =   Math.round(data.list[i].main.temp -273);
  let city = data.city.name ;
  let _date = data.list[i].dt_txt ; 
 
  let d = new Date(data.list[i].dt * 1000); 
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = weekday[d.getDay()];
 console.log(day); 

    document.getElementById("content").innerHTML +=  `<div class="col-md-3  mt-2">
    
           <div class="card card-weather-container">
        <div class="card-body">
            <h4 class="card-title text-center">${day}</h4>
            <p class="text-center"> ${city} </p>
            <p class="text-center"> <img  src="http://openweathermap.org/img/wn/${imgg}@2x.png" alt="img" /> <p>
            <p class="text-center">  ${minTemp} °C  </p> 
            <p class="text-center"> date : ${_date }  </p>
           <p class="text-center"> <b>${weather}</b> </p>
           <p class="text-center">  <em><b>${description}</b> </em> </p>
           
        </div>
    </div>
</div> `;

     
  }

}).catch(err => document.getElementById("cityName").innerHTML = "<h2 style='color:red'> Enter valid city name ..! No result Found </h2>" ) ;

}  

















 