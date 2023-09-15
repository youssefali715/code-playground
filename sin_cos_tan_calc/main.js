let submitButton = document.querySelector('button#submit');
let reseultsSection = document.querySelector('.results');
let myForm = document.forms[0];
let sin_angle_val, cos_angle_val, tan_angle_val;

function decToFrac(dec) {
  return [...Array(1000).keys()].flatMap(
    i => [...Array(1000).keys()].map(
      j => [
        i + 1, j + 1, (i + 1) / (j + 1),
        Math.abs(((i + 1) / (j + 1)) - dec)
      ]
    )
  ).sort((a, b) => a[3] - b[3])[0].slice(0, 2)
};
submitButton.onclick = function () {
  let ac = document.forms[0][0].value;
  let ab = document.forms[0][1].value;
  let bc = document.forms[0][2].value;
  function checkSides (){
    let missedSide = [];
    if (ac == '')
      missedSide.push('ac')
    if (ab == '')
      missedSide.push('ab')
    if (bc == '')
      missedSide.push('bc')
    if (missedSide.length > 1){
      window.alert("You Must Add at least two sides")
      preventDefault()
    }else{
      if (missedSide[0] == 'ac'){
        let acPowered = (ab ** 2) + (bc ** 2);
        ac = Math.sqrt(acPowered);
      } else if (missedSide[0] == 'bc'){
        let bcPowered = ac ** 2 - ab ** 2;
        bc = Math.sqrt(bcPowered);
      } else if (missedSide[0] == 'ab'){
        let abPowered = ac ** 2 - bc ** 2;
        ab = Math.sqrt(abPowered);
      }
    }
  }
  checkSides()
  let selectAngle = document.querySelector('select#angle').value;
  if (selectAngle == 'a') {
    sin_angle_val = decToFrac(bc / ac).join("/")
    cos_angle_val = decToFrac(ab / ac).join("/")
    tan_angle_val = decToFrac(bc / ab).join("/")
  }else if (selectAngle == 'b') {
    sin_angle_val = 1
    cos_angle_val = 0
    tan_angle_val = '⚠'
  }else if (selectAngle == 'c') {
    sin_angle_val = decToFrac(ab / ac).join("/")
    cos_angle_val = decToFrac(bc / ac).join("/")
    tan_angle_val = decToFrac(ab / bc).join("/")
  }
  let sin_angle = document.createElement("p");
  sin_angle.innerHTML = `sin(${selectAngle.toUpperCase()}) --> ${sin_angle_val}`;
  let cos_angle = document.createElement("p");
  cos_angle.innerHTML = `cos(${selectAngle.toUpperCase()}) --> ${cos_angle_val}`;
  let tan_angle = document.createElement("p");
  tan_angle.innerHTML = `tan(${selectAngle.toUpperCase()}) --> ${tan_angle_val}`;

  reseultsSection.innerHTML = "";
  reseultsSection.appendChild(sin_angle);
  reseultsSection.appendChild(cos_angle);
  reseultsSection.appendChild(tan_angle);
}