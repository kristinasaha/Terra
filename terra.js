var cali = "not displayed";
function califunction(){ //this function hides cali stuff
  document.getElementById('twittercali').style.display = "none";
  document.getElementById('instacali').style.display = "none";
  document.getElementById('newscali').style.display = "none";
  document.getElementById('spotcali').style.display = "none";
  cali = "not displayed";
  }
function showInfoCali(e) {
  if (cali === "not displayed"){
    NYfunction()
    Indiafunction()
    Nigeriafunction()
    DRfunction()
    Francefunction()
    document.getElementById('twittercali').style.display = "block";
    document.getElementById('instacali').style.display = "block";
    document.getElementById('newscali').style.display = "block";
    document.getElementById('spotcali').style.display = "block";
    cali = "displayed";
  }
  else if (cali === "displayed"){
    califunction()
  }
}

var newyork = "not displayed";
function NYfunction(){
  document.getElementById('twitternewyork').style.display = "none";
  document.getElementById('instanewyork').style.display = "none";
  document.getElementById('newsnewyork').style.display = "none";
  document.getElementById('spotnewyork').style.display = "none";
  newyork = "not displayed";
}
function showInfoNY(e) {
  if (newyork === "not displayed"){
    califunction()
    Indiafunction()
    Nigeriafunction()
    DRfunction()
    Francefunction()
    document.getElementById('twitternewyork').style.display = "block";
    document.getElementById('instanewyork').style.display = "block";
    document.getElementById('newsnewyork').style.display = "block";
    document.getElementById('spotnewyork').style.display = "block";
    newyork = "displayed";
  }
  else if (newyork === "displayed"){
    NYfunction()
  }
}


var India = "not displayed";
function Indiafunction(){
  document.getElementById('twitterindia').style.display = "none";
  document.getElementById('instaindia').style.display = "none";
  document.getElementById('newsindia').style.display = "none";
  document.getElementById('spotindia').style.display = "none";
  India = "not displayed";
}
  function showInfoIndia(e) {
  if (India === "not displayed"){
    califunction()
    NYfunction()
    Nigeriafunction()
    DRfunction()
    Francefunction()
    document.getElementById('twitterindia').style.display = "block";
    document.getElementById('instaindia').style.display = "block";
    document.getElementById('newsindia').style.display = "block";
    document.getElementById('spotindia').style.display = "block";
    India = "displayed";
  }
  else if (India === "displayed"){
    Indiafunction()
  }
}


var Nigeria = "not displayed";
function Nigeriafunction(){
  document.getElementById('twitterNigeria').style.display = "none";
  document.getElementById('instaNigeria').style.display = "none";
  document.getElementById('newsNigeria').style.display = "none";
  document.getElementById('spotNigeria').style.display = "none";
  Nigeria = "not displayed";
}
function showInfoNigeria(e) {
  if (Nigeria === "not displayed"){
    califunction()
    NYfunction()
    Indiafunction()
    DRfunction()
    Francefunction()
    document.getElementById('twitterNigeria').style.display = "block";
    document.getElementById('instaNigeria').style.display = "block";
    document.getElementById('newsNigeria').style.display = "block";
    document.getElementById('spotNigeria').style.display = "block";
    Nigeria = "displayed";
  }
  else if (Nigeria === "displayed"){
    Nigeriafunction()
  }
}

var DR = "not displayed";
function DRfunction(){
  document.getElementById('twitterDR').style.display = "none";
  document.getElementById('instaDR').style.display = "none";
  document.getElementById('newsDR').style.display = "none";
  document.getElementById('spotDR').style.display = "none";
  DR = "not displayed";
}
function showInfoDominicanRepublic(e) {
  if (DR === "not displayed"){
    califunction()
    NYfunction()
    Indiafunction()
    Nigeriafunction()
    Francefunction()
    document.getElementById('twitterDR').style.display = "block";
    document.getElementById('instaDR').style.display = "block";
    document.getElementById('newsDR').style.display = "block";
    document.getElementById('spotDR').style.display = "block";
    DR = "displayed";
  }
  else if (DR === "displayed"){
    DRfunction()
  }
}

