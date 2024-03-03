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