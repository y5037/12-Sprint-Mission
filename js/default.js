import { focus, pwToggle, actionSubmit } from "./register.js"; 
import { btnVisible, input } from "./source.js";

// input 이벤트
for(let i of input){
    i.addEventListener('keyup', (id) => {
        focus(id);
        actionSubmit();
    });
};

// password 비활성화/활성화 
for(let btn of btnVisible){
    btn.addEventListener('click', pwToggle);
};
