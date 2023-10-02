$("select").on('change', () => {
    let str = ""
    $("select option:selected").each((index, elem) => {
    })
    $(".affichage").text(str)
})