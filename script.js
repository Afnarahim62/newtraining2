<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="" width=device-width, initial-scale="1.0">
  <meta http-equiv="" X-UA-Compatible" content="" ie=edge">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="css/materialize.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


  <title>NEWSLETTER</title>
  <style>
    body {
      background-color: #ffffff;
    }

    .popup {
      width: 800px;
      background: #ffffff;
      border-radius: 6px;
      position: absolute;
      text-align: center;
      padding: 0 30px 30px;
      color: #333;
      visibility: hidden;
    }


    .popup button {
      width: 100%;
      margin-top: 50px;
      padding: 10px 0;
      background: #00ff00;
      color: #fff;
      font-size: 18px;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    }

    .open-popup {
      visibility: visible;
      background: #ffffff;
      border-radius: 6px;
      width: 80%;
      z-index: 10;
      margin-left: 150px;
      margin-right: 150px;
      margin-top: -348px;
    }

    #col l3 m6 s12 {
      position: absolute;
      width: 500px;
      overflow: auto;
      border: 2px solid black;
      padding: 20px 20px;
      margin: 20px;
      height: 500px;
    }

    #newsResults {
      box-sizing: border-box;
      width: 100%;

    }

    .cardmediumhoverable {
      background: #F2F2F7;
      overflow: auto;
      border-radius: 20px;
      padding: 20px 20px;
      margin: 20px;
      height: auto;
      display: flex;
      opacity: 0.8;
      margin-left: 5%;
      margin-right: 5%;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    }

    .readmore-btn {
      background-color: #00FF00;
      padding: 16px 20px;
      cursor: pointer;
      border-radius: 10px;
      "

    }
  </style>
</head>

<body>
  <div class="input-group">
    <input type="search" id="searchquery" class="form-control rounded" placeholder="Search" aria-label="Search"
      aria-describedby="search-addon" />
    <button id="searchbtn" style="margin-left: 5px;" type="submit" class="btn btn-outline-primary"
      value="search">Search</button>
  </div>

  <div id="loader" style="display:none;">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  </div>

  <div class="row">
    <div id="newsResults"></div>
  </div>




  <div class="container">

    <div class="row">

      <div id="newsResults"></div>
    </div>

    <div id="loader">
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    </div>

  </div>

  <script>

    window.onload = function () {
      let url = "https://newsdata.io/api/1/news?apikey=pub_10487b1affaf56d8b793d3c9cf14addf974c4&language=en";
      //let url = './data.json';
      newspapper(url);
      function newspapper(url) {
        fetch(url)
          .then(response => response.json())
          .then(data => {

            let output = "";
            let latestNews = data.results;
            console.log(latestNews);
            newsfetching(latestNews);
            function newsfetching(latestNews) {
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
              if (output !== "") {
                $("#newsResults").html(output);
              }
            }


          }

          );
      }
    }


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
  </script>
</body>

</html>
