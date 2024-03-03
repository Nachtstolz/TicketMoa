function review(play, title, name, date, hit, content){
    this.play = play; //공연명
    this.title=title;  //글 제목
    this.name = name; //작성자명
    this.date = date; //글 작성 날짜
    this.hit = hit; //조회수
    this.content = content; //내용
}

var review_list = new Array();
review_list[0]=new review(
    '2020 OH MY GIRL ONLINE CONCERT［겨울동화 : The Lost Memory]',
    '정말 재미있게 봤어요! 강추합니다.', '둥두룽', new Date(2020,9,24), 20, '다시 갈 수 있다면 가고 싶어요. 정말 재밌었습니다!');
review_list[1]=new review(
    '2020 OH MY GIRL ONLINE CONCERT［겨울동화 : The Lost Memory]',
    '오마이걸 짱짱', '오마이걸체고', new Date(2020,9,24), 10, '이번 콘서트 정말 최고였어요. 오프라인으로 다음에 가고싶어요.');
review_list[2]=new review(
    '거리두기좌석제 콘서트 <이십세기 이승환> - 당진',
    '다음에도 가고싶습니다.', '콘서트가조아', new Date(2020,9,21), 32, '이승환 콘서트 진짜 더 할말이 없네요.');
review_list[3]=new review(
    '거리두기좌석제 콘서트 <이십세기 이승환> - 당진',
    '이승환이다. 이 말이면 된다.', '승환승환', new Date(2020,9,20), 26, '콘서트 다들 한 번 씩 와보세요.');
review_list[4]=new review(
    '거리두기좌석제 콘서트 <이십세기 이승환> - 당진',
    '이 콘서트 하나로 끝났다', '기록경신중', new Date(2020,9,16), 44, '여러분 다들 가봐요ㅠㅠㅠ진짜 후회안함');
review_list[5]=new review(
    '［ 2020 Theatre 이문세 ］- 서울',
    '이문세 콘서트 짱', '눙누', new Date(2020,9,15), 32, '다들 후회안해요 진짜. 엄마랑 같이갔는데 최고였어요.');
review_list[6]=new review(
    '［ 2020 Theatre 이문세 ］- 서울',
    '콘서트를 간다면 여기는 꼭 가야한다.', '난나', new Date(2020,9,14), 72, '다음에 또 간다 진짜.');
review_list[7]=new review(
    '인디전주 Indie Jeonju Ep.11',
    '이런 페스티벌이 진짜 재밌는 것 같아요', '인디콘', new Date(2020,9,14), 63, '인디콘 진짜 가는 맛 난다');
review_list[8]=new review(
    '인디전주 Indie Jeonju Ep.11',
    '음? 올티가 인디콘?', '힙하퍼', new Date(2020,9,14), 28, '올티가 왜 인디콘? 신기하네 아무튼 좋았어요');
review_list[9]=new review(
    '인디전주 Indie Jeonju Ep.11',
    '인디 최고ㅠㅠㅠㅠㅠ', '인디언밥', new Date(2020,9,14), 52, '인디언밥밥밥밥밥 진짜 인디 최고');
review_list[10]=new review(
    '인디전주 Indie Jeonju Ep.11',
    '와 콜유마인 진짜 노래 좋더라', '제프버넷', new Date(2020,9,14), 34, '새로운 가수 알아가요... 최고');
