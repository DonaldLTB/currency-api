const express = require ('express');

// Currency Conversion Table
const currencyArray = [
    { unit: "JPY", rate : 1 },
    { unit: "USD", rate : 104.49 },
    { unit: "EUR", rate : 124.86 },
    { unit: "KRW", rate : 15.21 },
];

const app = express();
app.use(express.json())