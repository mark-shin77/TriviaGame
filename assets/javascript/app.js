$(document).ready(function() {

// Global Variables
//========================================================================    
    var questionCounter = 0;
    var time = 15;
    var correctGuess = 0;
    var wrongGuess = 0;

// Questions & Answers
    var questions = [
        {
            // Question 1
            question:"What is the name of Jon's direwolf?",
            choices: ["Grey Wind", "Lady", "Ghost", "Nymeria", "Summer", "Shaggydog"],
            correctAnswer: "Ghost",
            image: "<img src='../TriviaGame/assets/images/ghost.jpg' class='jonWolf'>",
        },
        {
            // Question 2
            question: "Which is not a Game of Thrones royal family name?",
            choices: ["Stark", "Tyrell", "Targaryen", "Baelish"],
            correctAnswer: "Baelish",
            image: "<img src='../TriviaGame/assets/images/baelish.jpeg' class='baelish'>",
        },
        {
            // Question 3
            question: "Ayra's fighting style is called?",
            choices: ["Wolf Wield", "Water Dancing", "Stinger", "Slashing Steel"],
            correctAnswer:"Water Dancing",
            image:"<img src='../TriviaGame/assets/images/arya.jpg' class='arya'>",
        },
        {
            // Question 4
            question: "Sandor Clegane is known as ...",
            choices: ["The Hound", "The Kingslayer", "The Beast", "The Mountain"],
            correctAnswer: "The Hound",
            image: "<img src='../TriviaGame/assets/images/hound.jpg' class='hound'>",
        },
        {
            // Question 5
            question: "Bran Stark is paralyzed following a fall, who pushed him?",
            choices: ["Tryon Lannister", "Jaime Lannister", "Cersei Lannister", "Joffrey Baratheon"],
            correctAnswer: "Jaime Lannister",
            image: "<img src='../TriviaGame/assets/images/jaime.jpg' class='jaime'>",
        },
        {
            // Question 6
            question: "According to Bran, chaos is ...",
            choices: ["a staircase", "a ladder", "inevitable", "a way of life"],
            correctAnswer: "a ladder",
            image: "<img src='../TriviaGame/assets/images/bran.jpg' class='bran'>",
        },
        {
            // Question 7
            question: "What's the name of Arya Stark's sword?",
            choices: ["Oathkeeper", "Ice", "Needle", "Death"],
            correctAnswer: "Needle",
            image: "<img src='../TriviaGame/assets/images/needle.jpg' class='needle'>",
        },
        {
            // Question 8
            question: "What's House Lannister's motto?",
            choices: ["Growing Strong", "Fire and Blood", "Hear Me Roar", "Winter is Coming"],
            correctAnswer: "Hear Me Roar",
            image: "<img src='../TriviaGame/assets/images/lannister.jpg' class='lannister'>",
        },
        {
            // Question 9
            question: "Bran Stark has transformed into a seer called ...",
            choices: ["The All Seeing", "The Three-Eyed Raven", "The Younger", "Hodor"],
            correctAnswer: "The Three-Eyed Raven",
            image: "<img src='../TriviaGame/assets/images/raven.jpg' class='raven'>",
        },
        {
            // Question 10
            question: "What disease was Jorah Mormont stricken with?",
            choices: ["Measles", "Greyscale", "Stone Skin", "Dragon Stone"],
            correctAnswer: "Greyscale",
            image: "<img src='../TriviaGame/assets/images/greyscale.jpg' class='greyscale'>",
        },
    ]

    // Test to see if array of questions was inputted correctly
    // for (var x = 0; x<questions.length; x++){
    //     console.log(questions[x]);
    // }

    // create question contents according to question count
	function questionContent() {
	// a for loop would be cool here...
    $(".jumbotron").append("<p><strong>" + 
    	questions[questionCounter].question + "</p><p class='choices'>" + 
		questions[questionCounter].choices[0] + "</p><p class='choices'>" + 
    	questions[questionCounter].choices[1] + "</p><p class='choices'>" + 
    	questions[questionCounter].choices[2] + "</p><p class='choices'>" + 
		questions[questionCounter].choices[3] + "</strong></p>");
    }

    // user guessed correctly
    function userWin() {
        $(".jumbotron").html("<p>Correct!<p>");
        correctGuess++;
        var correctAnswer = questions[questionCounter].correctAnswer;
        $(".jumbotron").append("<p>The answer was " + correctAnswer 
            + "</p>" + questions[questionCounter].image);
        setTimeout(nextQuestion, 4000);
        questionCounter++;
    }
    // console.log(userWin());

    // user guessed incorrectly
    function userLoss() {
        $(".jumbotron").html("<p>Sorry, maybe next time!</p>");
        wrongGuess++;
        var correctAnswer = questions[questionCounter].correctAnswer;
        $(".jumbotron").append("<p>The answer was " + correctAnswer 
            + "</p>" + questions[questionCounter].image);
        setTimeout(nextQuestion, 4000);
        questionCounter++;
    }
    // console.log(userLoss());
    
    // timeout
    function userTimeout (){
        if (time === 0) {
            $(".jumbotron").html("<p>You ran out of time ... </p>");
            wrongGuess++;
            var correctAnswer = questions[questionCounter].correctAnswer;
            $(".jumbotron").append("<p>The answer was " + correctAnswer 
                + "</p>" + questions[questionCounter].image);
            setTimeout(nextQuestion, 4000);
            questionCounter++;
        }
    }

    // results screen
    function resultsScreen() {
        if (correctGuess === questions.length) {
            var endMessage = "Amazing! You're a true fan";
            var bottomText = "#trueFan";
        } else if (correctGuess > wrongGuess) {
            var endMessage = "You could do better ...";
            var bottomText = "Time to get an HBO subscription";
        } else {
            var endMessage = "Maybe you should watch the series then try again ...";
            var bottomText = "#scrub";
        }
        $(".jumbotron").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
            correctGuess + "</strong> correct.</p>" + "<p>You got <strong>" 
            + wrongGuess + "</strong> wrong. </p>");
        $(".jumbotron").append("<h1 id='start'>Try again?</h1>");
        $("#bottomText").html(bottomText);
        gameReset();
        $("#start").on('click', nextQuestion);
        }

    // 15 second timer on each question
    function timer () {
        clock=setInterval(countDown, 1000);
        function countDown(){
            if (time < 1){
                clearInterval(clock);
                userTimeout();
            }
            if (time > 0){
                time--;
            }
            $("#countdown").html("<strong>" + time + "</strong>");
        }
    }

    // getting to next question
    function nextQuestion () {
        if (questionCounter < questions.length) {
            time = 15;
            $(".jumbotron").html("<p>You have <span id=countdown><strong>" + time + "</strong></span id = countdown> seconds left! </p>");
            questionContent();
            timer();
            userTimeout();
        } else {
            resultsScreen();
        }
    }

    // console.log(questionCounter);
    // console.log(questions[questionCounter].correctAnswer);
    // console.log(nextQuestion());

    // restarting game
    function gameReset (){
        questionCounter = 0;
        correctGuess = 0;
        wrongGuess = 0;
    }

    function startGame() {
        $(".jumbotron").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
        $("#start").hide();
        questionContent();
        timer();
        userTimeout();
    }
    // starting game 
    $("#start").on('click', nextQuestion);

    $(".jumbotron").on('click', ".choices", function(){
        var userGuess = $(this).text();
        if (userGuess === questions[questionCounter].correctAnswer) {
            clearInterval(clock);
            userWin();
        } else {
            clearInterval(clock);
            userLoss();
        }

    });

});