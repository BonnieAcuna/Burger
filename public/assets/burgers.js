$(function () {
    $(".devour-burger").on("click", function (event) {
        let id = $(this).attr("data-id");
        // const eatBurger = $(this).data("eatburger");

        const newEatState = {
            devoured: true
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("Change eat to", newEatState);
                location.reload();
            }
        );
    });



    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log("Running script")
        let newBurger = {
            burger_name: $("#bur").val().trim(),
            devoured: 0
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