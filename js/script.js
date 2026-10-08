let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML =='='){
            string =eval(string);
            input.value = string;

              }

              else if (e.target.innerHTML == 'AC'){
                string = "";
                input.value = string; 
            
               }
               
              else if (e.target.innerHTML == 'DEL'){
                    string = string.substring(0, string.
                    length-1);
                    input.value = string;
                }
             
              else{
                  string += e.target.innerHTML;
                  input.value = string;
              }
              
           })
         })


         document.addEventListener("keydown", function(event) {
    let key = event.key;

    // Number keys and operators
    buttons.forEach(button => {
        if (button.textContent.trim() === key) {
            button.click();
        }
    });

    // Enter key = equal
    if (key === "Enter") {
        document.querySelector(".equalBtn").click();
    }

    // Backspace key = delete
    if (key === "Backspace") {
        string = string.slice(0, -1);
        input.value = string;
    }

    // Escape key = clear
    if (key === "Escape") {
        string = "";
        input.value = string;
    }
});