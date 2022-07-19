function fetchData(){
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=fd6af376b493f090671dafd0efb93ba2")
        .then(response => {
            if(!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
          
            //const {} = data;
            const html1 = `
                
                 
                 
                <div style="background-color:white; width:400px;height:300px; margin-top:150px;margin-left:100px; text-align:center; padding-top:90px; padding-bottom:90px; border-radius:10px;background-image:url(10.jpg);background-size:cover;">
                    <strong><p style="font-size:30px;" >Coord lon: ${data.coord.lon}</p></strong>
                    <strong><p style="font-size:25px;" >Coord lat: ${data.coord.lat}</p></strong>
                    </div>
                <div style="background-color:white; width:400px;height:300px; margin-left:600px;margin-top:-300px;text-align:center;border-radius:10px;padding-top:110px;padding-bottom:110px;opacity:0.8;background-image:url(12.png);background-size:cover;">
                    <strong><p style="font-size:30px;" > base: ${data.base}</p></strong>
                    </div>
                <div style="background-color:white; width:400px;height:300px; margin-left:1100px; margin-top:-300px;text-align:center;border-radius:10px;padding-top:10px;padding-bottom:10px;opacity:0.8;background-image:url(1.jpeg);background-size:cover;">
                    <strong><p style="font-size:30px;" >Temp: ${data.main.temp}</p>
                    <strong><p style="font-size:20px;" >feels_like: ${data.main.feels_like}</p></strong>
                    <strong><p style="font-size:20px;" >Temp_min: ${data.main.temp_min}</p></strong>
                    <strong><p style="font-size:20px;" >Temp_max: ${data.main.temp_max}</p></strong>
                    <strong><p style="font-size:20px;" >Pressure: ${data.main.pressure}</p></strong>
                    <strong><p style="font-size:20px;" >Humidity: ${data.main.humidity}</p></strong>
                    </div>
                <div style="background-color:white; width:400px; height:300px; margin-top:50px;margin-left:100px;text-align:center;border-radius:10px;padding-top:110px;padding-bottom:110px;opacity:0.8;background-image:url(3.png);background-size:cover;">
                    <strong><p style="font-size:30px;" >Visibility: ${data.visibility}</p></strong>
                    </div>
                <div style="background-color:white; width:400px;height:300px; margin-left:600px;margin-top:-300px;text-align:center;border-radius:10px;padding-top:70px;padding-bottom:70px;opacity:0.8;background-image:url(4.jpeg);background-size:cover;">
                    <strong><p style="font-size:30px;" >Wind speed: ${data.wind.speed}</p></strong>
                    <strong><p style="font-size:25px;" >Deg: ${data.wind.deg}</p></strong>
                    <strong><p style="font-size:22px;" >Gust: ${data.wind.gust}</p></strong>
                    </div>
                <div style="background-color:white; width:400px;height:300px; margin-left:1100px;margin-top:-300px;text-align:center;border-radius:10px;padding-top:110px;padding-bottom:110px;opacity:0.8;background-image:url(2.jpeg);background-size:cover;">
                    <strong><p style="font-size:30px;" >Rain: ${data.rain ? data.rain['1h'] : ''}</p></strong>
                    </div>
                <div style="background-color:white; width:400px;height:300px; margin-left:100px;margin-top:50px;text-align:center;border-radius:10px;padding-top:90px;padding-bottom:90px;opacity:0.8;background-image:url(5.png);background-size:cover;">
                    <strong><p style="font-size:30px;" >Clouds: ${data.clouds.all}</p></strong>
                    <strong><p style="font-size:20px;" >DT: ${data.dt}</p></strong>
                    </div>
                <div style="background-color:white; width:400px;height:300px; margin-left:600px;margin-top:-300px;text-align:center;border-radius:10px;padding-top:20px;padding-bottom:20px;opacity:0.8;background-image:url(6.png);background-size:cover;">
                    <strong><p style="font-size:30px;" >SYS type: ${data.sys.type}</p></strong>
                    <strong><p style="font-size:20px;" >SYS ID: ${data.sys.id}</p></strong>
                    <strong><p style="font-size:20px;" >SYS Country: ${data.sys.country}</p></strong>
                    <strong><p style="font-size:20px;" >SYS Sunrise: ${data.sys.sunrise}</p></strong>
                    <strong><p style="font-size:20px;" >SYS Sunset: ${data.sys.sunset}</p></strong>
                    </div>
                <div style="background-color:white; width:400px;height:300px; margin-left:1100px;margin-top:-300px;text-align:center;border-radius:10px;padding-top:110px;padding-bottom:110px;opacity:0.8;background-image:url(7.jpeg);background-size:cover;">
                    <strong><p style="font-size:30px;" >Timezone: ${data.timezone}</p></strong>
                    </div>
                <div style="background-color:white; width:400px;height:300px; margin-left:100px;margin-top:50px;text-align:center;border-radius:10px;padding-top:110px;padding-bottom:110px;opacity:0.8;background-image:url(8.jpeg);background-size:cover;">
                    <strong><p style="font-size:30px;" >id: ${data.id}</p></strong>
                    </div>
                <div style="background-color:white; width:400px;height:300px;  margin-left:600px;margin-top:-300px;text-align:center;border-radius:10px;padding-top:110px;padding-bottom:110px;opacity:0.8;background-image:url(9.gif);background-size:cover;">
                    <strong><p style="font-size:30px;" >name: ${data.name}</p></strong>
                    </div>
                <div style="background-color:white; width:400px;height:300px; margin-left:1100px;margin-top:-300px;text-align:center;border-radius:10px;padding-top:110px;padding-bottom:110px;opacity:0.8;background-image:url(11.jpeg);background-size:cover;">
                    <strong><p style="font-size:30px;" >cod: ${data.cod}</p></strong>
                    </div>
  
                  <div style="margin-left:100px;margin-top:150px;">
                  </div>                 
            `;

        
            const html2 = data.weather.map((item) =>{ return ` <div style="background-color:white; width:400px;height:300px; margin-left:600px; margin-top:0px;opacity:0.8;text-align:center;border-radius:10px;padding-top:70px;padding-bottom:70px;margin-top:-100px;background-image:url(1.jpeg);background-size:cover;">
            <strong><p style="font-size:30px;" >id: ${item.id}</p></strong>
            <strong><p style="font-size:20px;" >description: ${item.description}</p></strong>
            <strong><p style="font-size:20px;" >main: ${item.main}</p></strong>
            </div>`
        }).join('');
            document.querySelector("#app").insertAdjacentHTML("afterbegin",html1);
            document.querySelector("#app1").insertAdjacentHTML("afterbegin",html2);
        })
};

fetchData();
