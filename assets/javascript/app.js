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
            image: "<img src='assets/images/ghost.jpg' class='jonWolf'>",
        },
        {
            // Question 2
            question: "Which is not a Game of Thrones royal family name?",
            choices: ["Stark", "Tyrell", "Targaryen", "Baelish"],
            correctAnswer: "Baelish",
            image: "<img src='assets/images/baelish.jpeg' class='baelish'>",
        },
        {
            // Question 3
            question: "Ayra's fighting style is called?",
            choices: ["Wolf Wield", "Water Dancing", "Stinger", "Slashing Steel"],
            correctAnswer:"Water Dancing",
            image:"<img src='assets/images/arya.jpg' class='arya'>",
        },
        {
            // Question 4
            question: "",
            choices: [],
            correctAnswer: "",
            image: "",
        },
        // {
        //     // Question 5
        //     question:
        //     choices:
        //     correctAnswer:
        //     image:
        // },
        // {
        //     // Question 6
        //     question:
        //     choices:
        //     correctAnswer:
        //     image:
        // },
        // {
        //     // Question 7
        //     question:
        //     choices:
        //     correctAnswer:
        //     image:
        // },
        // {
        //     // Question 8
        //     question:
        //     choices:
        //     correctAnswer:
        //     image:
        // },
        // {
        //     // Question 9
        //     question:
        //     choices:
        //     correctAnswer:
        //     image:
        // },
        // {
        //     // Question 10
        //     question:
        //     choices:
        //     correctAnswer:
        //     image:
        // },
    ]
    console.log(questions[2]);




});