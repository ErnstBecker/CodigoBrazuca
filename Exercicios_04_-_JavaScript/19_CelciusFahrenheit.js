const numeroAleatorio = () => Math.random() * 546.3 - 273.15;
//? Escolhi 546.3 porque é o dobro de 273.15, garantindo uma probabilidade igual de ser positivo ou negativo.
//? Além disso, 273 representa a temperatura mínima, que é conhecida como o zero absoluto.

const temperaturaCelcius = numeroAleatorio().toFixed(2);
const temperaturaFahrenheit = (temperaturaCelcius * 9 / 5) + 32;

console.log(`A temperatura em Celcius é: ${temperaturaCelcius} °C e em Fahrenheit é: ${temperaturaFahrenheit.toFixed(2)} °F`);
