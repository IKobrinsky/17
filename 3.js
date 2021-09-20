const div_resolution = document.querySelector(".div-resolution");
const div_location = document.querySelector(".div-location");
document.querySelector(".btn").addEventListener("click", startQuery);

function startQuery()
{

    if ("geolocation" in navigator) {
        div_location.innerHTML = 'Ищем ваше местоположение';
        navigator.geolocation.getCurrentPosition(positioningSuccess, positioningError) ;
    }
      else div_location.innerHTML =`Информация о местоположении недоступна`;
    div_resolution.innerHTML = `Размер экрана ${window.screen.width} х ${window.screen.height}`;
}

function positioningError ()  {
    console.log("error");
    div_location.innerHTML = 'Невозможно получить ваше местоположение';
  }

  function positioningSuccess(position)
  {
    const { coords } = position;
    console.log(position);
    div_location.innerHTML =`Координаты ${position.coords.latitude} ${position.coords.longitude}`;
  }
