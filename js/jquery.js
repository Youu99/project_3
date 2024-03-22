// 책 리스트 메뉴 버튼


$(function(){
    
    $("#menu_button li").click(function(){
        let idx =$(this).index();

        $("#menu_button li").removeClass("act");
        $(this).addClass("act");
        $(".book_menu_box").eq(idx).fadeIn().css("display","flex").siblings(".book_menu_box").fadeOut()
    })
})


$(function(){
    $("#top_tab ul li").click(function(){
        let idx=$(this).index()

        $("#top_tab ul li").removeClass("choice");
        $(this).addClass("choice");
        $(".audio_wrap").eq(idx).fadeIn().siblings(".audio_wrap").fadeOut()
    })
})


// QA 리스트 

$(function(){
    $("#QA_list_box ul li").click(function(){
        
        $(this).find(".QA_icon").toggleClass("active")
        $(this).find(".QA_list_bottom").slideToggle()
       
    })
})


// 푸터 사업자 정보

$(function(){
    $("#footer_btn").click(function(){
        $("#footer_btn_UP").show()
        $("#footer_btn").hide()
    })

    $("#footer_btnUp").click(function(){
        $("#footer_btn_UP").hide()
        $("#footer_btn").show()
    })
})


//Sub 마니아 링크 

$(function(){
    $("#mania_u_link").mouseover(function(){
        $(".mania_tag_list2").css("display","block")
    });
    $("#mania_u_link").mouseout(function(){
        $(".mania_tag_list2").css("display","none")
    }
    )
    
})


// sub 소개 페이지

$(function(){
    $("#int_btn").click(function(){
        console.log("click")
        $("#introduction_tag").css("height", 475)
        $("#int_btn").css("display","none")
        $("#int_btn2").css("display","block")

    })

    $("#int_btn2").click(function(){
        $("#introduction_tag").css("height", 78)
        $("#int_btn").css("display","block")
        $("#int_btn2").css("display","none")

    })
})

//목차 저자 페이지

$(function(){
    $("#evaluation> div p").click(function(){ 
        $(this).next(".evaluation_u").slideToggle()
    })


})


//라스트 책 페이지 

