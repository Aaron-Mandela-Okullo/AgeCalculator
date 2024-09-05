const bttn = document.querySelector("#bttn");
const ageFeedback = document.querySelector("#ageFeedback");
const birthday = document.querySelector("#birthday");
bttn.addEventListener("click",ageCalculation);

function ageCalculation(){
  const birthdayValue = birthday.value;
  if(birthdayValue === ""){
    alert("Please enter your birthday!")
  }
  else{
    const age = getAge(birthdayValue);
    ageFeedback.innerText = `Your are ${age} ${age > 1 ?"years" : "year"} old`;
  }
}

function getAge(birthdayValue){
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if(month < 0 || month === 0 &&  currentDate.getDate() < birthdayDate.getDate()){
    age--
  }
  
  return age;
}