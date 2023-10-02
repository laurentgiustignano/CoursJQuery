const liens = document.querySelectorAll(".tabs  li")

$(".tabs li").hover(function () {
    $(this).css({'background-color': '#eee1a0', 'font-weight': 'bolder'})
}, function () {
    $(this).css({'background-color': '#FFF', 'font-weight': ''})
})