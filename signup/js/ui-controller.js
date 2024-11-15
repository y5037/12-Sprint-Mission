import { emailCheck } from '../../js/validation.js';

// 요소 저장
const btnSubmit = document.querySelector(".btnSubmit");
const btnVisible  = document.querySelectorAll(".btnVisible");
const inputList = document.querySelectorAll("input");
const userpw = document.querySelector("#userpw");
const pwcheck = document.querySelector("#pwcheck");

// 로그인/회원가입
// input 입력 조건에 따라 에러메세지 출력 및 required 속성의 true false 여부로 UI 변경
function userInform(e){
    let id = e.target.getAttribute('id');
    let val = e.target.value;
    let warnMsg = e.target.nextElementSibling;

    // 에러메세지 및 required 추가/삭제
    function errContext(txt, flag){
        warnMsg.textContent = txt;
        e.target.required = flag
    }

    // 241115(수정) 입력 조건 불충족 시 focus 뿐만이 아닌, border 자체를 Error Color로 고정하여 사용자 입장에서 필요한 동작을 바로바로 수행 할 수 있도록 UI적으로 수정하였습니다.(조건 불충족 시 제출 버튼이 비활성화 되거나 에러메세지 출력 등 다른 에러 관련 UI는 이미 스크립트로 구현이 된 상태였기 때문에 코드리뷰 코멘트에 써주신 내용이 해당 코드 추가 정도로 이해가 됩니다.)
    function inputError(){
        e.target.classList.add('inputError');
    }
    function inputComplet(){
        e.target.classList.remove('inputError');
    }

    switch(id){
        case "useremail":
            if(val === ''){
                errContext('이메일을 입력해주세요', true);
                inputError();
            } else if(val !== '' && !emailCheck(val)){
                errContext('잘못된 이메일 형식입니다', true);
                inputError();
            } else if(emailCheck(val)){
                errContext('', false);
                inputComplet();
            }
            break;
        case "username":
            if(val === ''){
                errContext('닉네임을 입력해주세요', true);
                inputError();
            } else if(val !== '') {
                errContext('', false);
                inputComplet();
            }
            break;
        case "userpw":
            if(val === ''){
                errContext('비밀번호를 입력해주세요', true);
                inputError();
            } else if(val.length < 8){
                errContext('비밀번호를 8자 이상 입력해주세요', true);
                inputError();
            } else if(val.length > 8) {
                errContext('', false);
                inputComplet();
            }
            break;
        case "pwcheck":
            if(val === '' || val !== userpw.value){
                errContext('비밀번호가 일치하지 않습니다', true);
                inputError();
            } else if(val === userpw.value) {
                errContext('', false);
                inputComplet();
            }

            if(userpw.required === true){
                userpw.focus();
                errContext('비밀번호를 먼저 입력해주세요', true);
                inputError();
                e.target.value = '';
            }
            break;
        default: 
    }
    
    // 비밀번호 변경시 비밀번호 확인 input 초기화
    if(pwcheck){
        if(userpw === '' || e.target === userpw){
            pwcheck.value = '';
            pwcheck.required = true;
        }
    }
}

// 241115(수정) input 입력 조건에 따라 제출 버튼 활성화/비활성화 관련 코드 분리
function actionSubmit(){
    const listRequired = []
    for(let i of inputList){
        listRequired.push(i.required);
    }
    
    const submitFlag = listRequired.filter((el) => el === false);
    if(submitFlag.length >= listRequired.length){
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
}

// Password Show/Hide
function pswrViewHide(e){
    let prevInput = e.target.closest('div').firstElementChild;
    let eyeIcon = e.target;
    if(prevInput.type !== 'text'){
        prevInput.type = 'text';
        eyeIcon.src = 'img/btn_visible.svg'
    } else {
        prevInput.type = 'password';
        eyeIcon.src = 'img/btn_invisible.svg'
    }
}

export { userInform, actionSubmit, pswrViewHide, btnVisible, inputList } 
