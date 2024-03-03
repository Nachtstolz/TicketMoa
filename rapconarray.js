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
stage[0]=new performance('청소년드림콘서트 – 팔로알토, 스웨이디, 윤비 – 용인', '팔로알토, 스웨이디, 윤비', '용인시문예회관 처인홀', '60분', '만 8세 이상', '15,000원', new Date(2020,10,12,17), new Date(2020,11,12,17), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20009587');  //랩, 힙합
stage[1]=new performance('인디전주 Indie Jeonju Ep.11', '9rm, 이보통, Pally, opius, Curlly, 권도경, 콜유마인, 올티', '딥인투', '120분', '전체관람가', '20,000원', new Date(2020,9,29,19), new Date(2020,10,14,19), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008936'); 
