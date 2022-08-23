
// weather and date js starts here 
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })
}

function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }else{
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
               
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }
    })


    weatherForecastEl.innerHTML = otherDayForcast;
}
// weather and date js ends here 


    //  js for navigation bar starts here
     function myFunction1() {
                let name="business";
          let url1="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&category="+name+"&language=en";
          fetching(url1); 
}


        
function myFunction9() {
                let name="world";
          let url1="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction2() {
    let name="entertainment";
          let url1="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction3() {
    let name="health";
          let url1="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction4() {
                let name="politics"
          let url1="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction5() {
                let name="science"
          let url1="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction6() {
                let name="sports"
          let url1="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&category="+name+"&language=en";
          fetching(url1); 
          
          
}
        
function myFunction7() {
                let name="technology"
          let url1="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction8() {
                let name="top"
          let url1="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&category="+name+"&language=en";
          fetching(url1); 
}

// js for navigation ends here
// news card fetching starts here
        let url1=" ";
     fetching(url1); 
        function fetching(url1){
                if(url1==" "){
                    url="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&language=en";
                }else{
                    url=url1;

                }
        
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
      let output = "";
      let latestNews = data.results;
      console.log(latestNews);
      newsfetching(latestNews);
function newsfetching(latestNews){
      for (var i in latestNews) {
        output += `
          <div class="col l3 m6 s12">
          <div class="card medium hoverable" style="border:thick solid grey;
 width:50%;
 overflow:auto;
  border: 2px solid black;
 padding: 20px 20px ;
   margin: 20px;
  height:500px;">
        
            <div class="card-image" width="10%" height="30%">
              <img src="${(latestNews[i].image_url== null)? ("noimage.jpg"):(latestNews[i].image_url)}" /> 
             
            </div>
            <div class="card-content" style="width:40%">
              <h3>${latestNews[i].title}</h3>
              </div>
              <div class="card-reveal">
         
              <p><b>Description</b>: ${latestNews[i].description}</p>
            </div>
            <div class="card-action">
              <button><a href="${latestNews[i].link}" target="_blank" class="btn">Read More</a>
            </button>
                </div>
            </div>
          </div>
        `;
      }
      if(output !==""){
        $("#newsResults").html(output);
      }
      }
       
       
    }
         
      );
      }
  
     
        
      //  news card fetching end here  
      // js for search bar starts here
    
          $("#searchbtn").on("click",function(e){
          e.preventDefault();
          
          let query = $("#searchquery").val();
         
         
          let url1="https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&q="+query+"&language=en";
         
          console.log(url1);
          if(query !== ""){
            fetching(url1); 


  
    }
        });
// js for search bar ends here


      
    

