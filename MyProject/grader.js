
// Quiz timer settings
let timeLeft = 600;
let timerInterval;
let quizStarted = false;
let quizSubmitted = false;

const startButton = document.getElementById("startQuiz");
const timerDisplay = document.getElementById("quizTimer");
const quizForm = document.getElementById("quizForm");
const resultsDisplay = document.getElementById("quizResults");

// Correct answers
const answers = {
    q1: { answer: "a", text: "HyperText Markup Language" },
    q2: { answer: "b", text: "Web 2.0" },
    q3: { answer: "a", text: "HyperText Transfer Protocol" },
    q4: { answer: "b", text: "<p>" },
    q5: { answer: "b", text: "To style and format webpages" },
    q6: { answer: "b", text: "href" },
    q7: { answer: "a", text: "Web 1.0" },
    q8: { answer: "a", text: "HTTPS provides encrypted communication" },
    q9: { answer: "c", text: "background-color" },
    q10: {
        answer: ["a", "b", "c"],
        text: "Inline CSS, Internal CSS, and External CSS"
    }
};

// Start quiz button
startButton.addEventListener("click", function () {
    if (quizStarted) {
        return;
    }

    quizStarted = true;

    startButton.hidden = true;
    quizForm.hidden = false;
    timerDisplay.hidden = false;

    updateTimer();

    timerInterval = setInterval(function () {
        timeLeft--;
        updateTimer();
    }, 1000);
});

// Update timer display
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
        "Time Remaining: " +
        minutes + ":" + String(seconds).padStart(2, "0");

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        gradeQuiz();
    }
}

// Grade quiz
function gradeQuiz() {
    if (quizSubmitted) {
        return;
    }

    quizSubmitted = true;
    clearInterval(timerInterval);

    quizForm.querySelectorAll("input, button").forEach(function (element) {
        element.disabled = true;
    });

    let score = 0;
    let resultsHTML = "<h2>Quiz Results</h2>";

    // Grade questions 1 through 9
    for (let i = 1; i <= 9; i++) {
        let questionName = "q" + i;

        let selected = document.querySelector(
            'input[name="' + questionName + '"]:checked'
        );

        let userAnswer = selected ? selected.value : "";
        let correctAnswer = answers[questionName];

        if (userAnswer === correctAnswer.answer) {
            score++;

            resultsHTML +=
                '<p class="correct">Question ' + i + ': Correct!</p>';
        } else {
            resultsHTML +=
                '<p class="incorrect">Question ' + i +
                ': Incorrect. Correct answer: ' +
                correctAnswer.text + '</p>';
        }
    }

    // Grade question 10 (multiple select)
    let selectedBoxes = document.querySelectorAll(
        'input[name="q10"]:checked'
    );

    let userAnswers = Array.from(selectedBoxes)
        .map(function (box) {
            return box.value;
        })
        .sort();

    let correctAnswers = answers.q10.answer.slice().sort();

    let question10Correct =
        userAnswers.length === correctAnswers.length &&
        userAnswers.every(function (answer, index) {
            return answer === correctAnswers[index];
        });

    if (question10Correct) {
        score++;

        resultsHTML +=
            '<p class="correct">Question 10: Correct!</p>';
    } else {
        resultsHTML +=
            '<p class="incorrect">Question 10: Incorrect. ' +
            'Correct answers: ' + answers.q10.text + '.</p>';
    }

    // Calculate elapsed time
    let elapsedTime = 600 - timeLeft;

    let elapsedMinutes = Math.floor(elapsedTime / 60);
    let elapsedSeconds = elapsedTime % 60;

    let timeSpent =
        elapsedMinutes + ":" +
        String(elapsedSeconds).padStart(2, "0");

    // Determine pass or fail (7 out of 10 needed)
    let passed = score >= 7;

    resultsHTML += `
        <hr>
        <h2>Final Score: ${score}/10</h2>

        <h3 class="${passed ? "correct" : "incorrect"}">
            ${passed ? "PASS!" : "FAIL"}
        </h3>

        <p><strong>Time Spent:</strong> ${timeSpent}</p>
    `;

    resultsDisplay.innerHTML = resultsHTML;

    resultsDisplay.scrollIntoView({
        behavior: "smooth"
    });
}

// Submit quiz button
quizForm.addEventListener("submit", function (event) {
    event.preventDefault();
    gradeQuiz();
});
