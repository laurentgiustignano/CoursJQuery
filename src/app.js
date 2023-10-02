const liens = document.querySelectorAll(".tabs  li")

$("select").change(function (){
    let str = ""
    $("select option:selected").each(function() {
        str += $(this).text() + " "
    })
    $(".affichage").text(str)
})