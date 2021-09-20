const div_timezone = document.querySelector(".div-timezone");
const div_localdate = document.querySelector(".div-localdate");
document.querySelector(".btn").addEventListener("click", startQuery);

function startQuery()
{
    div_timezone.innerHTML="";
    div_localdate.innerHTML="";
    if ("geolocation" in navigator) {
        
        navigator.geolocation.getCurrentPosition(positioningSuccess, positioningError) ;
    }
    else positioningError () ;
}

function positioningError ()  {
    div_location.innerHTML = 'Невозможно получить ваше местоположение';
  }

  function positioningSuccess(position)
  {
    const { coords } = position;
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${position.coords.latitude}&long=${position.coords.longitude}`)
    .then((response)=>
    {
        return response.json();
    })
    .then((json)=>
    {
        processResult(json);
    }
    )
    .catch(()=>{console.log("error")});
  }

  function processResult(resultJson)
  {
      console.log(resultJson);
      div_timezone.innerHTML=`timezone: ${resultJson.timezone}`;
      div_localdate.innerHTML=`localdate: ${resultJson.date_time_txt}`;
  }