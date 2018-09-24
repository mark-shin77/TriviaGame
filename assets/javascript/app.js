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
            image: "<img src='../images/hound.jpg' class='hound'>",
        },
        {
            // Question 5
            question: "Bran Stark is paralyzed following a fall, who pushed him?",
            choices: ["Tryon Lannister", "Jaime Lannister", "Cersei Lannister", "Joffrey Baratheon"],
            correctAnswer: "Jamie Lannister",
            image: "<img scr='../images/jaime.jpg' class='jaime'>",
        },
        {
            // Question 6
            question: "According to Bran, chaos is ...",
            choices: ["a staircase", "a ladder", "inevitable", "a way of life"],
            correctAnswer: "a ladder",
            image: "<img scr='../images/bran.jpg' class='bran'>",
        },
        {
            // Question 7
            question: "What's the name of Arya Stark's sword?",
            choices: ["Oathkeeper", "Ice", "Needle", "Death"],
            correctAnswer: "Needle",
            image: "<img scr='../images/needle.jpg' class='needle'>",
        },
        {
            // Question 8
            question: "What's House Lannister's motto?",
            choices: ["Growing Strong", "Fire and Blood", "Hear Me Roar", "Winter is Coming"],
            correctAnswer: "Hear Me Roar",
            image: "<img scr='../images/lannister.jpg' class='lannister'>",
        },
        {
            // Question 9
            question: "Bran Stark has transformed into a seer called ...",
            choices: ["The All Seeing", "The Three-Eyed Raven", "The Younger", "Hodor"],
            correctAnswer: "The Three-Eyed Raven",
            image: "<img scr='../images/raven.jpg' class='raven'>",
        },
        {
            // Question 10
            question: "What disease was Jorah Mormont stricken with?",
            choices: ["Measles", "Greyscale", "Stone Skin", "Dragon Stone"],
            correctAnswer: "Greyscale",
            image: "<img scr='../images/greyscale.jpg' class='greyscale'>",
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
        $(".jumbotron").append("<p>The answer was <span class='answer'>" + correctAnswer 
            + questions[questionCounter].image + "</span></p>");
        setTimeout(nextQuestion, 4000);
        questionCounter++;
    }
    console.log(userWin());

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

    }


    // function nextQuestion () {
    //     if (questionCounter < questions.length) {
    //         time = 15;
    //         $(".jumbotron").html("<p>You have" + time + "seconds left! </p>");
    //         questionContent();
    //         timer
    //     }
    // }
});