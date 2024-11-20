import { userInform, actionSubmit, pswrViewHide, btnVisible, inputList } from "./ui-controller.js"; 

// 로그인/회원가입
// input 입력 조건에 따른 UI 변경과 제출버튼 활성화/비활성화
for(let i of inputList){
    i.addEventListener('keyup', (item) => {
        userInform(item);
        actionSubmit();
    });
};

// Password Show/Hide
for(let btn of btnVisible){
    btn.addEventListener('click', pswrViewHide);
};
