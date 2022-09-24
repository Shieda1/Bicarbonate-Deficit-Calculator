// https://www.omnicalculator.com/health/bicarbonate-deficit

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const bicarbonatedeficitRadio = document.getElementById('bicarbonatedeficitRadio');
const patientsweightRadio = document.getElementById('patientsweightRadio');
const actualbicarbonatelevelRadio = document.getElementById('actualbicarbonatelevelRadio');
const desiredbicarbonatelevelRadio = document.getElementById('desiredbicarbonatelevelRadio');

let bicarbonatedeficit;
let patientsweight = v1;
let actualbicarbonatelevel = v2;
let desiredbicarbonatelevel = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

bicarbonatedeficitRadio.addEventListener('click', function() {
  variable1.textContent = 'Patient\'s weight';
  variable2.textContent = 'Actual bicarbonate level';
  variable3.textContent = 'Desired bicarbonate level';
  patientsweight = v1;
  actualbicarbonatelevel = v2;
  desiredbicarbonatelevel = v3;
  result.textContent = '';
});

patientsweightRadio.addEventListener('click', function() {
  variable1.textContent = 'Bicarbonate deficit';
  variable2.textContent = 'Actual bicarbonate level';
  variable3.textContent = 'Desired bicarbonate level';
  bicarbonatedeficit = v1;
  actualbicarbonatelevel = v2;
  desiredbicarbonatelevel = v3;
  result.textContent = '';
});

actualbicarbonatelevelRadio.addEventListener('click', function() {
  variable1.textContent = 'Bicarbonate deficit';
  variable2.textContent = 'Patient\'s weight';
  variable3.textContent = 'Desired bicarbonate level';
  bicarbonatedeficit = v1;
  patientsweight = v2;
  desiredbicarbonatelevel = v3;
  result.textContent = '';
});

desiredbicarbonatelevelRadio.addEventListener('click', function() {
  variable1.textContent = 'Bicarbonate deficit';
  variable2.textContent = 'Patient\'s weight';
  variable3.textContent = 'Actual bicarbonate level';
  bicarbonatedeficit = v1;
  patientsweight = v2;
  actualbicarbonatelevel = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(bicarbonatedeficitRadio.checked)
    result.textContent = `Bicarbonate deficit = ${computebicarbonatedeficit().toFixed(2)}`;

  else if(patientsweightRadio.checked)
    result.textContent = `Patient's weight = ${computepatientsweight().toFixed(2)}`;

  else if(actualbicarbonatelevelRadio.checked)
    result.textContent = `Actual bicarbonate level = ${computeactualbicarbonatelevel().toFixed(2)}`;

  else if(desiredbicarbonatelevelRadio.checked)
    result.textContent = `Desired bicarbonate level = ${computedesiredbicarbonatelevel().toFixed(2)}`;
})

// calculation

// bicarbonatedeficit = 0.5 * patientsweight * (desiredbicarbonatelevel - actualbicarbonatelevel)

function computebicarbonatedeficit() {
  return 0.5 * Number(patientsweight.value) * (Number(desiredbicarbonatelevel.value) - Number(actualbicarbonatelevel.value));
}

function computepatientsweight() {
  return Number(bicarbonatedeficit.value) / (0.5 * (Number(desiredbicarbonatelevel.value) - Number(actualbicarbonatelevel.value)));
}

function computeactualbicarbonatelevel() {
  return Number(desiredbicarbonatelevel.value) - (Number(bicarbonatedeficit.value) / ( 0.5 * Number(patientsweight.value)));
}

function computedesiredbicarbonatelevel() {
  return (Number(bicarbonatedeficit.value) / ( 0.5 * Number(patientsweight.value))) + Number(actualbicarbonatelevel.value);
}