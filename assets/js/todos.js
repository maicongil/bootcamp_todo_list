//mark todo item as complete
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//remove todo item
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add new todo item
$("input[type='text']").keypress(function(event){
    if(event.which ===13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></span>" + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});