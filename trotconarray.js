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
stage[0]=new performance('내일은 〈미스터트롯〉 TOP6 전국투어 콘서트 - 광주', '임영웅, 영탁, 이찬원, 정동원, 장민호, 김희재', '광주여대 유니버시아드 체조경기장', '150분', '만 7세 이상', '99,000원', new Date(2020,9,27,18), new Date(2020,10,6,19,30), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20007789');  //트로트
stage[1]=new performance('황윤성의 트롯 라이브 온 스테이지', '황윤성', '파크에비뉴 엔터식스 메두사홀', '90분', '8세 이상', '99,000원', new Date(2020,10,24,14), new Date(2021,0,9,18), 'http://ticket.yes24.com/Perf/38058');
stage[2]=new performance('트롯페스타 : 미스터트롯4인 & 레전드 전국투어 콘서트 - 일산', '설운도, 신인선, 김수찬, 나태주, 류지광', '일산 킨텍스 제 1전시장 3A홀', '150분', '만 7세 이상', '88,000원', new Date(2020,9,23,15), new Date(2021,0,23,14), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008642');
