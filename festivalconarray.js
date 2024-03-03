
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
stage[0]=new performance('청춘아레나', '황광희, 양준일, 아이키, 편해준, 소란, 홍현희, 제이쓴, 창모, 정세운, 애쉬 아일랜드, 릴러말즈', '온라인', '540분', '전체관람가', '44,000원', new Date(2020,10,13), new Date(2020,11,13,12),'http://ticket.yes24.com/Perf/38057');  //페스티벌