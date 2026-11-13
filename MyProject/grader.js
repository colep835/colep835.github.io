// Wait for the quiz form to be submitted
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Store the correct answers
    const answers = {
        q1: "a",
        q2: "b",
        q3: "a",
        q4: "b",
        q5: "b",
        q6: "b",
        q7: "a",
        q8: "a",
        q9: "c",
        q10: ["a", "b", "c"]
    };

    let score = 0;
    let resultsHTML = "<h2>Quiz Results</h2>";

    // Check Questions 1 through 9
    for (let i = 1; i <= 9; i++) {
        const questionName = "q" + i;
        const selected = document.querySelector(
            'input[name="' + questionName + '"]:checked'
        );

        const userAnswer = selected ? selected.value : "";
        const correctAnswer = answers[questionName];

        if (userAnswer === correctAnswer) {
            score++;
            resultsHTML += `
                <p class="correct">
                    Question ${i}: Correct!
                </p>`;
        } else {
            resultsHTML += `
                <p class="incorrect">
                    Question ${i}: Incorrect.
                    Correct answer: ${correctAnswer.toUpperCase()}
                </p>`;
        }
    }

    // Check Question 10 (multiple selection)
    const selectedBoxes = document.querySelectorAll(
        'input[name="q10"]:checked'
    );

    const userAnswers = Array.from(selectedBoxes)
        .map(box => box.value)
        .sort();

    const correctAnswers = answers.q10.slice().sort();

    const question10Correct =
        userAnswers.length === correctAnswers.length &&
        userAnswers.every((answer, index) =>
            answer === correctAnswers[index]
        );

    if (question10Correct) {
        score++;
        resultsHTML += `
            <p class="correct">
                Question 10: Correct!
            </p>`;
    } else {
        resultsHTML += `
            <p class="incorrect">
                Question 10: Incorrect.
                Correct answers: A, B, and C.
            </p>`;
    }

    // Calculate final score
    const passed = score >= 7;

    resultsHTML += `
        <hr>
        <h2>Final Score: ${score}/10</h2>
        <h3 class="${passed ? 'correct' : 'incorrect'}">
            ${passed ? 'PASS!' : 'FAIL'}
        </h3>
    `;

    // Display results on the page
    document.getElementById("quizResults").innerHTML = resultsHTML;

    // Scroll to the results
    document.getElementById("quizResults").scrollIntoView({
        behavior: "smooth"
    });

});