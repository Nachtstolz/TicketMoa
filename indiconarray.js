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
stage[0]=new performance('거리두기좌석제 콘서트 〈이십세기 이승환> - 당진', '이승환', '당진 문예의전당 대공연장', '120분', '만 7세 이상', '88,000원', new Date(2020,10,2,16), new Date(2020,10,7,17), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20007962');   //발라드, 인디
stage[1]=new performance('［ 2020 Theatre 이문세 ］- 서울', '이문세', '올림픽공원 올림픽홀', '120분', '만 7세 이상', '88,000원', new Date(2020,9,20,16), new Date(2020,10,13,20), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008375');  //발라드, 인디
stage[2]=new performance('자우림 단독 콘서트 - 티켓 [ 잎새에 적은 노래 ]', '자우림', '올림픽공원 올림픽홀', '120분', '8세 이상', '110,000원', new Date(2020,9,30,14), new Date(20201,0,30,18), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008970');
stage[3]=new performance('2020-21 백지영 전국투어 콘서트 〈BAEK HUG〉 - 성남', '백지영', '성남아트센터 오페라하우스', '120분', '만 7세 이상', '99,000원', new Date(2020,10,28,15), new Date(2021,0,9,14), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20009657');
stage[4]=new performance('양준일, 김원준 콘서트 〈Star track〉', '양준일, 김원준', 'KBS 아레나', '90분', '만 7세 이상', '110,000원', new Date(2020,10,23,14), new Date(2021,0,16,15), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20010149');
stage[5]=new performance('2020 거미 전국투어 콘서트 <다시, Winter Balled>', '거미', '코엑스 Hall D', '120분', '만 7세 이상', '132,000원', new Date(2020,10,19,18), new Date(2020,11,19,18), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20008723');  //발라드
stage[6]=new performance('2020 윤하 연말 콘서트 MINDSET', '윤하', '연세대학교 백주년기념관', '120분', '만 8세 이상', '110,000원', new Date(2020,10,13,16), new Date(2020,11,18,20), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20009788');   //발라드
stage[7]=new performance('Rock ＆ 樂 Concert Vol.34 치즈 – 군포', '치즈', '군포문화예술회관 철쭉홀', '90분', ' 만 8세 이상', '50,000원', new Date(2020,10,26), new Date(2020,11,26,20), 'http://ticket.interpark.com/Ticket/Goods/GoodsInfo.asp?GoodsCode=20009560');  //인디