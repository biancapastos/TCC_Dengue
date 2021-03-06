
function getLocation()
  {
  if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  else{
      x.innerHTML="Geolocalização não é suportada nesse browser.";
    }
  }
 
function showPosition(position)
  {
    latitude_inicial=position.coords.latitude;
    longitude_inicial=position.coords.longitude;
    initMap();
  }
 
function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="Usuário rejeitou a solicitação de Geolocalização."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Localização indisponível."
      break;
    case error.TIMEOUT:
      x.innerHTML="O tempo da requisição expirou."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="Algum erro desconhecido aconteceu."
      break;
    }
  }