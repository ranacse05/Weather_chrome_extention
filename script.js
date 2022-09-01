async function fetchData() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('table').style.display = 'none';

    var api= 'apikey' ;
    const res=await fetch ("http://dataservice.accuweather.com/currentconditions/v1/27905?apikey="+api);
    const record=await res.json();
    console.log(record);
   
    var time  = new Date( record[0].EpochTime*1000);
    var code = record[0].WeatherIcon;

    if(code<9) code = '0'+code;
    
    var url = 'https://developer.accuweather.com/sites/default/files/'+code+'-s.png';
    var icon = '<img src="'+url+'" alt="'+record[0].WeatherText+'" width="140" height="140">'; 
    document.getElementById("WeatherDate").innerHTML= time.toLocaleString();
    document.getElementById("Temperature").innerHTML= record[0].Temperature.Metric.Value+' '+record[0].Temperature.Metric.Unit;
    document.getElementById("WeatherText").innerHTML= record[0].WeatherText;
    document.getElementById("WeatherIcon").innerHTML= icon;

    document.getElementById('loading').style.display = 'none';
    document.getElementById('table').style.display = 'block';


}
fetchData();