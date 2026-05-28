
let isEnglish = true;

const toggleBtn = document.getElementById("langToggle");

toggleBtn.addEventListener("click", () => {

isEnglish = !isEnglish;

document.querySelectorAll("[data-en]").forEach(el => {

el.innerText = isEnglish
? el.getAttribute("data-en")
: el.getAttribute("data-fa");

});

if(isEnglish){

document.body.classList.remove("rtl");
document.documentElement.lang = "en";

}else{

document.body.classList.add("rtl");
document.documentElement.lang = "fa";

}

});

document.getElementById("downloadPDF").addEventListener("click", () => {

const element = document.getElementById("resume");

const opt = {
margin:0.4,
filename:'Zahra_Jamshidi_Resume.pdf',

html2canvas:{
scale:2
},

jsPDF:{
unit:'in',
format:'a4',
orientation:'portrait'
}
};

html2pdf().set(opt).from(element).save();

});
