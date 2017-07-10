/**
 * Created by Administrator on 2017/7/10 0010.
 */
$(document).ready(function () {
    $("#createVirtual .MN").each(function() {
        $(this).click(function() {
            if ($(this).hasClass("MN-next")) {
                $("#createVirtual .carousel").carousel('next');
                $("#createVirtual .step li.active").next().addClass("active");
            } else {
                $("#createVirtual .carousel").carousel('prev');
                if ($("#createVirtual .step li").length > 1) {
                    $($($("#createVirtual .step li.active"))[$("#createVirtual .step li.active").length - 1]).removeClass("active")
                }
            };
            // if($($(".breedList").children("li")[1]).hasClass("active")){
            //     $(".MN-pre").show();
            //     $(".tipFirst").hide();
            //     $(".tipSecond").hide();
            // }else{
            //     $(".MN-pre").hide();
            //     $(".tipFirst").hide();
            //     $(".tipSecond").hide();
            // };
            // if($($(".breedList").children("li")[3]).hasClass("active")){
            //     $(".MN-pre").show();
            //     $(".tipFirst").show();
            // };
            // if($($(".breedList").children("li")[4]).hasClass("active")){
            //     $("#createEnsureBtn").show();
            //     $(".MN-next").hide();
            //     $(".tipFirst").hide();
            //     $(".tipSecond").show();
            // }else{
            //     $("#createEnsureBtn").hide();
            //     $(".MN-next").show();
            //     $(".tipSecond").hide();
            // };
        })
    });
})