var titleArray = []; //공연의 제목이 들어갈 배열
var htmlArray=[]; //공연들의 각 HTML이 들어갈 배열
function koreansort(val) {
    if(val.value=="1"){ //selectbox의 value가 1이면 원래 정렬되있던 순서대로 정렬한다.
        if(htmlArray == ""){ //htmlArray가 비어있다면 
            for(var y=0; y<stage.length; y++){ //현재 HTML을 htmlArray에 넣어준다.
                htmlArray[y] = document.getElementById(y).innerHTML;
            } // 이렇게되면 htmlArray에는 가장 처음 배열되어있던 순서대로 HTML이 들어가게된다.
        }
        for (var i = 0 ; i<htmlArray.length; i++) {
                var temp = htmlArray[i];
                document.getElementById(i).innerHTML = temp;
            } // 그렇게 넣어놓은 htmlArray에 있는 HTML들을 적용시켜준다.
        }
    
    if (val.value == "2") { //selectbox의 value가 2이면 제목을 사전 순서대로 정렬한다.    
        if(titleArray == ""){ //titleArray가 비어있다면
        for(var i = 0; i<stage.length; i++){
        titleArray.unshift(stage[i].title); //titleArray에 콘서트 제목을 넣고
    }
    titleArray.sort(); // 그 배열을 정렬한다.
} // 그렇다면 titleArray엔 항상 정렬되어있는 콘서트제목이 들어있게된다.

if(htmlArray == ""){//htmlArray가 비어있다면 
for(var y=0; y<titleArray.length; y++){ //현재 HTML을 htmlArray에 넣어준다.
    htmlArray[y] = document.getElementById(y).innerHTML;
}
}
for (var i = 0 ; i<titleArray.length; i++) {
    if (titleArray[i] != stage[i].title) { //만약 정렬된 순서와 현재 정렬순서가 다르다면
        for(var j = 0; j<titleArray.length; j++){
            if (titleArray[i] == stage[j].title) { //정렬된 순서에 맞게 html을 바꿔준다.
                var temp = htmlArray[j];
                document.getElementById(i).innerHTML = temp;
            }
        }
    }
}
}
};