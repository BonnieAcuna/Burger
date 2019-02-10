$(function () {
    $(".devour-burger").on("click", function (event) {
        const id = $(this).data("id");
        const eatBurger = $(this).data("eatburger");

        const newEatState = {
            devoured: eatBurger
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("Change eat to", eatBurger);
                location.reload();
            }
        );
    });



    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            name: $("#bur").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created new burger");
                location.reload();
            }
        );
    });
});