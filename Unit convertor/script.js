function convert() {
    const input = parseFloat(document.getElementById('input').value);
    const unitFrom = document.getElementById('unitFrom').value;
    let result;

    switch (unitFrom) {
        case 'celsius':
            result = (input * 9/5) + 32;
            document.getElementById('output').innerText = `${input} Celsius is equal to ${result.toFixed(2)} Fahrenheit`;
            break;
        case 'kilometers':
            result = input * 0.621371;
            document.getElementById('output').innerText = `${input} Kilometers is equal to ${result.toFixed(2)} Miles`;
            break;
        case 'pounds':
            result = input * 0.453592;
            document.getElementById('output').innerText = `${input} Pounds is equal to ${result.toFixed(2)} Kilograms`;
            break;
        case 'gallons':
            result = input * 3.78541;
            document.getElementById('output').innerText = `${input} Gallons is equal to ${result.toFixed(2)} Liters`;
            break;
        default:
            document.getElementById('output').innerText = "Invalid conversion.";
    }
}
