const button = document.querySelector(".btnSubmit");
const useremail = document.querySelector("#useremail");
const username = document.querySelector("#username");
const userpw = document.querySelector("#userpw");
const pwcheck = document.querySelector("#pwcheck");

// login.html
// Submit 비활성화/활성화
// value값이 있으면 작동하는 단순한 테스트 코드입니다.
function changeColor1(){
    if(useremail.value && userpw.value){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
};
   
// signup.html
// Submit 비활성화/활성화
// value값이 있으면 작동하는 단순한 테스트 코드입니다.
function changeColor2(){
    if(useremail.value && username.value && userpw.value && pwcheck.value){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
};

export { changeColor1, changeColor2 }
