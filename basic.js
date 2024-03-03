//로그인 된 회원 찾기
var loginmember;
for(var i=0;i<memberarray.length;i++){
    if(memberarray[i].login==1){
        loginmember=memberarray[i];
        break;
    }
}

//로그아웃 함수
function logout(){
    loginmember.login=0;
    window.open("main.html","_self");
}

function load(){
    //미니메뉴바 표시 
    var textassign=document.getElementById("textassign");
    textassign.innerHTML=loginmember.name + "님";
    textassign.setAttribute("href","javascript:function(){}");

    //미니메뉴바 표시 - 알림개수
    var pagecount=0;
    var today=new Date(2020,10,13);  //오늘 날짜 설정
    for(var i=0;i<loginmember.mark.length;i++){  //공연 관련 알림 개수
        var ex=loginmember.mark[i];

        var diffyear=ex.day.getFullYear()-today.getFullYear();

        var diffmonth=ex.day.getMonth()-today.getMonth();
        var diffdate=ex.day.getDate()-today.getDate();

        if(diffyear==0 && diffmonth==0 && diffdate<8 && 0<=diffdate){
            pagecount++;
        }
    }
    for(var i=0;i<loginmember.mark.length;i++){  //예매 관련 알림 개수
        var ex=loginmember.mark[i];

        var diffyear=ex.ticket.getFullYear()-today.getFullYear();
        var diffmonth=ex.ticket.getMonth()-today.getMonth();
        var diffdate=ex.ticket.getDate()-today.getDate();

        if(diffyear==0 && diffmonth==0 && diffdate<8 && 0<=diffdate){
            pagecount++;
        }
    }
    if(pagecount!=0){  //알림이 있다면 알림 개수 표시
        document.getElementById("mycount").innerHTML=pagecount;
    }
    else{  //알림이 없다면
        document.getElementById("mycount").style.display="none";
    }
}