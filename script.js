
    //  js for navigation bar starts here
     function myFunction1() {
                let name="business";
          let url1="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&category="+name+"&language=en";
          fetching(url1); 
}


        
function myFunction9() {
                let name="world";
          let url1="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction2() {
    let name="entertainment";
          let url1="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction3() {
    let name="health";
          let url1="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction4() {
                let name="politics"
          let url1="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction5() {
                let name="science"
          let url1="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction6() {
                let name="sports"
          let url1="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&category="+name+"&language=en";
          fetching(url1); 
          
          
}
        
function myFunction7() {
                let name="technology"
          let url1="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&category="+name+"&language=en";
          fetching(url1); 
}
        
function myFunction8() {
                let name="top"
          let url1="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&category="+name+"&language=en";
          fetching(url1); 
}

// js for navigation ends here
// news card fetching starts here
        let url1=" ";
     fetching(url1); 
        function fetching(url1){
                if(url1==" "){
                    url="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&language=en";
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
         
         
          let url1="https://newsdata.io/api/1/news?apikey=pub_10414fe471c24b4668c23d19b8d3725ff53c0&q="+query+"&language=en";
         
          console.log(url1);
          if(query !== ""){
            fetching(url1); 


  
    }
        });
// js for search bar ends here


      
    

