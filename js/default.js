import { userInform, pswrViewHide, actionSubmit } from "./register.js"; 
import { btnVisible, input } from "./source.js";

// 로그인/회원가입
// input 입력 조건에 따른 UI 변경과 제출버튼 활성화/비활성화
for(let i of input){
    i.addEventListener('keyup', (id) => {
        userInform(id);
        actionSubmit();
    });
};

// password show / hide
for(let btn of btnVisible){
    btn.addEventListener('click', pswrViewHide);
};
