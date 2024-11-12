import { focus, pwToggle } from "./register.js"; 
import { btnVisible } from "./source.js";

// password 비활성화/활성화 
for(let btn of btnVisible){
    btn.addEventListener('click', pwToggle);
}
// input keyup event
useremail.addEventListener('keyup', focus);
userpw.addEventListener('keyup', focus);
username.addEventListener('keyup', focus);
pwcheck.addEventListener('keyup', focus);
