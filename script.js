// --- Quiz Data ---
// Contains 10 questions covering various complexity levels of solving linear equations.
const questions = [
    {
      id: 1,
      question: "Solve the equation for $x$: $$x + 12 = -5$$",
      options: [
        { text: "$x = 7$", rationale: "Incorrect. You need to subtract 12 from both sides: $-5 - 12 = -17$.", isCorrect: false },
        { text: "$x = -7$", rationale: "Incorrect. $-5 + 12 = 7$, not $-7$. You must subtract 12 from $-5$.", isCorrect: false },
        { text: "$x = 17$", rationale: "Incorrect. This suggests adding 5 and 12, but the 5 is negative.", isCorrect: false },
        { text: "$x = -17$", rationale: "To isolate $x$, subtract 12 from both sides: $x = -5 - 12 = -17$.", isCorrect: true }
      ],
      hint: "Use the subtraction property of equality to isolate $x$."
    },
    {
      id: 2,
      question: "Solve the equation for $y$: $$4y = 36$$",
      options: [
        { text: "$y = 40$", rationale: "Incorrect. This suggests addition ($36 + 4$), but the operation is multiplication.", isCorrect: false },
        { text: "$y = 32$", rationale: "Incorrect. This suggests subtraction ($36 - 4$), but the operation is multiplication.", isCorrect: false },
        { text: "$y = 9$", rationale: "To isolate $y$, divide both sides by 4: $y = 36 \\div 4 = 9$.", isCorrect: true },
        { text: "$y = 144$", rationale: "Incorrect. This suggests multiplication ($36 \\times 4$), which is the opposite of the required operation.", isCorrect: false }
      ],
      hint: "Use the division property of equality to isolate $y$."
    },
    {
      id: 3,
      question: "Solve the equation for $z$: $$-6z = 42$$",
      options: [
        { text: "$z = -7$", rationale: "To isolate $z$, divide both sides by $-6$: $z = 42 \\div (-6) = -7$.", isCorrect: true },
        { text: "$z = 7$", rationale: "Incorrect. Dividing a positive number (42) by a negative number ($-6$) results in a negative quotient.", isCorrect: false },
        { text: "$z = -48$", rationale: "Incorrect. This suggests subtraction ($42 - 6$), which is not the correct inverse operation.", isCorrect: false },
        { text: "$z = 36$", rationale: "Incorrect. This suggests addition ($42 + (-6)$), which is not the correct inverse operation.", isCorrect: false }
      ],
      hint: "Remember the rules for dividing signed numbers."
    },
    {
      id: 4,
      question: "Solve the two-step equation for $k$: $$5k - 8 = 17$$",
      options: [
        { text: "$k = 5$", rationale: "First, add 8 to both sides: $5k = 17 + 8 = 25$. Then, divide by 5: $k = 25 \\div 5 = 5$.", isCorrect: true },
        { text: "$k = 1.8$", rationale: "Incorrect. This suggests dividing 17 by 5 first, which violates the order of operations for solving.", isCorrect: false },
        { text: "$k = 3$", rationale: "Incorrect. This suggests $5k = 17 - 8 = 9$.", isCorrect: false },
        { text: "$k = 25$", rationale: "Incorrect. This is the result before the final division step ($5k=25$).", isCorrect: false }
      ],
      hint: "Perform the inverse operation for addition/subtraction first, then perform the inverse for multiplication/division."
    },
    {
      id: 5,
      question: "Solve the equation for $m$: $$\\frac{m}{3} + 4 = 1$$",
      options: [
        { text: "$m = -9$", rationale: "First, subtract 4 from both sides: $\\frac{m}{3} = 1 - 4 = -3$. Then, multiply by 3: $m = -3 \\times 3 = -9$.", isCorrect: true },
        { text: "$m = 9$", rationale: "Incorrect. This incorrectly ignores the negative sign in the subtraction step ($1 - 4 = -3$).", isCorrect: false },
        { text: "$m = 15$", rationale: "Incorrect. This suggests adding 4 and 1, then multiplying by 3.", isCorrect: false },
        { text: "$m = -1$", rationale: "Incorrect. This suggests $\\frac{m}{3} = 3$, which leads to $m=9$.", isCorrect: false }
      ],
      hint: "Always clear addition/subtraction terms first."
    },
    {
      id: 6,
      question: "Solve the equation for $p$: $$2(p - 5) = 14$$",
      options: [
        { text: "$p = 12$", rationale: "First, divide both sides by 2: $p - 5 = 14 \\div 2 = 7$. Then, add 5 to both sides: $p = 7 + 5 = 12$.", isCorrect: true },
        { text: "$p = 19$", rationale: "Incorrect. This suggests $2p = 14 + 5 = 19$, which is not correct (missing the 2 multiplier on the 5).", isCorrect: false },
        { text: "$p = 4$", rationale: "Incorrect. This suggests $p - 5 = 7$, which leads to $p = 7 - 5 = 2$.", isCorrect: false },
        { text: "$p = 2$", rationale: "Incorrect. This suggests $p - 5 = 7$, which leads to $p = 7 - 5 = 2$.", isCorrect: false }
      ],
      hint: "You can either divide by the coefficient first or distribute it first."
    },
    {
      id: 7,
      question: "Solve the multi-step equation for $a$: $$4a - 1 = a + 11$$",
      options: [
        { text: "$a = 4$", rationale: "Combine variable terms ($4a - a = 3a$) and constant terms ($11 + 1 = 12$). $3a = 12$, so $a = 12 \\div 3 = 4$.", isCorrect: true },
        { text: "$a = 2.5$", rationale: "Incorrect. This may result from $5a = 10$, which is $a=2$.", isCorrect: false },
        { text: "$a = 12$", rationale: "Incorrect. This is the result before the division step ($3a = 12$).", isCorrect: false },
        { text: "$a = 3$", rationale: "Incorrect. This may result from $3a = 9$.", isCorrect: false }
      ],
      hint: "Collect variable terms on one side and constant terms on the other."
    },
    {
      id: 8,
      question: "Solve the equation for $x$, involving decimals: $$0.5x - 3 = 1.5$$",
      options: [
        { text: "$x = 9$", rationale: "First, add 3: $0.5x = 1.5 + 3 = 4.5$. Then, divide by 0.5 (or multiply by 2): $x = 4.5 \\div 0.5 = 9$.", isCorrect: true },
        { text: "$x = 3$", rationale: "Incorrect. This is the result before the addition step ($0.5x = 1.5$).", isCorrect: false },
        { text: "$x = 4$", rationale: "Incorrect. This suggests $0.5x = 1$, which is incorrect.", isCorrect: false },
        { text: "$x = 5$", rationale: "Incorrect. This suggests $0.5x = 2.5$, which is incorrect.", isCorrect: false }
      ],
      hint: "Dividing by 0.5 is the same as multiplying by 2."
    },
    {
      id: 9,
      question: "Solve the equation for $t$: $$5t - 2(t + 1) = 10$$",
      options: [
        { text: "$t = 4$", rationale: "Distribute $-2$: $5t - 2t - 2 = 10$. Combine like terms: $3t - 2 = 10$. Add 2: $3t = 12$. Divide by 3: $t = 4$.", isCorrect: true },
        { text: "$t = 3$", rationale: "Incorrect. This results from $5t - 2t + 2 = 10$, meaning the negative sign wasn't correctly distributed.", isCorrect: false },
        { text: "$t = 12/5$", rationale: "Incorrect. This may result from $5t = 12$, neglecting the distribution step.", isCorrect: false },
        { text: "$t = 8/3$", rationale: "Incorrect. This is the result of $3t = 8$.", isCorrect: false }
      ],
      hint: "Use the distributive property first, carefully handling the negative sign."
    },
    {
      id: 10,
      question: "Solve the equation for $r$: $$\\frac{2}{3}r - 5 = \\frac{1}{3}r + 1$$",
      options: [
        { text: "$r = 6$", rationale: "Incorrect. This suggests $r = 6$ but the actual value is 18.", isCorrect: false },
        { text: "$r = 18$", rationale: "Subtract $\\frac{1}{3}r$ from both sides: $\\frac{1}{3}r - 5 = 1$. Add 5 to both sides: $\\frac{1}{3}r = 6$. Multiply by 3: $r = 18$.", isCorrect: true },
        { text: "$r = 12$", rationale: "Incorrect. This may result from simplifying incorrectly to $\\frac{1}{3}r = 4$.", isCorrect: false },
        { text: "$r = -4$", rationale: "Incorrect. This may result from $-5 - 1 = -6$, leading to $\\frac{1}{3}r = -6$.", isCorrect: false }
      ],
      hint: "Combine the fractional variable terms first."
    }
];

