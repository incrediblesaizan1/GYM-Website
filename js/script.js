const welcomeModal = document.querySelector(".welcomeModal");
const backgroundImage = document.querySelector(".backgroundImage");
const modalSignIn = document.querySelector(".modalSignIn");
const modalSignUp = document.querySelector(".modalSignUp");
const modalSignInInp = modalSignIn.getElementsByTagName("input");
const modalSignUpInp = modalSignUp.getElementsByTagName("input");
const modalSignInSubmit = document.querySelector(".modalSignInSubmit");
const modalSignUpSubmit = document.querySelector(".modalSignUpSubmit");
const warn = document.querySelector(".warn");
const warn1 = document.querySelector(".warn1");
const warn2 = document.querySelector(".warn2");
const warn3 = document.querySelector(".warn3");
const container = document.querySelector(".container");
const containerSignUp = document.querySelector(".container2");  
const containerInp = container.getElementsByTagName("input");
const container2Inp = containerSignUp.getElementsByTagName("input");
const signUp = document.querySelector(".signUp");
const welcome = document.querySelector(".welcome");
const welcomeSk = document.querySelector(".welcomeSk");
const welcomeSkSpan = document.querySelector(".welcomeSk span");
const incorrect1 = document.querySelector(".incorrect1");
const incorrect = document.querySelector(".incorrect");
const signUpSp1 = document.querySelector(".signUpSp1");
const signUpSp = document.querySelector(".signUpSp");
const signInSp1 = document.querySelector(".signInSp1");
const signInSp = document.querySelector(".signInSp");
const containerSubmit = document.querySelector(".submit");
const signIn = document.querySelector(".signIn");
const containerSignUpSubmit = document.querySelector('.submitBtnC2')



// Menu toggle
document.querySelector(".bx-menu").addEventListener("click", () => {
  const menu = document.querySelector("nav ul");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex"; // Show the menu
  } else {
    menu.style.display = "none"; // Hide the menu
  }
});


// Welcome Modal
window.addEventListener("load", () => {
  welcomeModal.classList.remove("welcomeModalD");
  backgroundImage.style.filter = "blur(10px)";
});


// Remove Welcome Modal
backgroundImage.addEventListener("click", () => {
  welcomeModal.classList.add("welcomeModalD");
  backgroundImage.style.filter = "blur(0px)";
// clear sign in modal on click signIn container
container.addEventListener("click", () => {
  clearTimeout(signinModal);
  console.log("modalSignIn is cleared");
});
// clear sign in modal on click singUp container
containerSignUp.addEventListener("click", () => {
  clearTimeout(signinModal);
  console.log("modalSignIn is cleared");
});
});

let signinModal = setTimeout(() => {
  modalSignIn.classList.remove("modalSignInD");
  backgroundImage.style.filter = "blur(10px)";
  welcomeModal.classList.add("welcomeModalD");
}, 8000);
// Remove signin modal
backgroundImage.addEventListener("click", () => {
  modalSignIn.classList.add("modalSignInD");
  backgroundImage.style.filter = "blur(0px)";
});
// submit signin modal
modalSignInSubmit.addEventListener("click", () => {
  if (modalSignInInp[0].value == "" || modalSignInInp[1].value == "") {
    warn.classList.remove("warnD");
  } else if (
    modalSignInInp[0].value == "glorioussaizan1@gmail.com" &&
    modalSignInInp[1].value == "iamsaizan1"
  ) {
    modalSignIn.classList.add("modalSignInD");
    backgroundImage.style.filter = "blur(0px)";
    container.classList.add("containerD");
    signUp.classList.add("signUpD");
    welcomeSk.classList.remove("welcomeD");
  } else if (
    modalSignInInp[0].value == "glorioussaizan1@gmail.com" &&
    modalSignInInp[1].value != "iamsaizan1"
  ) {
    modalSignInInp[1].value = ""
    incorrect1.classList.remove("warnD");
    modalSignInInp[1].addEventListener('',()=>{
      incorrect1.classList.add("warnD");
    })
  }
  else {
    modalSignIn.classList.add("modalSignInD");
    backgroundImage.style.filter = "blur(0px)";
    container.classList.add("containerD");
    signUp.classList.add("signUpD");
    welcome.classList.remove("welcomeD");
  }
});



//sign up modal
signUpSp1.addEventListener('click',()=>{
  modalSignIn.classList.add("modalSignInD");
  modalSignUp.classList.remove('modalSignUpD')
})
// remove sign up modal
backgroundImage.addEventListener("click", () => {
  modalSignUp.classList.add('modalSignUpD')
  backgroundImage.style.filter = "blur(0px)";
});
//submit signup modal
modalSignUpSubmit.addEventListener('click',(event)=>{
  event.preventDefault();
  if(modalSignUpInp[0].value == "" ||
    modalSignUpInp[1].value == ""  ||
    modalSignUpInp[2].value == "" ||
    modalSignUpInp[3].value == "" ||
    modalSignUpInp[4].value == "" ){
  warn1.classList.remove('warnD')
  }
else{
  modalSignUpSubmit.addEventListener('click', (event) => {
    modalSignUp.classList.add('modalSignUpD');
    modalSignIn.classList.add('modalSignInD');
    backgroundImage.style.filter = "blur(0px)";
    container.classList.add("containerD");
    signUp.classList.add("signUpD");
    welcomeSkSpan.innerText = modalSignUpInp[0].value;
    welcomeSk.classList.remove('welcomeD');
  }); 
}  
})
// return to signIn Modal
signInSp1.addEventListener('click',()=>{
  modalSignIn.classList.remove("modalSignInD");
  backgroundImage.style.filter = "blur(10px)";
  welcomeModal.classList.add("welcomeModalD");
  modalSignUp.classList.add('modalSignUpD');
})

// container singIn
containerSubmit.addEventListener('click',()=>{
  
  if(containerInp[0].value == "" || containerInp[1].value == ""){
    warn2.classList.remove('warnD')
  }
  else if (
    containerInp[0].value == "glorioussaizan1@gmail.com" &&
    containerInp[1].value == "iamsaizan1"
  ){
    container.classList.add('containerD')
    signUp.classList.add("signUpD");
    welcomeSk.classList.remove('welcomeD')
    welcomeSk.classList.remove('welcomeD')
  }
  else if (
    containerInp[0].value == "glorioussaizan1@gmail.com" && 
    containerInp[1].value != "iamsaizan1"
  ){
    incorrect.classList.remove('warnD')
    containerInp[1].value = "";
  }
  else{
    container.classList.add('containerD')
  signUp.classList.add("signUpD");
  welcome.classList.remove('welcomeD')
  }
})
// container signUp
signUpSp.addEventListener('click',()=>{
  container.classList.add('containerD')
  signUp.classList.add("signUpD");
containerSignUp.classList.remove('container2d')
signIn.classList.remove('signIn2')
})
// container singup submit
containerSignUpSubmit.addEventListener('click', () => {
  if (
    container2Inp[0].value === "" ||
    container2Inp[1].value === "" ||
    container2Inp[2].value === "" ||
    container2Inp[3].value === "" ||
    container2Inp[4].value === ""
  ) {
    warn3.classList.remove('warnD');
  } else {
    containerSignUp.classList.add('container2d');
    signIn.classList.add('signIn2');
    welcomeSk.classList.remove('welcomeD');
    welcomeSkSpan.innerText = container2Inp[0].value;
  }
});
//return to container singin
signInSp.addEventListener('click',()=>{
containerSignUp.classList.add('container2d')
signIn.classList.add('signIn2')
container.classList.remove('containerD')
  signUp.classList.remove("signUpD");
})