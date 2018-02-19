$(document).ready(function() {

    //define the string crystals with the images that will represent them.

    crystals = ["./assets/images/red.png","./assets/images/blue.png","./assets/images/green.png","./assets/images/yellow.png"];

    //define variables that will hold the counter, wins, and losses for the game.

    var counter = 0;
    var wins = 0;
    var losses = 0;

    $("#win").text(wins); //this returns the text wins for the element win in the html doc>
    $("#loss").text(losses); //this returns the text losses for the element loss in the html doc

    newCrystals(); 
    newGame();

    function newCrystals () {
        var numbers = [] 
            while(numbers.length < 4){
                var randomnumber = Math.ceil(Math.random()*12)
                var found = false;
                for (var i=0; i < numbers.length; i++){
                    if (numbers[i] == randomnumber){
                        found = true; break

                }
            }
            if(!found)numbers[numbers.length]=randomnumber;
        }
        console.log(numbers);

        for (i = 0; i < numbers.length; i++) {
                var imageCrystal = $("<img>");
                imageCrystal.attr("data-num", number[i]);
                imageCrystal.attr("src", crystals[i]);
                imageCrystal.attr("alt", "crystals");
                imageCrystal.addClass("crystalImage")
                $("#crystals").append(imageCrystals);
        }
    }

    function newGame() {
        counter = 0;
        $("yourscore").text(counter); //this replaces the content from the counter in the yourscore element in the html document.

        function randomIntFromInterval(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
        }

        var numberToGuess = randomIntFromInterval(19,120); //this define the min of 19 and a maxium of 120 for the random number to be generated from the randomIntFromInterval function above.
        
        $(".value").text(numberToGuess);

        $(".crystalImage").on("click", function(){
            counter = counter + parseInt($(this).data("num"));

            $("#yourscore").text(counter);

            if (counter == numberToGuess){
                $("status").text("You Won");
                wins ++;
                $("win").text(wins);
                console.log(wins)
                $("#crystals").empty();
                newCrystals();
                newGame();
            } else if (counter > numberToGuess){
                $("#status").text("You lose")
                losses ++;
                $("loss").text(losses);
                console.log(losses)
                $("#crystals").empty();
                newCrystal();
                newGame();
            }
        });
    }
});