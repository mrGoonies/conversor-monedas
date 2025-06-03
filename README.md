# Proyecto Final Curso JS

Este repositorio contiene el proyecto final del curso de JavaScript ofrecido por Desafio LATAM. El objetivo es crear una aplicación web que permita a los usuarios convertir moneda chilena (CLP) a distintas monedas extranjeras utilizando la API llamada miindicador.cl.

## Descripción del Proyecto
La aplicación permite a los usuarios ingresar una cantidad en pesos chilenos y seleccionar la moneda extranjera a la que desean convertir. Utiliza la API de miindicador.cl para obtener las tasas de cambio actualizadas y realizar la conversión.

## Indicadores disponibles

A continuación se listan los indicadores y monedas soportados por la API y la aplicación, junto con su valor de ejemplo:

| Código              | Nombre                                      | Unidad de medida | Valor de ejemplo |
|---------------------|---------------------------------------------|------------------|------------------|
| uf                  | Unidad de Fomento (UF)                      | Pesos            | 39194.5          |
| ivp                 | Indice de Valor Promedio (IVP)              | Pesos            | 40557.92         |
| dolar               | Dólar Observado                             | Pesos            | 941.97           |
| dolar_intercambio   | Dólar Acuerdo                               | Pesos            | 758.87           |
| euro                | Euro                                        | Pesos            | 1069.93          |
| ipc                 | Indice de Precios al Consumidor (IPC)       | Porcentaje        | 0.2              |
| utm                 | Unidad Tributaria Mensual (UTM)             | Pesos            | 68785            |
| imacec              | Indice Mensual de Actividad Económica       | Porcentaje        | 2.5              |
| tpm                 | Tasa Política Monetaria (TPM)               | Porcentaje        | 5                |
| libra_cobre         | Libra de Cobre                              | Dólar             | 4.36             |
| tasa_desempleo      | Tasa de desempleo                           | Porcentaje        | 8.84             |
| bitcoin             | Bitcoin                                     | Dólar             | 96927.01         |

> **Nota:** Los valores mostrados son referenciales y pueden variar según la fecha de consulta.

## Uso

1. Ingresa el monto en CLP que deseas convertir.
2. Selecciona la moneda o indicador al que deseas convertir.
3. Haz clic en el botón **Convertir**.
4. El resultado aparecerá en pantalla.

### Estructura del proyecto

```
index.html
README.md
src/
  script.js
  style.css
```