var France = "not displayed";
function Francefunction(){
  document.getElementById('twitterFrance').style.display = "none";
  document.getElementById('instaFrance').style.display = "none";
  document.getElementById('newsFrance').style.display = "none";
  document.getElementById('spotFrance').style.display = "none";
  France = "not displayed";
}
function showInfoFrance(e) {
  if (France === "not displayed"){
    califunction()
    NYfunction()
    Indiafunction()
    Nigeriafunction()
    DRfunction()
    document.getElementById('twitterFrance').style.display = "block";
    document.getElementById('instaFrance').style.display = "block";
    document.getElementById('newsFrance').style.display = "block";
    document.getElementById('spotFrance').style.display = "block";
    France = "displayed";
  }
  else if (France === "displayed"){
    Francefunction()
  }
}

      function initialize() {
        var options = {
          sky: true,
          atmosphere: true,
          dragging: true,
          tilting: true,
          zooming: true,
          center: [46.8011, 8.2266],
          zoom: 3
        };
        earth = new WE.map('earth_div', options);
        var natural = WE.tileLayer('http://data.webglearth.com/natural-earth-color/{z}/{x}/{y}.jpg', {
          tileSize: 256,
          tms: true
        });
        natural.addTo(earth);

        var marker = WE.marker([38.170142, -120.867110]).addTo(earth); 
        marker.on('click', showInfoCali);
        marker.bindPopup("<b>California</b><br> <br/><span style='font-size:10px;color:#999'> </span>", {maxWidth: 60, maxLength: 5, closeButton: true}).closePopup();


        var marker = WE.marker([40.745525, -74.007863]).addTo(earth); 
        marker.on('click', showInfoNY);
        marker.bindPopup("<b>New York</b><br> <br/><span style='font-size:10px;color:#999'> </span>", {maxWidth: 60, maxLength: 5, closeButton: true}).closePopup();

        var marker = WE.marker([19.0759837, 72.8776559]).addTo(earth); 
        marker.on('click', showInfoIndia);
        marker.bindPopup("<b>India</b><br> <br/><span style='font-size:10px;color:#999'> </span>", {maxWidth: 60, maxLength: 5, closeButton: true}).closePopup();

        var marker = WE.marker([6.516657, 3.389095]).addTo(earth); 
        marker.on('click', showInfoNigeria);
        marker.bindPopup("<b>Nigeria</b><br> <br/><span style='font-size:10px;color:#999'> </span>", {maxWidth: 60, maxLength: 5, closeButton: true}).closePopup();

        var marker = WE.marker([18.508869, -69.897754]).addTo(earth); 
        marker.on('click', showInfoDominicanRepublic);
        marker.bindPopup("<b>Dominican Republic</b><br> <br/><span style='font-size:10px;color:#999'> </span>", {maxWidth: 60, maxLength: 5, closeButton: true}).closePopup();

        var marker = WE.marker([48.857274, 2.351238]).addTo(earth); 
        marker.on('click', showInfoFrance);
        marker.bindPopup("<b>France</b><br> <br/><span style='font-size:10px;color:#999'> </span>", {maxWidth: 60, maxLength: 5, closeButton: true}).closePopup();


        var toner = WE.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
          attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA. Project by Emily Mattlin, Jalen Daniels, Kristina Saha, Katie Kwan',
          opacity: 0.4
        });
        toner.addTo(earth);
        toner.addTo(earth);
                // Start a simple rotation animation
        var before = null;
        requestAnimationFrame(function animate(now) {
            var c = earth.getPosition();
            var elapsed = before? now - before: 0;
            before = now;
            earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
            requestAnimationFrame(animate);
        });
      }
var embedded = function(news, twitter, insta, spotify){
  var news = news
  var twitter = twitter
  var insta = insta
  var spotify = spotify
}

    // var div = document.getElementById("textDiv");
    // div.textContent = "my text";
    // var text = div.textContent;