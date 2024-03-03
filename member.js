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

function performance(title,people,place,time,level,price,ticket,day,link){
    this.title=title;  //공연명
    this.people=people;  //공연가수
    this.place=place;  //공연장소
    this.time=time;  //관람시간
    this.level=level;  //관람등급
    this.price=price;  //관람가격
    this.ticket=ticket;  //예매날짜, Date객체로 표시
    this.day=day;  //공연날짜, Date객체로 표시
    this.link=link;  //공연링크
}

var stage = new Array();
stage[0]=new performance('2020 OH MY GIRL ONLINE CONCERT［겨울동화 : The Lost Memory]', '오마이걸', '온라인', '120분', '만 7세 이상', '39,000원', new Date(2020,9,27,12), new Date(2020,10,22,17), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008410#TabTop');  //팬클럽
stage[1]=new performance('내일은 〈미스터트롯〉 TOP6 전국투어 콘서트 - 광주', '임영웅, 영탁, 이찬원, 정동원, 장민호, 김희재', '광주여대 유니버시아드 체조경기장', '150분', '만 7세 이상', '99,000원', new Date(2020,9,27,18), new Date(2020,10,6,19,30), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20007789');  //트로트
stage[2]=new performance('거리두기좌석제 콘서트 〈이십세기 이승환〉 - 당진', '이승환', '당진 문예의전당 대공연장', '120분', '만 7세 이상', '88,000원', new Date(2020,10,2,16), new Date(2020,10,7,17), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20007962');   //발라드, 인디
stage[3]=new performance('［ 2020 Theatre 이문세 ］- 서울', '이문세', '올림픽공원 올림픽홀', '120분', '만 7세 이상', '88,000원', new Date(2020,9,20,16), new Date(2020,10,13,20), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008375');  //발라드, 인디
stage[4]=new performance('인디전주 Indie Jeonju Ep.11', '9rm, 이보통, Pally, opius, Curlly, 권도경, 콜유마인, 올티', '딥인투', '120분', '전체관람가', '20,000원', new Date(2020,9,29,19), new Date(2020,10,14,19), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008936');  //랩, 힙합
stage[5]=new performance('트롯페스타 : 미스터트롯4인 & 레전드 전국투어 콘서트 - 일산', '설운도, 신인선, 김수찬, 나태주, 류지광', '일산 킨텍스 제 1전시장 3A홀', '150분', '만 7세 이상', '88,000원', new Date(2020,9,23,15), new Date(2021,0,23,14), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008642');
stage[6]=new performance('자우림 단독 콘서트 - 티켓 [ 잎새에 적은 노래 ]', '자우림', '올림픽공원 올림픽홀', '120분', '8세 이상', '110,000원', new Date(2020,9,30,14), new Date(20201,0,30,18), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008970');
stage[7]=new performance('2020-21 백지영 전국투어 콘서트 〈BAEK HUG〉 - 성남', '백지영', '성남아트센터 오페라하우스', '120분', '만 7세 이상', '99,000원', new Date(2020,10,28,15), new Date(2021,0,9,14), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20009657');
stage[8]=new performance('양준일, 김원준 콘서트 〈Star track〉', '양준일, 김원준', 'KBS 아레나', '90분', '만 7세 이상', '110,000원', new Date(2020,10,23,14), new Date(2021,0,16,15), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20010149');
stage[9]=new performance('황윤성의 트롯 라이브 온 스테이지', '황윤성', '파크에비뉴 엔터식스 메두사홀', '90분', '8세 이상', '99,000원', new Date(2020,10,24,14), new Date(2021,0,9,18), 'http://ticket.yes24.com/Perf/38058');
stage[10]=new performance('2020 거미 전국투어 콘서트 〈다시, Winter Balled〉', '거미', '코엑스 Hall D', '120분', '만 7세 이상', '132,000원', new Date(2020,10,19,18), new Date(2020,11,19,18), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008723');  //발라드
stage[11]=new performance('청소년드림콘서트 – 팔로알토, 스웨이디, 윤비 – 용인', '팔로알토, 스웨이디, 윤비', '용인시문예회관 처인홀', '60분', '만 8세 이상', '15,000원', new Date(2020,10,12,17), new Date(2020,11,12,17), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20009587');  //랩, 힙합
stage[12]=new performance('청춘아레나', '황광희, 양준일, 아이키, 편해준, 소란, 홍현희, 제이쓴, 창모, 정세운, 애쉬 아일랜드, 릴러말즈', '온라인', '540분', '전체관람가', '44,000원', new Date(2020,10,13), new Date(2020,11,13,12),'http://ticket.yes24.com/Perf/38057');  //페스티벌
stage[13]=new performance('2020 윤하 연말 콘서트 MINDSET', '윤하', '연세대학교 백주년기념관', '120분', '만 8세 이상', '110,000원', new Date(2020,10,13,16), new Date(2020,11,18,20), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20009788');   //발라드
stage[14]=new performance('Rock ＆ 樂 Concert Vol.34 치즈 – 군포', '치즈', '군포문화예술회관 철쭉홀', '90분', ' 만 8세 이상', '50,000원', new Date(2020,10,26), new Date(2020,11,26,20), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20009560');  //인디

memberarray[3].login=1;
memberarray[3].mark[0]=stage[3];
memberarray[3].mark[1]=stage[0];
memberarray[3].mark[2]=stage[1];
memberarray[3].mark[3]=stage[2];