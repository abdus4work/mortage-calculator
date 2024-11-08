const amount = document.getElementById("amount");
const term = document.getElementById("term");
const interest = document.getElementById("interest");
let type = document.querySelectorAll('input[name="m-type"]');

let mortageType = "repay";

const calculate = document.getElementById("calculate");
const reset = document.getElementById("reset");

// resetting the form
reset.addEventListener("click", () => {
  document.forms[0].reset();
  document.querySelector('.result-container').style.display="none";
  document.querySelector('.empty').style.display="flex";
});

// function to check if the form is filled
function checkForm(e) {
  e.preventDefault();
  if (amount.value == "" || +amount.value <= 0) {
    document.querySelector(".row-1 .error-message").innerHTML =
      "This field is required";
    document.querySelector(".row-1 .amount-input").classList.add("error");
    document
      .querySelector(".row-1 .amount-input .icon")
      .classList.add("error-icon");
    return;
  }
  if (term.value == "" || +term.value <= 0) {
    document.querySelector(".row-2 .error-message").innerHTML =
      "This field is required";
    document.querySelector(".row-2 .term .amount-input").classList.add("error");
    document.querySelector(".row-2 .term .icon").classList.add("error-icon");
    return;
  }
  if (interest.value == "" || +interest.value <= 0) {
    document.querySelector(".row-2 .interest .error-message").innerHTML =
      "This field is required";
    document
      .querySelector(".row-2 .interest .amount-input")
      .classList.add("error");
    document
      .querySelector(".row-2 .interest .icon")
      .classList.add("error-icon");
    return;
  }

  if (mortageType== "repay") {
    calculateByRepay();
  } else {
    
    calculateByInterestOnly();
  }
}

// calculate emi by repay
function calculateByRepay() {
  let p= +amount.value;
  let r= +interest.value/(12*100);
  let n= +term.value*12;
  let emi= ((p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1));
  
  showResult(emi);
}

// calculate emi by interest only

function calculateByInterestOnly(){
  let p= +amount.value;
  let r= +interest.value/(12*100);
  let n= +term.value*12;
  let emi= p*r;
  showResult(emi);
}

// show result
function showResult(emi){
  document.querySelector(".empty").style.display="none";
  document.querySelector(".result-container").style.display="block";
  document.querySelector(".result-box h1").innerHTML="£"+emi.toFixed(2);

  document.querySelector('.result-box h2').innerHTML="£"+(emi*+term.value*12).toFixed(2);
}

calculate.addEventListener("click", (e) => checkForm(e));

amount.addEventListener("focusout", () => {
  if (amount.value == "" || +amount.value <= 0) {
    document.querySelector(".row-1 .error-message").innerHTML =
      "This field is required";
    document.querySelector(".row-1 .amount-input").classList.add("error");
    document
      .querySelector(".row-1 .amount-input .icon")
      .classList.add("error-icon");
  } else {
    document.querySelector(".row-1 .error-message").innerHTML = "";
    document.querySelector(".row-1 .amount-input").classList.remove("error");
    document
      .querySelector(".row-1 .amount-input .icon")
      .classList.remove("error-icon");
  }
});

term.addEventListener("focusout", () => {
  if (term.value == "" || +term.value <= 0) {
    document.querySelector(".row-2 .error-message").innerHTML =
      "This field is required";
    document.querySelector(".row-2 .term .amount-input").classList.add("error");
    document.querySelector(".row-2 .term .icon").classList.add("error-icon");
  } else {
    document.querySelector(".row-2 .error-message").innerHTML = "";
    document
      .querySelector(".row-2 .term .amount-input")
      .classList.remove("error");
    document.querySelector(".row-2 .term .icon").classList.remove("error-icon");
  }
});

interest.addEventListener("focusout", () => {
  if (interest.value == "" || +interest.value <= 0) {
    document.querySelector(".row-2 .interest .error-message").innerHTML =
      "This field is required";
    document
      .querySelector(".row-2 .interest .amount-input")
      .classList.add("error");
    document
      .querySelector(".row-2 .interest .icon")
      .classList.add("error-icon");
  } else {
    document.querySelector(".row-2 .interest .error-message").innerHTML = "";
    document
      .querySelector(".row-2 .interest .amount-input")
      .classList.remove("error");
    document
      .querySelector(".row-2 .interest .icon")
      .classList.remove("error-icon");
  }
});

type.forEach((item) => {
  item.addEventListener("change", () => {
    console.log(item.value);
    mortageType = item.value;
  });
});


