let number;

const Generate_number = ()=>{
 let n1 = Math.random();
 let n2 = n1*10;
 n2 = Math.trunc(n2);
  n2 = (n2%6)+1;
  number = n2;
  console.log(number);
};

const Generate_number_btn_click = ()=> {
 document.querySelector('#section1').style.display = "none"
 document.querySelector('#section2').style.display = "none"
 document.querySelector('#section3').style.display = "block"

 setTimeout(()=>{
  Generate_number();
    document.querySelector("#field").value = "";
  document.querySelector('#section1').style.display = "none"
  document.querySelector('#section2').style.display = "block"
  document.querySelector('#section3').style.display = "none"
 },3000);
};

const check_number = ()=>{
 let value = document.querySelector("#field").value
   if(value == number ){
    alert("congrates you are win");
   }
   else{
    alert("OOPS ! you lost");
   }
   Generate_number_btn_click();
}