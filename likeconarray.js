//로그인 된 회원 찾기
var loginmember;
for(var i=0;i<memberarray.length;i++){
    if(memberarray[i].login==1){
        loginmember=memberarray[i];
        break;
    }
}

function likecon(obj) {
    loginmember.mark.push(obj);
    alert(obj.title+"을 즐겨찾기에 추가합니다.");// 추가되었다는 알림창 띄우기 
};