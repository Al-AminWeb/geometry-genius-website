function calculateRhombus() {
 const rhombusOne = document.getElementById("rhombus-one").value;
 const one = parseFloat(rhombusOne);

 const rhombusTwo = document.getElementById("rhombus-two").value;

 const two = parseFloat(rhombusTwo);

  area = 0.5 * one * two;

  const rhombusArea = document.getElementById("rhombus-area");

  rhombusArea.innerText = area ;

}