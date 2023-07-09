const input = document.querySelector("#temperature")
const op1 = document.querySelector("#scale-from")
const op2 = document.querySelector("#scale-to")
const btn = document.querySelector("#convert-btn")
const result = document.querySelector("#result")

function converter() {
    btn.addEventListener('click', () => {
      realizarConversao();
    });
  
    document.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        realizarConversao();
      }
    });
}

function realizarConversao() {
    let valueop = op1.value + '_' + op2.value;
  
        switch (valueop) {
        case 'celsius_fahrenheit': {
            let celsius_fahrenheit = (input.value * 9/5) + 32;
            console.log(celsius_fahrenheit);
            result.innerHTML = celsius_fahrenheit;
            break;
        }
        
        case 'celsius_kelvin': {
            let celsius_kelvin = parseFloat(input.value) + 273.15;
            console.log(celsius_kelvin);
            result.innerHTML = celsius_kelvin;
            break;
        }
    
        case 'fahrenheit_celsius': {
            let fahrenheit_celsius = (parseFloat(input.value) - 32) * 5/9;
            console.log(fahrenheit_celsius);
            result.innerHTML = fahrenheit_celsius;
            break;
        }
    
        case 'fahrenheit_kelvin': {
            let fahrenheit_kelvin = (parseFloat(input.value) - 32) * 5/9 + 273.15;
            console.log(fahrenheit_kelvin);
            result.innerHTML = fahrenheit_kelvin;
            break;
        }
    
        case 'kelvin_celsius': {
            let kelvin_celsius = parseFloat(input.value) - 273.15;
            console.log(kelvin_celsius);
            result.innerHTML = kelvin_celsius;
            break;
        }
        
        case 'kelvin_fahrenheit': {
            let kelvin_fahrenheit = (parseFloat(input.value) - 273.15) * 9/5 + 32;
            console.log(kelvin_fahrenheit);
            result.innerHTML = kelvin_fahrenheit;
            break;
        }
    
        default:
            result.innerHTML = 'Opção Inválida';
        }
  }
  
converter();
  