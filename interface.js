document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.energyUsage();
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
    thermostat.reset();
    updateTemperature();
  });

  document.querySelector('#PSM_on').addEventListener('click', () => {
    thermostat.powersave = true;
    document.querySelector('#power-save-status').innerText = 'on';
    updateTemperature();
  })

  document.querySelector('#PSM_off').addEventListener('click', () => {
    thermostat.powersave = false;
    document.querySelector('#power-save-status').innerText = 'off';
    updateTemperature();
  })
});