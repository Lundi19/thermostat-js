document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    if (thermostat.energyUsage() === 'low-usage') {
      document.querySelector('#temperature').style.color = 'green';
    } else if (thermostat.energyUsage() === 'medium-usage') {
      document.querySelector('#temperature').style.color = 'black';
    } else {
      document.querySelector('#temperature').style.color = 'red';
    }
  }

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#up').addEventListener('click', () => {
    thermostat.up(1);
    updateTemperature();
  });

  document.querySelector('#down').addEventListener('click', () => {
    thermostat.down(1);
    updateTemperature();
  });

  document.querySelector('#reset').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector('#PSM_on').addEventListener('click', () => {
    thermostat.powerSavingMode = true;
    document.querySelector('#power-save-status').innerText = 'on';
    updateTemperature();
  })

  document.querySelector('#PSM_off').addEventListener('click', () => {
    thermostat.powerSavingMode = false;
    document.querySelector('#power-save-status').innerText = 'off';
    updateTemperature();
  })

  // fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  // .then((response) => {
  //   return response.json()
  // })
  // .then((data) => {
  //   document.querySelector('#current-temperature').innerText = data.main.temp;
  // });
  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
  
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
      })
  }
  
  displayWeather('London');

  document.querySelector('#select-city').addEventListener('submit', (event) => {
    // event.preventDefault();
    const city = document.querySelector('#current-city').value;

    displayWeather(city);
})

});



