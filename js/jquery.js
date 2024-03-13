// 책 리스트 메뉴 버튼


$(function(){
    
    $("#menu_button li").click(function(){
        let idx =$(this).index();

        $("#menu_button li").removeClass("act");
        $(this).addClass("act");
        $(".book_menu_box").eq(idx).fadeIn().css("display","flex").siblings(".book_menu_box").fadeOut()
    })
})