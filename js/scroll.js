$(function () {



    $('#main_h1_tag').css("transform", "translateY(0px)").css("opacity", "1");
    $("#PTagimg").css("transform", "translateY(0px)").css("opacity", "1")



    $(window).scroll(function () {
        let ws = $(this).scrollTop();

        let s2 = $('#PTagimg').offset().top;
        if (0 < ws < s2 - 400) {
            $('#main_h1_tag').css("transform", "translateY(0px)").css("opacity", "1")
            $("#PTagimg").css("transform", "translateY(0px)").css("opacity", "1")
        }

        // 메인 태그 사라지기 

        if (ws > s2) {
            $("#main_h1_tag").css("transform", "translateY(200px)").css("opacity", "0")
            $("#PTagimg").css("transform", "translateY(200px)").css("opacity", "0")
        }



        //플랫폼 태그 나타내기 or 사라지기
        let s3 = $("#platform").offset().top;

        if (ws > s3 - 600) {
            $("#platform_top_p").css("transform", "translateY(0px)").css("opacity", "1")
            $("#platform_top_h2").css("transform", "translateY(0px)").css("opacity", "1")
        }

       

        if (ws > s3 + 200) {
            $("#platform_top_p").css("transform", "translateY(200px)").css("opacity", "0")
            $("#platform_top_h2").css("transform", "translateY(200px)").css("opacity", "0")
        }


        //도서 북 태그 나타내기 or 사라지기

        let s4 = $("#book_Page").offset().top;
        if (ws > s4 - 600) {
                $("#title_box").css("transform", "translateY(0px)").css("opacity", "1")

        }

       
        if (ws > s4 + 200) {
            $("#title_box").css("transform", "translateY(200px)").css("opacity", "0")

    }

    //비디오 태그 나타내기 or 사라지기
    
    let s5 = $("#video_Page").offset().top;
    if (ws > s5 - 600) {
            $("#video_tag_h").css("transform", "translateY(0px)").css("opacity", "1")
            $("#video_tag_p").css("transform", "translateY(0px)").css("opacity", "1")

    }

    if (ws > s5 + 200) {
        $("#video_tag_h").css("transform", "translateY(200px)").css("opacity", "0")
        $("#video_tag_p").css("transform", "translateY(200px)").css("opacity", "0")

}

//베스트 셀러 태그 나타내기 or 사라지기
    let s6 = $("#best_seller").offset().top;
    if (ws > s6 - 600) {
            $("#text_box").css("transform", "translateY(0px)").css("opacity", "1")
            

    }

    if (ws > s6 + 200) {
        $("#text_box").css("transform", "translateY(200px)").css("opacity", "0")
        

}

//챌린지 태그 나타내기 or 사라지기

    let s7 = $("#challenge_Page").offset().top;
    if (ws > s7 - 600) {
            $("#challenge_tag_h").css("transform", "translateY(0px)").css("opacity", "1")
            $("#challenge_tag_p").css("transform", "translateY(0px)").css("opacity", "1")

}

   
    if (ws > s7 + 200) {
            $("#challenge_tag_h").css("transform", "translateY(200px)").css("opacity", "0")
            $("#challenge_tag_p").css("transform", "translateY(200px)").css("opacity", "0")

    }

    //책 메뉴 리스트 태그 나타내기 or 사라지기

    let s8 = $("#book_menu_list_page").offset().top;
    if (ws > s8 - 600) {
            $("#book_menu_tag_h").css("transform", "translateY(0px)").css("opacity", "1")
            $("#book_menu_tag_p").css("transform", "translateY(0px)").css("opacity", "1")

}
    if (ws > s8 + 300) {
        $("#book_menu_tag_h").css("transform", "translateY(200px)").css("opacity", "0")
        $("#book_menu_tag_p").css("transform", "translateY(200px)").css("opacity", "0")

}

      //책 픽 페이지 태그 나타내기 or 사라지기

      let s9 = $("#book_pic_Page").offset().top;
      if (ws > s9 - 600) {
          $("#book_pic_tag_h").css("transform", "translateY(0px)").css("opacity", "1")
          $("#book_pic_tag_p").css("transform", "translateY(0px)").css("opacity", "1")

      }
      if (ws > s9 + 200) {
          $("#book_pic_tag_h").css("transform", "translateY(200px)").css("opacity", "0")
          $("#book_pic_tag_p").css("transform", "translateY(200px)").css("opacity", "0")

      }


  //요금제 페이지 태그 나타내기 or 사라지기

  let s10 = $("#Mony_Page").offset().top;
  if (ws > s10 - 600) {
      $("#Mony_H").css("transform", "translateY(0px)").css("opacity", "1")
      $("#Mony_P").css("transform", "translateY(0px)").css("opacity", "1")

  }
  if (ws > s10 + 200) {
      $("#Mony_H").css("transform", "translateY(200px)").css("opacity", "0")
      $("#Mony_P").css("transform", "translateY(200px)").css("opacity", "0")

  }

  //오디오북 페이지 나타내기 or 사라지기

  let s11 = $("#top_tab").offset().top;
  if (ws > s11 - 600) {
      $(".audio_tag_h").css("transform", "translateY(0px)").css("opacity", "1")
      $(".audio_tag_p").css("transform", "translateY(0px)").css("opacity", "1")
      $(" .swiper-slide").css("transform", "translateY(0px)").css("opacity", "1")

  }
  if (ws > s11 + 200) {
      $(".audio_tag_h").css("transform", "translateY(200px)").css("opacity", "0")
      $(".audio_tag_p").css("transform", "translateY(200px)").css("opacity", "0")
      $(" .swiper-slide").css("transform", "translateY(200px)").css("opacity", "0")

  }
  //광고페이지 나타내기 or 사라지기

  let s12 = $("#advertisement_Page").offset().top;
  if (ws > s12 - 600) {
      $(".advertisement_box_list:nth-of-type(2)").css("transform", "translateY(0px)").css("opacity", "1")
    

  }
  if (ws > s12 + 200) {
      $(".advertisement_box_list:nth-of-type(2)").css("transform", "translateY(200px)").css("opacity", "0")
     

  }
 

    })

})