const API_URL = "https://mindicador.cl/api/"
const CURRENCY = document.getElementById("currency")


async function fetchCurrencyData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching currency data:", error);
    }
}


// Agregar un evento al botón con id "convert" para convertir la moneda chilena a la moneda seleccionada por el usuario
document.getElementById("convert").addEventListener("click", async () => {
    const currency = CURRENCY.value;
    const amount = parseFloat(document.getElementById("amount").value);
    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Por favor, ingrese un monto válido.";
        return;
    }

    const data = await fetchCurrencyData();
    
    if (data && data[currency]) {
        const exchangeRate = data[currency].valor;
        const convertedAmount = amount * exchangeRate;
        document.getElementById("result").innerText = `Resultado: $${convertedAmount.toFixed(2)}`;
    } else {
        document.getElementById("result").innerText = "Moneda no encontrada.";
    }
});





// Mostrar resultado en el elemento con id "result"