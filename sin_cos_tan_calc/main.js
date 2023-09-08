let submitButton = document.querySelector('button#submit');
let reseultsSection = document.querySelector('.results');
let myForm = document.forms[0];

submitButton.onclick = function (){
  const sin_a = myForm[2].value + '/' + myForm[0].value
  const cos_a = myForm[1].value + '/' + myForm[0].value
  const tan_a = myForm[2].value + '/' + myForm[1].value
  const sin_c = myForm[1].value + '/' + myForm[0].value
  const cos_c = myForm[2].value + '/' + myForm[0].value
  const tan_c = myForm[1].value + '/' + myForm[2].value;
  let selectAngle  = document.querySelector('select#angle').value;
  if (selectAngle == 'a'){
    let sin_angle = document.createElement("p");
    sin_angle.innerHTML = `sin(${selectAngle.toUpperCase()}) --> ${sin_a}`;
    let cos_angle = document.createElement("p");
    cos_angle.innerHTML = `cos(${selectAngle.toUpperCase()}) --> ${cos_a}`;
    let tan_angle = document.createElement("p");
    tan_angle.innerHTML = `tan(${selectAngle.toUpperCase()}) --> ${tan_a}`;
    
    reseultsSection.innerHTML = "";
    reseultsSection.appendChild(sin_angle);
    reseultsSection.appendChild(cos_angle);
    reseultsSection.appendChild(tan_angle);
  }
}
function decToFrac (dec) {
  return [...Array(1000).keys()].flatMap(
    i => [...Array(1000).keys()].map(
      j => [
        i + 1, j + 1, (i + 1) / (j + 1),
        Math.abs(((i + 1) / (j + 1)) - dec)
      ]
    )
  ).sort((a, b) => a[3] - b[3])[0].slice(0, 2)};
console.log(decToFrac( 8 / 10 ))