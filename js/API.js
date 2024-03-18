let search;

search = ["푸바오","메트로폴리탄","세이노","쇼팬하우어","버지니아","김혜남","이기주","로기완","생각중독","컨셉수업","부자아빠의돈공부","우리가작별인사","남의시선에아랑곳하지않기","츠루카메조산원","분실물이돌아왔습니다","기분이태도가되지않게(에스더버니)","마흔에읽는","세이노의","60일완성무조건","알아두면쓸데있는잡학상식","시작의기술","이누야샤","너에게닿기를","소년탐정","드래곤볼","진격의거인","데스노트","코난"]

for(let i=0 ; i<search.length ; i++){


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    async:false,
    data: { query:search[i] },
    headers: { Authorization: "KakaoAK 43f3e701113483dc0370d1e49dd35f44" },
    success:function(msg){
        console.log(msg)

        const origin = msg.documents;
        let data =origin.filter((val)=>{
            return val.thumbnail !=''&&val.contents !='';
        })
            $('.seller_list li').eq(i).append("<img src='"+ data[0].thumbnail +"'/>");
            $('.seller_list li' ).eq(i).append("<h3>" + data[0].title + "</h3>");
            $('.seller_list li' ).eq(i).append("<p>" + data[0].authors + "</p>");
    }
})



}

let search2;

search2 = ["주린이가가장알고싶은","주린이도","난생처음주식","만화주식투자무작정","슈퍼개미의왕초보","주식","주식2","야나두영어회화","혼자공부하는영어습관","나혼자만알고싶은영어책","영어습관","영어회화","영어독학","영어이제는","인간실격사양","이방인","까라마조프씨네","변신시골의사","데미안","1984:에디터스","블루체크의","패브릭손뜨개","코코지니의친절한재봉틀","로제의모티브","까막의감성","로제의빈티지","낭만가득프랑스","헬스의정석근력운동","죄수운동법","근육저승사자","불량헬스","근육이튼튼한여자가","닥치고데스런스트레칭","헬스보이의지속가능"]

for(let i=0 ; i<search2.length;i++){

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        async:false,
        data: { query:search2[i] },
        headers: { Authorization: "KakaoAK 43f3e701113483dc0370d1e49dd35f44" },
        success:function(msg){
            console.log(msg)
    
            const origin = msg.documents;
            let data =origin.filter((val)=>{
                return val.thumbnail !=''&&val.contents !='';
            })
                $('.book_menu_box li').eq(i).append("<img src='"+ data[0].thumbnail +"'/>");
                $('.book_menu_box li' ).eq(i).append("<h3>" + data[0].title + "</h3>");
                $('.book_menu_box li' ).eq(i).append("<p>" + data[0].authors + "</p>");
        }
    })
}




