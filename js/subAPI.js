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