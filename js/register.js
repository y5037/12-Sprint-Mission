import { emailCheck, button, input, userpw, pwcheck } from "./source.js";

// 로그인/회원가입 input
export function focus(e){
    
    let id = e.target.getAttribute('id');
    let val = e.target.value;
    let warnMsg = e.target.nextElementSibling;

    // 에러메세지 출력 /required 추가 or 삭제
    function errContext(txt, flag){
        warnMsg.textContent = txt;
        e.target.required = flag
    }

    // 241112 비어있는 input부터 차례대로 입력하도록 추가 구현 필요
    switch(id){
        case "useremail":
            if(val === ''){
                errContext('이메일을 입력해주세요', true);
            } else if(val !== '' && !emailCheck(val)){
                errContext('잘못된 이메일 형식입니다', true);
            } else if(emailCheck(val)){
                errContext('', false);
            }
            break;
        case "username":
            if(val === ''){
                errContext('닉네임을 입력해주세요', true);
            } else if(val !== '') {
                errContext('', false);
            }
            break;
        case "userpw":
            if(val === ''){
                errContext('비밀번호를 입력해주세요', true);
            } else if(val.length < 8){
                errContext('비밀번호를 8자 이상 입력해주세요', true);
            } else if(val.length > 8) {
                errContext('', false);
            } else {
                pwcheck.value = '';
                pwcheck.required = true;
            }
            break;
        case "pwcheck":
            if(val === '' || val !== userpw.value || val.length < 8){
                errContext('비밀번호가 일치하지 않습니다', true);
            } else if(val === userpw.value) {
                errContext('', false);
            }

            if(userpw.required === true){
                userpw.focus();
                errContext('비밀번호를 먼저 입력해주세요', true);
                e.target.value = '';
            }
            break;
        default: 
    }
    
    // input required 여부에 따라 Button 활성화/비활성화 동작
    const listRequied = []
    for(let i of input){
        listRequied.push(i.required);
    }
    
    const submitFlag = listRequied.filter((el) => el === false);
    if(submitFlag.length >= listRequied.length){
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

// input password 활성화/비활성화
export function pwToggle(e){
    let prevInput = e.target.closest('div').firstElementChild;
    let eyeIcon = e.target;
    if(prevInput.type !== 'text'){
        prevInput.type = 'text';
        eyeIcon.src = '../img/register/btn_visible.svg'
    } else {
        prevInput.type = 'password';
        eyeIcon.src = '../img/register/btn_invisible.svg'
    }
}
