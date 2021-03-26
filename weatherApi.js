let request = new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=60.116667&lon=19.9&appid=fb117c812de905bc9b9252750cc7d728',true);
request.send();
request.onload = function () {
    let data = JSON.parse(this.response);
    console.log(data.weather);
}