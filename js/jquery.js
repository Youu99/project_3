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