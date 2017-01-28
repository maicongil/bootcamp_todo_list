
$("li").on("click", function(){
    $(this).toggleClass("completed");
});

$(".removeBtn").on("click", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});