function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById("triangle-base").value;
    const base = parseFloat(triangleBaseInput);

    const triangleHeightInput = document.getElementById("triangle-height").value;
    const height = parseFloat(triangleHeightInput);

    const area = 0.5 * base * height;

    const triangleAreaSpan = document.getElementById("triangle-area");

    triangleAreaSpan.innerText = area ;
}

