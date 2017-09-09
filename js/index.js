$(function() {
    var buzzer = $("#buzzer")[0],
        buzzer2 = $("#buzzer2")[0],
        count1 = parseInt($("#num").html()),
        count2 = parseInt($("#breakNum").html());

    /*buzzer.play();*/

    $("#session").hide();

    $("#start").click(function() {
        var counter = setInterval(timer, 1000);
        count1 *= 60;
        count2 *= 60;

        function timer() {
            $(
                "#start, #m5time, #m5Break, #a5time, #a5Break, #title1, #reset, #breakNum"
            ).hide();

            $("#session").show();
            $("#session").html("Session Time: ");

            count1 -= 1;

            if (count1 === 0) {
                buzzer.play();
                clearInterval(counter);
                $("#num").hide();

                var counter2 = setInterval(breakTimer, 1000);
            }

            $("#num").html(count1);

            if (count1 % 60 >= 10) {
                $("#num").html(Math.floor(count1 / 60) + ":" + count1 % 60);
            }
            else {
                $("#num").html(Math.floor(count1 / 60) + ":" + "0" + count1 % 60);
            }

            function breakTimer() {
                $("#session").html("Break Time: ");
                $("#breakNum").show();

                count2 -= 1;

                if (count2 === 0) {
                    clearInterval(counter2);
                    buzzer2.play();
                    $("#reset").show();
                    $("#session, #breakNum").hide();
                }
                $("#breakNum").html(count2);

                if (count2 % 60 >= 10) {
                    $("#breakNum").html(Math.floor(count2 / 60) + ":" + count2 % 60);
                }
                else {
                    $("#breakNum").html(
                        Math.floor(count2 / 60) + ":" + "0" + count2 % 60
                    );
                }
            }
        }
    });

    $("#m5time").click(function() {
        if (count1 > 0) {
            count1 -= 5;
            $("#num").html(count1);
        }
        event.preventDefault();
    });
    $("#a5time").click(function() {
        count1 += 5;
        $("#num").html(count1);

        event.preventDefault();
    });

    $("#m5Break").click(function() {
        if (count2 > 0) {
            count2 -= 5;
            $("#breakNum").html(count2);
        }
        event.preventDefault();
    });
    $("#a5Break").click(function() {
        count2 += 5;
        $("#breakNum").html(count2);

        event.preventDefault();
    });

    $("#reset").click(function() {
        location.reload(true);
    });
});
