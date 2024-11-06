// login.html
// Submit 비활성화/활성화
export function changeColor1(){
    const button = document.querySelector(".btnSubmit");
    const useremail = document.querySelector("#useremail");
    const userpw = document.querySelector("#userpw");
    if(useremail.value && userpw.value){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
};
   
// signup.html
// Submit 비활성화/활성화
export function changeColor2(){
    const button = document.querySelector(".btnSubmit");
    const useremail = document.querySelector("#useremail");
    const username = document.querySelector("#username");
    const userpw = document.querySelector("#userpw");
    const pwcheck = document.querySelector("#pwcheck");
    if(useremail.value && username.value && userpw.value && pwcheck.value){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
};
