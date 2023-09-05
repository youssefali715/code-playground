let errors = document.querySelectorAll(".error");
window.onload = function (){
  for (let i = 0; i < errors.length; i++){
    errors[i].style.display = 'none';
  }
}
document.forms[0][0].onblur = function () {
  let numtest = false, letterTest = false;
  Check_Num_Loop: 
  for (let i = 0; i < this.value.length; i++){
    if (Boolean(Number(this.value[i])) == true){
      numtest = true;
      break Check_Num_Loop;
    }
  }
  Check_Letter_Loop: 
  for (let i = 0; i < this.value.length; i++){
    if (Boolean(Number(this.value[i])) == false && this.value[i] != '_'){
      letterTest = true;
      break Check_Letter_Loop;
    }
  }
  if (this.value.includes('_') == true && numtest == true && letterTest == true){
    errors[0].style.display = "none";
  } else {
    errors[0].style.display = "block";
  }
};
document.forms[0][1].onblur = function () {
  if (
    this.value.endsWith("@outlook.com") == true ||
    this.value.endsWith("@gmail.com") == true
  ) {
    errors[1].style.display = "none";
  } else {
    errors[1].style.display = "block";
  }
  }
document.forms[0][2].onblur = function () {
  if (
    this.value.length <= 10) {
    errors[2].style.display = "none";
  } else {
    errors[2].style.display = "block";
  }
  }
document.forms[0][4].onclick = function (ele){
  if (
    document.forms[0][3].checked == true &&
    document.forms[0][2].value != "" &&
    document.forms[0][1].value != "" &&
    document.forms[0][0].value != ""
  ) {
  } else {
    ele.preventDefault();
  }
}