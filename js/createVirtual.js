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
            }
        })
    });
})