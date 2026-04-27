function showSection(id){

  let sections = document.querySelectorAll("section");

  sections.forEach(sec => {
    sec.style.display = "none";
  });

  let target = document.getElementById(id);

  if(target){
    target.style.display = "block";
  }
}


function validateForm(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let namePattern = /^[A-Za-z\s]+$/;
  let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if(!namePattern.test(name)){
    alert("Name must contain only letters!");
    return false;
  }

  if(!emailPattern.test(email)){
    alert("Invalid email format!");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
