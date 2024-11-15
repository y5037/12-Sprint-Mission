// 요소 저장
const button = document.querySelector(".btnSubmit");
const btnVisible  = document.querySelectorAll(".btnVisible");
const inputList = document.querySelectorAll("input");
const userpw = document.querySelector("#userpw");
const pwcheck = document.querySelector("#pwcheck");

// 이메일 유효성 체크
function emailCheck(email) {    
    let regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email)); 
};

// 로그인/회원가입
// input 입력 조건에 따라 에러메세지 출력 / required 속성의 true false 여부로 UI 변경
function userInform(e){
    let id = e.target.getAttribute('id');
    let val = e.target.value;
    let warnMsg = e.target.nextElementSibling;

    // 에러메세지 /required 추가 or 삭제
    function errContext(txt, flag){
        warnMsg.textContent = txt;
        e.target.required = flag
    }

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
    const listRequied = []
    for(let i of inputList){
        listRequied.push(i.required);
    }
    
    const submitFlag = listRequied.filter((el) => el === false);
    if(submitFlag.length >= listRequied.length){
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

// password show / hide
function pswrViewHide(e){
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

export { userInform, actionSubmit, pswrViewHide, btnVisible, inputList } 
