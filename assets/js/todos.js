//mark todo item as complete
$("li").on("click", function(){
    $(this).toggleClass("completed");
});

//remove todo item
$(".removeBtn").on("click", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});