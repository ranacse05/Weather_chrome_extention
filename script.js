async function fetchData() {
    const res=await fetch ("http://dataservice.accuweather.com/currentconditions/v1/27905?apikey="+api);
    const record=await res.json();
    console.log(record);
   
    var time  = new Date( record[0].EpochTime*1000);
    document.getElementById("WeatherDate").innerHTML= time.toLocaleString();
    document.getElementById("Temperature").innerHTML= record[0].Temperature.Metric.Value+' '+record[0].Temperature.Metric.Unit;
    document.getElementById("WeatherText").innerHTML= record[0].WeatherText;

}
fetchData();