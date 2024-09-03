function rhombusCalculate() {
    const rhombusOneInput = document.getElementById("rhombus-one");
    const rhombusOneText = rhombusOneInput.value;
    const rhombusOne = parseFloat(rhombusOneText)

    const rhombusTwoInput = document.getElementById("rhombus-two");
    const rhombusTwoText = rhombusTwoInput.value;
    const rhombusTwo = parseFloat(rhombusTwoText);

   const  area = 0.5 * rhombusOne * rhombusTwo;
    const rhombusArea = document.getElementById("rhombus-area");
    rhombusArea.innerText = area;
}