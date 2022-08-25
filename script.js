
let newapi="pub_106058f3f6fde7e0e0961bd264c60474f05fb";
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
function myFunction1(newapi,a) {

  let name = a.id;

      let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&category="+name+"&language=en";
      fetching(url1,newapi); 
}


    //  js for navigation bar starts here
     function myFunction2(newapi) {
             
          let url1="https://newsdata.io/api/1/news?apikey="+newapi+"&language=en";
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
              <h3 style="font-family: Arial, Helvetica, sans-serif; font-size: 25px;">${latestNews[i].title}</h3><br>
            <p><i>${(latestNews[i].pubDate == null) ? ("--------") : (latestNews[i].pubDate)}</i></p><br>
            
             <p>Creator: <i>${(latestNews[i].creator == null) ? ("--------") : (latestNews[i].creator)}</i></p><br>
              <p><b>Description</b>: ${(latestNews[i].description == null) ? ("-------") : (latestNews[i].description)}</p><br>
            
              
              <button class="readmore-btn" id=pop-up${i} onclick="openPopup(${i})" style="display:${(latestNews[i].content == null) ? ("none") : ("block")}">Read More</button>
                </div>
               </div>
          </div>
          <div class="popup" id=popup${i}>
              <h style="font-family: Arial, Helvetica, sans-serif; font-size: 35px;">${latestNews[i].title}</h><br><br>
              <img src="${(latestNews[i].image_url == null) ? (" ") : (latestNews[i].image_url)}" style="width:400px;height:auto;"/> <br><br>
                <p>${(latestNews[i].content == null) ? ("Not Content") : (latestNews[i].content)}</p><br>
                <button class="close-btn" type="button" style="background-color: red;
                padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;" onclick="closePopup(${i})"><b>Close</b></button>
                </div>
        `;
      }
      if(output !==""){
        $("#newsResults").html(output);
      }
      else{
        let noNews = `<div style='text-align:center; font-size:36px; margin-top:40px;'>Try Something Else</div>`;
         $("#newsResults").html(noNews);
      
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
         
          
          if(query !== ""){
            fetching(url1,newapi); 
          }
              else{
                  let noNews = `<div style='text-align:center; font-size:36px; margin-top:40px;'>Please Enter Something</div>`;
                   $("#newsResults").html(noNews);
                
                }

  
    
        });

// js for pagination
const element = document.querySelector(".pagination ul");

// let totalPages = 864;
let page = 1;

//calling function with passing parameters and adding inside element which is ul tag
function createPagination( totalPages,page){
let liTag = '';
let active;
let beforePage = page -1;
let afterPage = page + 1;
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

if(page > 1){ //show the next button if the page value is greater than 1
liTag += `<li class="btn prev" onclick="createPagination(${totalPages}, ${page - 1})"
><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
}

// how many pages or li show before the current li
if (page == totalPages) {
beforePage = beforePage - 2;
} else if (page == totalPages - 1) {
beforePage = beforePage - 1;
}
// how many pages or li show after the current li
if (page == 1) {
afterPage = afterPage + 2;
} else if (page == 2) {
afterPage = afterPage + 1;
}

for (var plength = beforePage; plength <= afterPage; plength++) {
if (plength > totalPages) { //if plength is greater than totalPage length then continue
continue;
}
if (plength == 0) { //if plength is 0 than add +1 in plength value
plength = plength + 1;
}
if(page == plength){ //if page is equal to plength than assign active string in the active variable
active = "active";
}else{ //else leave empty to the active variable
active = "";
}
liTag += `<li class="numb ${active}" onclick="createPagination(${totalPages}, ${plength})"><span>${plength}</span></li>`;
}

if (page < totalPages) { //show the next button if the page value is less than totalPage(20)
liTag += `<li class="btn next" onclick="createPagination(${totalPages}, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
}

pagiing(page,newapi);
function pagiing(page,newapi) {

let url1="https://newsdata.io/api/1/news?apikey=pub_106058f3f6fde7e0e0961bd264c60474f05fb&page="+page+"&language=en";

fetching(url1,newapi); 
}
element.innerHTML = liTag; //add li tag inside ul tag
//reurn the li tag})

}

let totalPages=fetch("https://newsdata.io/api/1/news?apikey=pub_106058f3f6fde7e0e0961bd264c60474f05fb&language=en")
.then(response => response.json())
.then(data => {
let totalpage= data.totalResults;

let th=Math.ceil(totalpage/10);

return th;

}

).then(totalPages=>{


createPagination( totalPages,page);
})


// js for pagination


       function openPopup(i) {
      let popup = document.getElementById(`popup${i}`);
      popup.classList.add("open-popup");
     

      
    }


    function closePopup(i) {
      let popup = document.getElementById(`popup${i}`);
      popup.classList.remove("open-popup");
      
    }
    
    $(document).mouseup(function(e){
      var container = $(".open-popup");
      if(!container.is(e.target) && container.has(e.target).length === 0){
          $(".popup").removeClass("open-popup"); 
      }
  });
//  weatherpop 

function wpopup() {
  let popup = document.getElementById(`weatherpop`);
  popup.classList.add("openweatherpop");
 

  
}
function closeweatherpopup() {
  let popup = document.getElementById(`weatherpop`);
  popup.classList.remove("openweatherpop");
 
}
$(document).mouseup(function(e){
  var container = $(".weatherpop");
  if(!container.is(e.target) && container.has(e.target).length === 0){
      $(".weatherpop").removeClass("openweatherpop"); 
  }
});
