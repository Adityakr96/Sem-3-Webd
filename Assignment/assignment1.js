// Five basic Front-End Web Development questions

const quizQuestions = [
    {
        question: "1. Which language is used to create the structure of a web page?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "HTML"
    },
    {
        question: "2. Which language is mainly used to style a web page?",
        options: ["HTML", "CSS", "C++", "SQL"],
        answer: "CSS"
    },
    {
        question: "3. Which language adds interactivity to a web page?",
        options: ["Java", "JavaScript", "HTML", "CSS"],
        answer: "JavaScript"
    },
    {
        question: "4. Which HTML tag is used to create a hyperlink?",
        options: ["<p>", "<img>", "<a>", "<h1>"],
        answer: "<a>"
    },
    {
        question: "5. Which CSS property changes the text colour?",
        options: ["font-size", "background-color", "color", "margin"],
        answer: "color"
    }
];


const detailsForm = document.getElementById("detailsForm");
const quizForm = document.getElementById("quizForm");

const detailsPage = document.getElementById("detailsPage");
const quizPage = document.getElementById("quizPage");

const questionsArea = document.getElementById("questions");

const formMessage = document.getElementById("formMessage");
const quizMessage = document.getElementById("quizMessage");

const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");


// Current question number
let currentQuestion = 0;

// Student score
let score = 0;

// Timer
let timeLeft = 30;
let timer;


// ---------------- STUDENT DETAILS ----------------

detailsForm.onsubmit = function (event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const rollNo = document.getElementById("rollNumber").value.trim();
    const section = document.getElementById("section").value.trim();

    if (name === "" || rollNo === "" || section === "") {
        formMessage.textContent =
            "Please fill in all the required fields.";
        return;
    }

    formMessage.textContent = "";

    document.getElementById("welcomeText").textContent =
        "Good luck, " + name + "!";

    detailsPage.classList.add("hidden");
    quizPage.classList.remove("hidden");

    showQuestion();
};


// ---------------- SHOW QUESTION ----------------

function showQuestion() {

    // Stop previous timer
    clearInterval(timer);

    questionsArea.innerHTML = "";
    quizMessage.textContent = "";

    const item = quizQuestions[currentQuestion];

    const questionBox = document.createElement("div");
    questionBox.className = "question";


    // Question
    const questionText = document.createElement("p");
    questionText.textContent = item.question;

    questionBox.appendChild(questionText);


    // Options
    item.options.forEach(function (option) {

        const label = document.createElement("label");
        label.className = "option";

        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "currentQuestion";
        radio.value = option;

        label.appendChild(radio);

        label.appendChild(
            document.createTextNode(" " + option)
        );


        // Highlight selected option
        label.onclick = function () {

            const allOptions =
                questionBox.querySelectorAll(".option");

            allOptions.forEach(function (oneOption) {
                oneOption.classList.remove("selected");
            });

            label.classList.add("selected");
        };


        questionBox.appendChild(label);
    });


    questionsArea.appendChild(questionBox);


    // Change button text
    if (currentQuestion === quizQuestions.length - 1) {
        submitButton.textContent = "Finish Quiz";
    } else {
        submitButton.textContent = "Submit & Next";
    }


    // Start 30-second timer
    startTimer();
}


// ---------------- TIMER ----------------

function startTimer() {

    timeLeft = 30;

    // Create timer display
    let timerDisplay = document.getElementById("timer");

    if (!timerDisplay) {

        timerDisplay = document.createElement("p");

        timerDisplay.id = "timer";

        timerDisplay.style.textAlign = "center";
        timerDisplay.style.fontWeight = "bold";
        timerDisplay.style.fontSize = "18px";

        quizPage.insertBefore(
            timerDisplay,
            quizForm
        );
    }


    timerDisplay.textContent =
        "Time left: " + timeLeft + " seconds";


    // Run every 1 second
    timer = setInterval(function () {

        timeLeft--;

        timerDisplay.textContent =
            "Time left: " + timeLeft + " seconds";


        // Time finished
        if (timeLeft <= 0) {

            clearInterval(timer);

            moveToNextQuestion();
        }

    }, 1000);
}


// ---------------- SUBMIT BUTTON ----------------

quizForm.onsubmit = function (event) {

    event.preventDefault();

    // Stop timer
    clearInterval(timer);

    const selectedAnswer =
        document.querySelector(
            'input[name="currentQuestion"]:checked'
        );


    // If no answer selected
    if (selectedAnswer === null) {

        moveToNextQuestion();

        return;
    }


    // Check answer
    if (
        selectedAnswer.value ===
        quizQuestions[currentQuestion].answer
    ) {
        score++;
    }


    moveToNextQuestion();
};


// ---------------- NEXT QUESTION ----------------

function moveToNextQuestion() {

    clearInterval(timer);

    // Last question
    if (currentQuestion === quizQuestions.length - 1) {

        showFinalResult();

    } else {

        currentQuestion++;

        showQuestion();
    }
}


// ---------------- FINAL RESULT ----------------

function showFinalResult() {

    clearInterval(timer);

    questionsArea.innerHTML = "";

    quizMessage.textContent = "";

    submitButton.classList.add("hidden");

    const timerDisplay = document.getElementById("timer");

    if (timerDisplay) {
        timerDisplay.classList.add("hidden");
    }


    result.textContent =
        "Your score is " +
        score +
        " out of " +
        quizQuestions.length +
        ".";

    result.classList.remove("hidden");
}