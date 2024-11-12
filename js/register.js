const button = document.querySelector(".btnSubmit");
const input = document.querySelectorAll("input");
const useremail = document.querySelector("#useremail");
const username = document.querySelector("#username");
const userpw = document.querySelector("#userpw");
const pwcheck = document.querySelector("#pwcheck");


// login.html
// Submit 비활성화/활성화
// value값이 있으면 작동하는 단순한 테스트 코드입니다.
// function changeColor1(){
//     if(useremail.value && userpw.value){
//         button.disabled = false;
//     }else{
//         button.disabled = true;
//     }
// };

// signup.html
// Submit 비활성화/활성화
// value값이 있으면 작동하는 단순한 테스트 코드입니다.
// function changeColor2(){
//     if(useremail.value && username.value && userpw.value && pwcheck.value){
//         button.disabled = false;
//     }else{
//         button.disabled = true;
//     }
// };

// export { changeColor1, changeColor2 }


function emailCheck(email) {    
    let regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email)); 
};

// const createTagP = document.createElement('p');

// useremail.addEventListener('keydown', (e) => {
//     let val = e.target.value;
//     createTagP.classList.add('txtWarning');
//     e.target.after(createTagP);
//     if(val === ''){
//         createTagP.textContent = '이메일을 입력해주세요';
//     } else if(val !== '' && !emailCheck(val)){
//         createTagP.textContent = '잘못된 이메일 형식입니다';
//     } else {
//         e.target.nextElementSibling.remove();
//     }
// });

// userpw.addEventListener('keydown', (e) => {
//     let val = e.target.value;
//     createTagP.classList.add('txtWarning');
//     e.target.after(createTagP);
//     if(val === ''){
//         createTagP.textContent = '비밀번호를 입력해주세요';
//     } else if(val.length < 9){
//         createTagP.textContent = '비밀번호를 8자 이상 입력해주세요.';
//     } else {
//         e.target.nextElementSibling.remove();
//     }
// });



// const warning = document.createElement('p');
// warning.classList.add('txtWarning');
// const warning = document.querySelector('.txtWarning');

function focus(e){

    let id = e.target.id;
    let val = e.target.value;
    let warning = e.target.nextElementSibling;
    e.target.after(warning);

    switch(id){
        case "useremail":
            if(val === ''){
                warning.textContent = '이메일을 입력해주세요';
                e.target.required = true;
            } else if(val !== '' && !emailCheck(val)){
                warning.textContent = '잘못된 이메일 형식입니다';
                e.target.required = true;
            } else if(emailCheck(val)){
                warning.textContent = '';
                e.target.required = false;
            }
            break;
        case "username":
            if(val === ''){
                warning.textContent = '닉네임을 입력해주세요';
                e.target.required = true;
            } else if(val.length > 3) {
                warning.textContent = '';
                e.target.required = false;
            }
            break;
        case "userpw":
            if(val === ''){
                warning.textContent = '비밀번호를 입력해주세요';
                e.target.required = true;
            } else if(val.length < 8){
                warning.textContent = '비밀번호를 8자 이상 입력해주세요.';
                e.target.required = true;
            } else if(val.length > 8) {
                warning.textContent = '';
                e.target.required = false;
            }
            break;
        case "pwcheck":
            if(val === '' || val !== userpw.value || val.length < 8){
                warning.textContent = '비밀번호가 일치하지 않습니다.';
                e.target.required = true;
            } else if(val === userpw.value) {
                warning.textContent = '';
                e.target.required = false;
            }
            break;
        default: 
    }
    
    // input required 여부에 따라 Button 활성화/비활성화 동작
    const listInput = []
    
    for(let i of input){
        listInput.push(i.required);
    }
    const on = listInput.filter((el) => el === false);

    if(on.length >= listInput.length){
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}
useremail.addEventListener('keyup', focus);
userpw.addEventListener('keyup', focus);
username.addEventListener('keyup', focus);
pwcheck.addEventListener('keyup', focus);


