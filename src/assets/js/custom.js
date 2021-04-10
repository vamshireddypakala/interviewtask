$(".modal").click(function () {
    var animation = $(this).attr("data-animation");
    $(this).addClass(animation).delay(1000).queue(function (next) {
        $(this).removeClass(animation);
        next();
    });
});