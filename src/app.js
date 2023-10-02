const liens = document.querySelectorAll(".tabs  li")

$(".tabs li").hover( (elem) => {
    $(elem.target).css({'background-color': '#eee1a0', 'font-weight': 'bolder'})
},  (elem) =>  {
    $(elem.target).css({'background-color': '#FFF', 'font-weight': ''})
})