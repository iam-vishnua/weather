const form = document.getElementById('form')
form.addEventListener('submit',gettemperature)

function gettemperature(event){
   event.preventDefault()
   
   const latitudeinput= document.getElementById("lattitude")
   const lattitudeentry=latitudeinput.value
   const longitudeinput= document.getElementById("longitude")
   const longitudeentry=longitudeinput.value
   const url="https://api.open-meteo.com/v1/forecast?latitude="+lattitudeentry+"&longitude="+longitudeentry+"&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
   fetch(url)
  .then(response => response.json())
  .then(showtemperature)
  .catch(showerror)


  
}










function showtemperature(result){
   const temperature= (result.current_weather.temperature)
   const temp=document.getElementById("degree")
   degree.innerHTML=temperature

  
}

function showerror(error){
   degree.innerHTML="some error occured"
}
