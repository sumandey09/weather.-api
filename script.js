var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik ="6230ff5f4593a349b97d78e0e4ee9f68"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
  fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/New%20York%20City%2CNY?unitGroup=us&key=YOUR_API_KEY&contentType=json", {
  method: 'GET', 
  headers: {
 
  },
           
})
  .then(res =>res.json())

  .than(data =>
    {
      var nameval = data['name']
      var descrip = data['weather']['0']['description']
      var tempature = data['main']['temp']
      var wndspeed = data['wind']['speed']

      city.innerHTML=`Weather of <span>${nameval}<span>`
      temp.innerHTML=`Temperature:<span>${convertion(tempature)}c</span>`
      description.innerHTML=`Sky Conditions:<span>${dascrip}<span>`
      wind.innerHTML=`Wind Speed:<span>${wndspeed}km/h<span>`

    }
    )
    .catch(err =>alert('You entered Wrong City Name'))
}
)

