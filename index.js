"use strict";

let input = prompt("Введіть ціле число N:");
let N = parseInt(input, 10);

if (!isNaN(N) && input.trim() !== '') {
    let resultDiv = document.getElementById('result');
    let result = [];

    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            result.push(i);
        } else {
            break;
        }
    }

    resultDiv.textContent = `Числа від 1 до 100, квадрат яких не перевищує ${N}: ${result.join(', ')}`;
} else {
    alert("Введено некоректне значення. Будь ласка, введіть ціле число.");
}
