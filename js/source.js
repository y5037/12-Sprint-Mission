// 요소 변수 저장
const button = document.querySelector(".btnSubmit");
const btnVisible  = document.querySelectorAll(".btnVisible");
const input = document.querySelectorAll("input");
const userpw = document.querySelector("#userpw");
const pwcheck = document.querySelector("#pwcheck");

// 이메일 형식 조건
export function emailCheck(email) {    
    let regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email)); 
};

export { button, btnVisible, input, userpw, pwcheck };
