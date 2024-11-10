function parallelogramCalculate() {
    const base = getInputValueById("parallelogram-base")
    const height = getInputValueById("parallelogram-height")
    const area = base * height;

    setInnerTextById("parallelogram-area", area);
}


function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const pElement = document.getElementById(elementId);

   pElement.innerText = area ;
}