// --- Quiz State Variables ---
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let selectedOption = null;

// --- DOM Element References ---
const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');
const resultsArea = document.getElementById('results-area');
const scoreDisplay = document.getElementById('score-display');

// Initialize the quiz when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
});

/**
 * Displays the current question and its options.
 */
function displayQuestion() {
    // Check if the quiz is finished
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const q = questions[currentQuestionIndex];
    answered = false;
    selectedOption = null;
    nextBtn.classList.add('hidden');
    questionContainer.innerHTML = ''; // Clear previous content

    // Build the HTML for the current question
    let htmlContent = `
        <div class="mb-4 text-lg font-semibold text-gray-800">
            Question ${q.id} of ${questions.length}
        </div>
        <div class="mb-6 text-2xl font-medium text-gray-900 bg-gray-50 p-4 rounded-lg border-l-4 border-red-400">
            ${q.question}
        </div>
        <div id="options-list" class="space-y-4">
            ${q.options.map((option, index) => `
                <button
                    class="option-button w-full text-left p-4 rounded-lg border border-gray-300 bg-white hover:bg-red-50 focus:outline-none"
                    data-index="${index}"
                    onclick="selectOption(${index})"
                >
                    ${option.text}
                </button>
            `).join('')}
        </div>
        <p id="hint-text" class="hidden mt-4 text-sm text-yellow-700 italic bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">Hint: ${q.hint}</p>
    `;

    questionContainer.innerHTML = htmlContent;

    // IMPORTANT: Rerender MathJax after inserting new content to display equations correctly
    if (window.MathJax) {
        MathJax.typesetPromise([questionContainer]);
    }
}

