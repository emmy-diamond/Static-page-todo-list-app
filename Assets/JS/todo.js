//check off specific li on the list

$("ul").on("click", "li", function() {
    //condition for unchecking li
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none",
    //     });
    // } else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through",
    //     });
    // }

    //all the above code can be written just in one line
    $(this).toggleClass("strikeOutEffect");
});

//next is to click x to delete todo from list and fade out effect
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //grabbing todo text from input
        let todoText = $(this).val();
        $(this).val("");
        //create new li then add to ul
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
    }
});
$(".fa-pencil ").click(function() {
    $("input[type='text']").fadeToggle();
})