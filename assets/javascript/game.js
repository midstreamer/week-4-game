$( document ).ready(function() {
    

    var Random = Math.floor(Math.random()*120) + 1;
    function newRandomNumber() {
       Random = Math.floor(Math.random()*120) + 1; // This selects a random number between 19 and 120 to be displayed at the begin of the game. 
       $("#number-to-guess").text(Random);
       console.log(Random);
    }
    
    newRandomNumber();
        var counter = 0;
        var wins = 0;
        var losses = 0;
    
        
        $("#wins").text(wins); //this returns the text wins for the element win in the html doc
        $("#losses").text(losses); //this returns the text losses for the element loss in the html doc
        $("#yourScore").text(counter);

 //sets up a random number between 1 and 12 for each of the crystals

  
        var num1= 1 + Math.floor(Math.random()*12);
        var num2= 1 + Math.floor(Math.random()*12); 
        var num3= 1 + Math.floor(Math.random()*12); 
        var num4= 1 + Math.floor(Math.random()*12); 
    
    
        //reset the game 
        function reset(){
            Random = Math.floor(Math.random()*120) + 1;
             num1= 1 + Math.floor(Math.random()*12);
             num2= 1 + Math.floor(Math.random()*12);
             num3= 1 + Math.floor(Math.random()*12); 
             num4= 1 + Math.floor(Math.random()*12);
             counter = 0;
            $("#yourScore").text(counter);
        }
    
        function won(){
            alert("You won!");
            wins++;
            ("#wins").text(wins);
            reset();
        }
    
        function lost(){
            alert("You Lost");
            losses++;
            ("#losses").text(losses);
            reset();
        }
    
        $("#one").on("click", function(){
            counter = counter + num1;
            $("#yourScore").text(counter);
            if (counter == Random){
                won();
            }
            else if (counter > Random){
                lost();
            }
        });
        $("#two").on("click", function(){
            counter = counter + num2;
            $("#yourScore").text(counter);
            if (counter == Random){
                won();
            }
            else if (counter > Random){
                lost();
            }
        });
        $("#three").on("click", function(){
            counter = counter + num3;
            $("#yourScore").text(counter);
            if (counter == Random){
                won();
            }
            else if (counter > Random){
                lost();
            }
        });
        $("#four").on("click", function(){
            counter = counter + num4;
            $("#yourScore").text(counter); 
            if (counter == Random){
                won();
            }
            else if (counter > Random){
                lost();
            }
        });

    });
    

    
    
    
    
    
    
    
       

