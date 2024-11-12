import { emailCheck, button, btnVisible, input, useremail, username, userpw, pwcheck } from "./source.js";

// 로그인/회원가입 input
export function focus(e){
    let id = e.target.id;
    let val = e.target.value;
    let warning = e.target.nextElementSibling;
    e.target.after(warning);

    // 241112 비어있는 input부터 차례대로 입력하도록 추가 구현 필요
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
            } else if(val !== '') {
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

// input password 활성화/비활성화
export function pwToggle(e){
    let targetParent = e.target.closest('div');
    let targetInput = targetParent.firstElementChild;
    let eyeImg = e.target;
    if(targetInput.type !== 'text'){
        targetInput.type = 'text';
        eyeImg.src = '../img/register/btn_visible.svg'
    } else {
        targetInput.type = 'password';
        eyeImg.src = '../img/register/btn_invisible.svg'
    }
}


// 초기 작업 코드 (추후 코드 비교를 위해 남겨두었습니다.)
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
