// function to code what each crystal button does
jQuery(document).ready(function ($) {

    var blueN = 0;
    var greenN = 0;
    var yellowN = 0;
    var redN = 0;
    var workingTotal = 0;
    var goalNumber = 0;
    var wins = 0;
    var losses = 0;

    //prep game / reset game function
    //    set new random numbers for all 4 buttons and goalNumbeer
    function resetGame() {
        console.log(`this is inside function to reset game`)
        blueN = Math.floor(Math.random() * 12)  + 1;
        greenN = Math.floor(Math.random() * 12) + 1;
        yellowN = Math.floor(Math.random() * 12) + 1;
        redN = Math.floor(Math.random() * 12) + 1;
        workingTotal = 0;
        goalNumber = Math.floor(Math.random() * 101) + 19;
    }

    // function to play 
    function play(color) {
        console.log(`You pressed the ${color} crystal.`);
        workingTotal = workingTotal + color;
            }

    // function to compare working total to goal number
    function compare() {
        console.log(`Working total is: ${workingTotal} and goal number is ${goalNumber}`);
        if (goalNumber === workingTotal){
            winGame();
        } else if (goalNumber < workingTotal) {
            loseGame();
        }
    }

    function winGame() {
        wins++;
        console.log(`you have won the game!! Now your score is ${wins}`);
        resetGame();
    }
    
    function loseGame() {
        losses++;
        console.log(`you have lost the game!! Now your losses are ${losses}`);
        resetGame();
    }

    resetGame();

    $('#blue-button').on({
        'click': function () {
            // add value of blue to working total
            play(blueN);
            // check player's score to working total
            compare();
        }
    });

    $('#green-button').on({
        'click': function () {
            play(greenN);
            compare();
        }
    });

    $('#yellow-button').on({
        'click': function () {
            play(yellowN);
            compare();
        }
    });

    $('#red-button').on({
        'click': function () {
            play(redN);
            compare();
        }
    });
});


