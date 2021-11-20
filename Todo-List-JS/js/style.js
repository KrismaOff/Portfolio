var list = []
var i = 0

$("button.add").on("click", function() {
    let input = $("input").val()
    list.push(input)
    $("input").val("");
    $("#info").css("display", "block")
    function addButton(){
        $("#info").css("display", "none")
    }
    setTimeout(addButton, 1500);  
    console.log(list)
    i++
    $(".num").text(i)
})

$("button.show").on("click", function(){    
    let NewBlock = "<div class = 'newBlock'>" + "№" + i + " " + list[0] + "</div>"
    $(".container").append(NewBlock) 
    list.length = 0
})

$(".wrapper").on("click", function(){
    location.reload()
})
