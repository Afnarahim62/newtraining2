
let newapi="pub_10316cb54031f0ba55b0468a1337c21dc0bbb";
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
     function myFunction1(newapi) {
                let name="business";
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&category="+name+"&language=en";
          fetching(url1,newapi); 
}


        
function myFunction9(newapi) {
                let name="world";
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&category="+name+"&language=en";
          fetching(url1,newapi); 
}
        
function myFunction2(newapi) {
    let name="entertainment";
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&category="+name+"&language=en";
          fetching(url1,newapi); 
}
        
function myFunction3(newapi) {
    let name="health";
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&category="+name+"&language=en";
          fetching(url1,newapi); 
}
        
function myFunction4(newapi) {
                let name="politics"
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&category="+name+"&language=en";
          fetching(url1,newapi); 
}
        
function myFunction5(newapi) {
                let name="science"
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&category="+name+"&language=en";
          fetching(url1,newapi); 
}
        
function myFunction6(newapi) {
                let name="sports"
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&category="+name+"&language=en";
          fetching(url1,newapi); 
          
          
}
        
function myFunction7(newapi) {
                let name="technology"
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&category="+name+"&language=en";
          fetching(url1,newapi); 
}
        
function myFunction8(newapi) {
                let name="top"
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&category="+name+"&language=en";
          fetching(url1,newapi); 
}

// js for navigation ends here
// news card fetching starts here
        let url1=" ";
     fetching(url1,newapi); 
        function fetching(url1,newapi){
                if(url1==" "){
                    url="https://newsdata.io/api/1/news?apikey="+newapi+"&language=en";
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
          <div class="cardmediumhoverable">
        
            <div class="card-image" >
              <img src="${(latestNews[i].image_url == null) ? ("noimage.jpg") : (latestNews[i].image_url)}" style="width:400px;height:auto;"/> 
             
          </div>
            <div class="card-content" style="width:70%; margin-left:50px">
              <h3 style="font-family: Arial, Helvetica, sans-serif; font-size: 25px;">${latestNews[i].title}</h3>
            <p><i>${(latestNews[i].pubDate == null) ? ("--------") : (latestNews[i].pubDate)}</i></p>
            
             <p>Creator: <i>${(latestNews[i].creator == null) ? ("--------") : (latestNews[i].creator)}</i></p>
              <p><b>Description</b>: ${(latestNews[i].description == null) ? ("-------") : (latestNews[i].description)}</p>
            
              <button class="readmore-btn" id=pop-up${i} onclick="openPopup(${i})"  >Read More >></button>
                </div>
               </div>
          </div>
          <div class="popup" id=popup${i}>
              <b><h style="font-family: Arial, Helvetica, sans-serif; font-size: 35px;">${latestNews[i].title}</h></b><br><br>
              <img src="${(latestNews[i].image_url == null) ? ("noimage.jpg") : (latestNews[i].image_url)}" style="width:400px;height:auto;"/> <br>
                <p>${(latestNews[i].content == null) ? ("Not Content") : (latestNews[i].content)}</p><br>
                <button class="close-btn" type="button" style="background-color: #FF0000;
  padding: 16px 20px;
  cursor: pointer;
  border-radius: 10px;" onclick="closePopup(${i})">Close</button>
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
         
         
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&q="+query+"&language=en";
         
          console.log(url1);
          if(query !== ""){
            fetching(url1,newapi); 
          }
              else{
                  let noNews = `<div style='text-align:center; font-size:36px; margin-top:40px;'>This news isn't available. Sorry about that.<br>Try searching for something else </div>`;
                   $("#newsResults").html(noNews);
                
                }

  
    
        });
// js for search bar ends here


       function openPopup(i) {
      let popup = document.getElementById(`popup${i}`);
      popup.classList.add("open-popup");
      console.log(popup)
    }


    function closePopup(i) {
      let popup = document.getElementById(`popup${i}`);
      popup.classList.remove("open-popup");
      console.log("close pop up")
    }


