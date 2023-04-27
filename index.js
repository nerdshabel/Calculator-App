const screen = document.querySelector(".screen");
const keys = document.querySelectorAll(".key");
const operators = ["+", "-", "/", "*"];


screen.textContent = '';

keys.forEach(key => key.addEventListener("click", () => {

    if (!key.classList.contains("special")) {
    screen.textContent += key.textContent;
    }
    else if (key.classList.contains("special")){
        if (key.textContent == "=") {
            screen.textContent = eval(screen.textContent);
        }
        else if (key.textContent == "RESET"){
            screen.textContent = '';
        }
        else if (key.textContent == "DEL") {
            screen.textContent = screen.textContent.slice(0, -1);
        }
    }
}));
document.addEventListener("keydown", (event) => {
    if (!isNaN(event.key) ) {
    screen.textContent += event.key;
    }
    
    else{
        operators.forEach(operator => {
            if (event.key == operator) {
                screen.textContent += event.key;
            }
            
        });
         if (event.key == "Enter") {
        screen.textContent = eval(screen.textContent);
    }
    else if(event.key == "Escape") {
        screen.textContent = '';
    }
    else if (event.key == "Backspace") {
        screen.textContent = screen.textContent.slice(0, -1);
    }
}
});

