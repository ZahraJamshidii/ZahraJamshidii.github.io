let isEnglish = true;

document.getElementById("langToggle").onclick = () => {
    isEnglish = !isEnglish;

    // تغییر متن‌ها
    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = isEnglish ?
          el.getAttribute("data-en") :
          el.getAttribute("data-fa");
    });

    // راست‌چین و justify وقتی فارسی، چپ‌چین و justify وقتی انگلیسی
    const aboutMe = document.querySelector(".card p[data-en]"); // assume اولین p در بخش درباره من
    if (!isEnglish) {
        document.body.classList.add("rtl");
        if (aboutMe) aboutMe.style.textAlign = "justify";
    } else {
        document.body.classList.remove("rtl");
        if (aboutMe) aboutMe.style.textAlign = "justify";
    }
};

document.getElementById("downloadPDF").onclick = () => {
    const element = document.getElementById("resume");

    html2pdf().set({
        margin: 0.5,
        filename: 'My_Resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).from(element).save();
};
