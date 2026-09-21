// Five basic Front-End Web Development questions.
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

// onsubmit is an event property. It checks the details before showing page 2.
detailsForm.onsubmit = function (event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const rollNo = document.getElementById("rollNumber").value.trim();
  const section = document.getElementById("section").value.trim();

  if (name === "" || rollNo === "" || section === "") {
    formMessage.textContent = "Please fill in all the required fields.";
    return;
  }

  formMessage.textContent = "";
  document.getElementById("welcomeText").textContent = "Good luck, " + name + "!";
  detailsPage.classList.add("hidden");
  quizPage.classList.remove("hidden");
  showQuestions();
};

function showQuestions() {
  questionsArea.innerHTML = "";

  quizQuestions.forEach(function (item, questionIndex) {
    const questionBox = document.createElement("div");
    questionBox.className = "question";
    questionBox.innerHTML = "<p>" + item.question + "</p>";

    item.options.forEach(function (option) {
      const label = document.createElement("label");
      label.className = "option";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "question" + questionIndex;
      radio.value = option;
      label.appendChild(radio);
      // textContent keeps symbols in answers such as <a> visible on the page.
      label.appendChild(document.createTextNode(" " + option));

      // onclick selects the option and gives it a highlighted background.
      label.onclick = function () {
        const allOptions = questionBox.querySelectorAll(".option");
        allOptions.forEach(function (oneOption) {
          oneOption.classList.remove("selected");
        });
        label.classList.add("selected");
      };

      questionBox.appendChild(label);
    });

    questionsArea.appendChild(questionBox);
  });
}

// onsubmit checks answers when the Submit Quiz button is clicked.
quizForm.onsubmit = function (event) {
  event.preventDefault();
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    const selectedAnswer = document.querySelector('input[name="question' + i + '"]:checked');
    if (selectedAnswer === null) {
      quizMessage.textContent = "Please answer all 5 questions before submitting.";
      return;
    }
    if (selectedAnswer.value === quizQuestions[i].answer) {
      score++;
    }
  }

  quizMessage.textContent = "";
  const result = document.getElementById("result");
  result.textContent = "Your score is " + score + " out of " + quizQuestions.length + ".";
  result.classList.remove("hidden");
  document.getElementById("submitButton").disabled = true;
};
