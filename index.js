const form=document.getElementById("form");
const latitudeInput=document.getElementById("latitude");
const longitudeInput=document.getElementById("longitude");
const resultContainer=document.getElementById("result");
const place=document.getElementById("place");
const aqi=document.getElementById("aqi");
const co=document.getElementById("co");
const no2=document.getElementById("no2");
const o3=document.getElementById("o3");
const pm2=document.getElementById("pm2");
const pm10=document.getElementById("pm10");
const so2=document.getElementById("so2");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude=latitudeInput.value;
    const longitude=longitudeInput.value;
    console.log(latitude);
    console.log(longitude);
    const url=`https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1ea5c57c66msh8f2fb1f100b09dap110f3ejsn72a49385318f',
            'x-rapidapi-host': 'air-quality.p.rapidapi.com'
        }
    };
    fetch(url,options)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        let city=result.city_name;
        let readings=result.data[0];
        console.log(readings);
        place.textContent=city;
        aqi.textContent=readings.aqi;
        co.textContent=readings.co;
        no2.textContent=readings.no2;
        o3.textContent=readings.o3;
        pm2.textContent=readings.pm25;
        pm10.textContent=readings.pm10;
        so2.textContent=readings.so2;
        resultContainer.style.display = "flex";
    });

});