var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var menubar = document.getElementById("menubar");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}



function openmenu(){
    menubar.style.transform = "translateX(450px)";
}
function closemenu(){
    menubar.style.transform = "translateX(-810px)";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwAijoBfh_fAEAzS8p1q2Td0V6A7BJEE2BjLUyZ3amY8qSD1DCf1p_7xzW4iyus9CeJ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function (){msg.innerHTML = ""},5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})