/**
 * Handles the user selecting an option.
 * @param {number} index - The index of the selected option.
 */
function selectOption(index) {
    if (answered) return;

    // Reset styles on all options
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('bg-red-200', 'border-red-500');
    });

    // Apply selected style to the clicked button
    const selectedBtn = document.querySelector(`.option-button[data-index="${index}"]`);
    selectedBtn.classList.add('bg-red-200', 'border-red-500');

    selectedOption = index;

    // Check the answer immediately
    checkAnswer();
}


/**
 * Checks the selected answer, updates the score, and displays feedback.
 */
function checkAnswer() {
    if (answered || selectedOption === null) return;

    answered = true;
    nextBtn.classList.remove('hidden');

    const q = questions[currentQuestionIndex];
    const optionsList = document.getElementById('options-list');
    const selectedData = q.options[selectedOption];
    const selectedBtn = document.querySelector(`.option-button[data-index="${selectedOption}"]`);

    if (selectedData.isCorrect) {
        score++;
        selectedBtn.classList.add('correct', 'font-bold');
    } else {
        selectedBtn.classList.add('incorrect', 'font-bold');
        document.getElementById('hint-text').classList.remove('hidden');
    }

    // Iterate through options to disable clicks and show rationales
    optionsList.querySelectorAll('.option-button').forEach((btn, index) => {
        btn.onclick = null; // Disable further clicks
        btn.classList.remove('hover:bg-red-50', 'bg-red-200', 'border-red-500');

        const optionData = q.options[index];

        // Ensure the correct answer is visually marked if the user picked wrong
        if (optionData.isCorrect) {
            btn.classList.add('correct', 'font-bold');
        }

        // Show the rationale for the selected button and the correct answer
        if (index === selectedOption || optionData.isCorrect) {
            const rationaleDiv = document.createElement('div');
            rationaleDiv.className = 'rationale';
            rationaleDiv.innerHTML = `Rationale: ${optionData.rationale}`;
            btn.parentNode.insertBefore(rationaleDiv, btn.nextSibling);

            // Re-run MathJax on rationale text
            if (window.MathJax) {
                MathJax.typesetPromise([rationaleDiv]);
            }
        }
    });
}

/**
 * Moves to the next question or finishes the quiz.
 */
function nextQuestion() {
    if (!answered) return;
    currentQuestionIndex++;
    displayQuestion();
}

/**
 * Hides the quiz area and displays the final score.
 */
function showResults() {
    document.getElementById('quiz-area').classList.add('hidden');
    resultsArea.classList.remove('hidden');
    scoreDisplay.textContent = `${score}`;
}