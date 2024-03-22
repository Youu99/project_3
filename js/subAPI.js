let search ;

search = ["메트로폴리탄"]

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
                $('#main_img').eq(i).append("<img src='"+ data[0].thumbnail +"'/>");
                $('#main_tag_h' ).eq(i).append("<h3>" + data[0].title + "</h3>");
                $('#main_tag_p' ).eq(i).append("<p>" + data[0].authors + "</p>");
        }
    })
    
    
    
    }

    $(function(){
        $.get("./js/subTag.txt", function (data){
            $("#introduction_tag").html(data);
            
        })
        
    })

    
    $(function(){
        $.get("./js/subTag2.txt", function (data){
            $("#evaluation_li_tag").html(data);
            
        })
        
    })

    $(function(){
        $.get("./js/subTag3.txt", function (data){
            $("#evaluation_li_tag2").html(data);
            
        })
        
    })

    let search2;

    search2 = ["모든것은기본에서","사랑에관한거의모든기술","내가틀릴수도있습니다","우리가작별","모래알","나는메트로폴리탄","기록하기로했습니다.","일본현지간식","질문하는세계"]
    
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
                    $('#last_book_list_u li').eq(i).append("<img src='"+ data[0].thumbnail +"'/>");
                    $('#last_book_list_u li' ).eq(i).append("<h3>" + data[0].title + "</h3>");
                    $('#last_book_list_u li' ).eq(i).append("<p>" + data[0].authors + "</p>");
            }
        })
    }
    