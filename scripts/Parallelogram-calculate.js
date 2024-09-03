function parallelogramCalculate() {
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);

    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);

    const area = base * height;
    const parallelogramAreaSpan = document.getElementById("parallelogram-area");
    parallelogramAreaSpan.innerText = area;
}