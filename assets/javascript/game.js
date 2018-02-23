$( document ).ready(function() {
    


    function newRandomNumber() {
       var Random = 19 + Math.floor(Math.random()*120); // This selects a random number between 19 and 120 to be displayed at the begin of the game. 
       $("#number-to-guess").text(Random);
       console.log(Random);
    }
    
    newRandomNumber();
        var counter = 0;
        var wins = 0;
        var losses = 0; 
    
        //defines variables that will hold the counter, wins, and losses for the game.
    function crystalNumber(){
        var num1= Math.floor((Math.random()*11)+1);
        var num2= Math.floor((Math.random()*11)+1); 
        var num3= Math.floor((Math.random()*11)+1); 
        var num4= Math.floor((Math.random()*11)+1); 
    }
    
        //sets up a random number between 1 and 12 for each of the crystals
    
    
        $("#win").text(wins); //this returns the text wins for the element win in the html doc
        $("#loss").text(losses); //this returns the text losses for the element loss in the html doc
        
        //reset the game 
        function reset(){
            Random=Math.floor(Math.random()*101+19);
             num1= Math.floor((Math.random()*11)+1);
             num2= Math.floor((Math.random()*11)+1); 
             num3= Math.floor((Math.random()*11)+1); 
             num4= Math.floor((Math.random()*11)+1);
            counter = 0;
            $("#yourscore").text(counter);
        }
    
        function won(){
            alert("You won!");
            wins++;
            ("#win").text(wins);
            reset();
        }
    
        function lost(){
            alert("You Lost");
            losses++;
            ("#losses").text(losses);
            reset();
        }
    
        $("#one").on("click", function crystalNumber(){
            counter = counter + num1;
            $("#yourscore").text("#totalScore");
            //set wins and losses conditions 
            if (totalScore == Random){
                won();
            }
            else if (totalScore > Random){
                lost();
            }
        });
        $("#two").on("click", function crystalNumber(){
            counter = counter + num2;
            $("#yourscore").text("#totalScore");
            //set wins and losses conditions 
            if (totalScore == Random){
                won();
            }
            else if (totalScore > Random){
                lost();
            }
        });
        $("#three").on("click", function crystalNumber(){
            counter = counter + num3;
            $("#yourscore").text(totalScore);
            //set wins and losses conditions 
            if (totalScore == Random){
                won();
            }
            else if (totalScore > Random){
                lost();
            }
        });
        $("#four").on("click", function(){
            counter = counter + num4;
            $("#yourscore").text(totalScore);
            //set wins and losses conditions 
            if (totalScore == Random){
                won();
            }
            else if (totalScore > Random){
                lost();
            }
        });

    });
    

    
    
    
    
    
    
    
       

