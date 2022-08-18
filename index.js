let screen = document.getElementById("screen");

let buttons = document.querySelectorAll("button");
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if (buttonText == "X") {
            buttonText = "*";
            screen.value += buttonText;
        } 
        else if (buttonText == "Del") {
            screen.value = screen.value.slice(0,-1);  
        } 
        else if (buttonText == "C") {
            screen.value = "";
        } 
        else if (buttonText == "=") {
            screen.value = eval(screen.value);
        } 
        else {
            screen.value += buttonText;
        }
    });
}
addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        screen.value = eval(screen.value);
    }
})