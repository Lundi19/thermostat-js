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
});