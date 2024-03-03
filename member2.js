function member(id,password,name,emailcheck){
    this.id=id;
    this.password=password;
    this.name=name;
    this.emailcheck=emailcheck;
    this.login=0;
    this.mark=new Array();
}

var memberarray = new Array();
memberarray[0]=new member("park@naver.com","park0000","박준용",1);
memberarray[1]=new member('shin@naver.com',"shin1111","신정아",1);
memberarray[2]=new member("choi@naver.com","choi2222","최신혜",1);
memberarray[3]=new member("shinparkhae@naver.com","ticketmoa00","신박혜",1);

memberarray[3].login=1;
memberarray[3].mark[0]=stage[3];
memberarray[3].mark[1]=stage[0];
memberarray[3].mark[2]=stage[1];