function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
document.bmiForm.bmi.value = finalBmi
var pro = finalBmi*100/30
document.bmiForm.graf.value = pro
document.getElementById("bor").style.width = pro + "%";
document.getElementById("bor").style.border = 3+"px";
if(finalBmi < 18.5){
document.bmiForm.meaning.value = "Du er for tynd"
document.getElementById("bor").style.backgroundColor = "blue";

}
if(finalBmi > 18.5 && finalBmi < 25){
document.bmiForm.meaning.value = "Du har et sundt BMI"
document.getElementById("bor").style.backgroundColor = "green";

}
if(finalBmi > 25){
document.bmiForm.meaning.value = "Du er overvægtig."
document.getElementById("bor").style.backgroundColor = "red";
}
}
else{
alert("Please Fill in everything correctly")
}
}

function nulstil() {
document.getElementById("bor").style.width = "0";
document.getElementById("bor").style.border = 0+"px";

}
