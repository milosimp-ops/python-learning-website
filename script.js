
const modules = [
    {
        title: "Variables and Data Types",
        icon: "📦",
        description: "Store information and understand different kinds of data.",
        lesson: `
            <h2>What is a variable?</h2>
            <p>A variable is a name that refers to a value. Think of it as a labelled box that stores information.</p>
            <pre><code>name = "Alex"
age = 18
height = 1.65
is_student = True

print(name)
print(age)</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>Alex
18</code></pre>
            <h2>Common data types</h2>
            <p><code>str</code> stores text, <code>int</code> stores whole numbers, <code>float</code> stores decimal numbers, and <code>bool</code> stores True or False.</p>
            <h2>Remember</h2>
            <p>Text needs quotation marks. Numbers do not. Python is case-sensitive, so <code>age</code> and <code>Age</code> are different names.</p>
        `,
        cards: [
            ["What is a variable?", "A name that refers to a value."],
            ["Which type stores text?", 'str, for example: name = "Alex".'],
            ["What is the type of 10?", "int — a whole number."],
            ["What is the type of 3.5?", "float — a number with a decimal part."],
            ["What values can bool store?", "True or False. Remember the capital letters."]
        ],
        quiz: [
            {
                question: 'What is printed by print("Hello")?',
                options: ["Hello", '"Hello"', "Nothing", "An error"],
                answer: 0,
                explanation: "print() displays the text without its quotation marks."
            },
            {
                question: "Which data type is 4.5?",
                options: ["str", "int", "float", "bool"],
                answer: 2,
                explanation: "4.5 is a decimal number, so its type is float."
            },
            {
                question: "Which is a valid Boolean value?",
                options: ["true", "TRUE", "True", '"True"'],
                answer: 2,
                explanation: 'Python uses True with a capital T. "True" is a string.'
            }
        ]
    },
    {
        title: "Operators",
        icon: "➕",
        description: "Perform calculations and compare values.",
        lesson: `
            <h2>Arithmetic operators</h2>
            <pre><code>print(10 + 3)
print(10 - 3)
print(10 * 3)
print(10 / 3)
print(10 // 3)
print(10 % 3)
print(2 ** 3)</code></pre>
            <p><strong>Output:</strong></p>
            <pre><code>13
7
30
3.3333333333333335
3
1
8</code></pre>
            <h2>What do the symbols mean?</h2>
            <p><code>+</code> adds, <code>-</code> subtracts, <code>*</code> multiplies, <code>/</code> divides, <code>//</code> performs floor division, <code>%</code> gives the remainder, and <code>**</code> raises a number to a power.</p>
            <h2>Comparison operators</h2>
            <pre><code>print(5 > 3)
print(5 == 3)
print(5 != 3)</code></pre>
            <p><strong>Output:</strong> True, False, True.</p>
            <p>Comparisons produce Boolean values.</p>
        `,
        cards: [
            ["What does % return?", "The remainder after division."],
            ["What does // do?", "Floor division: rounds the quotient down."],
            ["What does ** mean?", "Exponentiation, such as 2 ** 3 = 8."],
            ["What does == check?", "Whether two values are equal."],
            ["What does != check?", "Whether two values are not equal."]
        ],
        quiz: [
            {
                question: "What is the result of 10 % 3?",
                options: ["3", "1", "0", "3.33"],
                answer: 1,
                explanation: "3 fits into 10 three times, leaving a remainder of 1."
            },
            {
                question: "What is the result of 2 ** 3?",
                options: ["5", "6", "8", "9"],
                answer: 2,
                explanation: "2 ** 3 means 2 × 2 × 2, which equals 8."
            },
            {
                question: "Which operator checks equality?",
                options: ["=", "==", "!=", ">="],
                answer: 1,
                explanation: "== compares two values. A single = assigns a value."
            }
        ]
    },
    {
        title: "If Statements",
        icon: "🔀",
        description: "Make decisions in your programs.",
        lesson: `
            <h2>Teach your program to decide</h2>
            <p>An if statement runs code only when a condition is True.</p>
            <pre><code>age = 18

if age >= 18:
    print("You are an adult.")
else:
    print("You are under 18.")</code></pre>
            <p><strong>Output:</strong> You are an adult.</p>
            <h2>Use elif for another condition</h2>
            <pre><code>score = 75

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("Below B")</code></pre>
            <p><strong>Output:</strong> Below B</p>
            <h2>Important rule: indentation</h2>
            <p>Indented lines belong to the code block above them. Python commonly uses four spaces for each indentation level.</p>
        `,
        cards: [
            ["When does an if block run?", "When its condition evaluates to True."],
            ["What does else do?", "Runs if the preceding conditions were False."],
            ["What is elif used for?", "Checking another condition if earlier conditions were False."],
            ["Why is indentation important?", "It defines which statements belong to a code block."],
            ["What does >= mean?", "Greater than or equal to."]
        ],
        quiz: [
            {
                question: "If x = 4, what does x > 5 evaluate to?",
                options: ["True", "False", "4", "An error"],
                answer: 1,
                explanation: "4 is not greater than 5, so the condition is False."
            },
            {
                question: "Which keyword checks another condition?",
                options: ["repeat", "elif", "then", "next"],
                answer: 1,
                explanation: "elif checks another condition after an earlier if or elif was False."
            },
            {
                question: "What happens when an if condition is False and there is no else?",
                options: ["The block is skipped", "The program always stops", "The block runs anyway", "Python changes it to True"],
                answer: 0,
                explanation: "Python skips that if block and continues with the remaining program."
            }
        ]
    },
    {
        title: "Loops",
        icon: "🔁",
        description: "Repeat instructions without writing them over and over.",
        lesson: `
            <h2>For loops</h2>
            <p>A for loop repeats code for each item in a sequence.</p>
            <pre><code>for i in range(5):
    print(i)</code></pre>
            <p><strong>Output:</strong> 0, 1, 2, 3, 4 — each on a new line.</p>
            <p><code>range(5)</code> starts at 0 and stops before 5.</p>
            <h2>While loops</h2>
            <pre><code>count = 1

while count <= 3:
    print(count)
    count = count + 1</code></pre>
            <p>This prints 1, 2 and 3. The counter increases so the condition eventually becomes False.</p>
            <h2>Watch out!</h2>
            <p>If a while-loop condition never becomes False, the loop can run indefinitely. Make sure your loop has a way to stop.</p>
        `,
        cards: [
            ["What is a loop?", "A structure that repeats instructions."],
            ["What does range(5) produce?", "The sequence 0, 1, 2, 3, 4."],
            ["When does a while loop stop?", "When its condition evaluates to False."],
            ["What is an infinite loop?", "A loop that never reaches its stopping condition."],
            ["How do you increase count by one?", "count = count + 1, or count += 1."]
        ],
        quiz: [
            {
                question: "How many times does for i in range(4) run?",
                options: ["3", "4", "5", "It never runs"],
                answer: 1,
                explanation: "range(4) produces 0, 1, 2 and 3: four values."
            },
            {
                question: "What values are produced by range(3)?",
                options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3 only"],
                answer: 1,
                explanation: "range(3) starts at 0 and stops before 3."
            },
            {
                question: "What can cause a while loop to run forever?",
                options: ["Using print()", "A condition that never becomes False", "Using a variable", "Using indentation"],
                answer: 1,
                explanation: "The loop continues as long as its condition remains True."
            }
        ]
    },
    {
        title: "Functions",
        icon: "⚙️",
        description: "Organise reusable code with parameters and return values.",
        lesson: `
            <h2>What is a function?</h2>
            <p>A function is a reusable block of code that performs a task.</p>
            <pre><code>def greet():
    print("Hello!")

greet()</code></pre>
            <p>Use <code>def</code> to define a function and parentheses to call it.</p>
            <h2>Parameters</h2>
            <pre><code>def greet(name):
    print("Hello", name)

greet("Alex")</code></pre>
            <p>The output is Hello Alex. The parameter name receives the value supplied when the function is called.</p>
            <h2>Return values</h2>
            <pre><code>def add(a, b):
    return a + b

result = add(3, 4)
print(result)</code></pre>
            <p><strong>Output:</strong> 7. return sends a result back to the code that called the function.</p>
        `,
        cards: [
            ["What keyword defines a function?", "def"],
            ["What is a parameter?", "A named input a function can receive."],
            ["What does return do?", "Sends a result back to the caller."],
            ["How do you call greet()?", "Write greet() to execute the function."],
            ["What is the difference between print and return?", "print displays output; return provides a value to the caller."]
        ],
        quiz: [
            {
                question: "Which keyword defines a Python function?",
                options: ["function", "define", "def", "fun"],
                answer: 2,
                explanation: "Python uses def to define a function."
            },
            {
                question: "What does return 5 do inside a function?",
                options: ["Displays 5 automatically", "Sends the value 5 back to the caller", "Repeats the function five times", "Creates a variable named 5"],
                answer: 1,
                explanation: "return supplies a value to the code that called the function."
            },
            {
                question: "In def add(a, b), what are a and b?",
                options: ["Loops", "Parameters", "Data types", "Modules"],
                answer: 1,
                explanation: "a and b are parameters that receive input values."
            }
        ]
    },
    {
        title: "Lists",
        icon: "🗂️",
        description: "Store collections of values and access individual items.",
        lesson: `
            <h2>What is a list?</h2>
            <p>A list stores multiple items in one variable. Lists use square brackets.</p>
            <pre><code>fruits = ["apple", "banana", "mango"]

print(fruits[0])
print(fruits[1])</code></pre>
            <p><strong>Output:</strong> apple, then banana.</p>
            <p>Python list indexing starts at 0, not 1.</p>
            <h2>Change and add items</h2>
            <pre><code>fruits[1] = "orange"
fruits.append("grape")
print(fruits)</code></pre>
            <p>Assignment changes an existing item. append() adds a new item to the end.</p>
            <h2>Loop through a list</h2>
            <pre><code>for fruit in fruits:
    print(fruit)</code></pre>
            <p>This prints each item, one at a time.</p>
        `,
        cards: [
            ["How do you create a list?", "Use square brackets, e.g. items = [1, 2, 3]."],
            ["What is the index of the first list item?", "0"],
            ["What does append() do?", "Adds an item to the end of a list."],
            ["How do you access the second item?", "Use list_name[1]."],
            ["Can list items be changed?", "Yes. Assign a new value to an existing index."]
        ],
        quiz: [
            {
                question: 'For fruits = ["apple", "banana"], what is fruits[0]?',
                options: ["banana", "apple", "0", "An error"],
                answer: 1,
                explanation: "List indexes start at 0, so fruits[0] is apple."
            },
            {
                question: "Which method adds an item to the end of a list?",
                options: ["insert_end()", "append()", "add_last()", "extend_one()"],
                answer: 1,
                explanation: "append() adds one item to the end of the list."
            },
            {
                question: "How many items are in [4, 8, 12]?",
                options: ["2", "3", "4", "12"],
                answer: 1,
                explanation: "The list contains three items: 4, 8 and 12."
            }
        ]
    }
];

// ------------------------------
// SAVED PROGRESS
// ------------------------------

const storageKey = "pythonPathProgressV1";

function freshProgress() {
    return {
        completed: [],
        scores: {},
        knownCards: {},
        lastModule: 0
    };
}

function loadProgress() {
    try {
        const saved = localStorage.getItem(storageKey);

        if (!saved) return freshProgress();

        const data = JSON.parse(saved);

        if (
            !data ||
            !Array.isArray(data.completed) ||
            typeof data.scores !== "object" ||
            typeof data.knownCards !== "object"
        ) {
            return freshProgress();
        }

        data.completed = data.completed.filter(index =>
            Number.isInteger(index) &&
            index >= 0 &&
            index < modules.length
        );

        return data;
    } catch (error) {
        return freshProgress();
    }
}

let progress = loadProgress();

let currentModule = 0;
let currentQuestion = 0;
let selectedOption = null;
let answerChecked = false;
let quizAnswers = [];

let currentCard = 0;
let cardRevealed = false;

const $ = id => document.getElementById(id);

function saveProgress() {
    try {
        localStorage.setItem(storageKey, JSON.stringify(progress));
        $("saveStatus").textContent = "✓ Progress saved on this device";
    } catch (error) {
        $("saveStatus").textContent =
            "Unable to save. Check browser storage.";
    }
}

// ------------------------------
// PAGE NAVIGATION
// ------------------------------

function showPage(pageId) {
    ["dashboard", "lessonPage", "quizPage", "flashcardPage"].forEach(id => {
        $(id).classList.toggle("hidden", id !== pageId);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDashboard() {
    const completedCount = progress.completed.length;
    const percent = Math.round(
        completedCount / modules.length * 100
    );

    $("progressPercent").textContent = percent + "%";
    $("progressBar").style.width = percent + "%";

    $("progressText").textContent =
        completedCount + " of " + modules.length + " modules completed";

    $("continueButton").textContent =
        completedCount === modules.length
            ? "Review your learning →"
            : completedCount === 0
                ? "Start learning →"
                : "Continue learning →";

    $("moduleList").innerHTML = modules.map((module, index) => {
        const done = progress.completed.includes(index);
        const score = progress.scores[index];
        const known = progress.knownCards[index] || [];

        return `
            <article class="module-card">
                <div class="module-top">
                    <div class="module-icon">${module.icon}</div>
                    <span class="completed-label">
                        ${done ? "✓ Completed" : "Module " + (index + 1)}
                    </span>
                </div>

                <h3>${module.title}</h3>
                <p>${module.description}</p>

                <p>
                    ${known.length} of ${module.cards.length} flashcards known
                    ${score !== undefined ? " · Best quiz: " + score + "%" : ""}
                </p>

                <button data-module="${index}">
                    ${done ? "Review module" : "Learn this module"} →
                </button>
            </article>
        `;
    }).join("");

    $("moduleList").querySelectorAll("button[data-module]").forEach(button => {
        button.addEventListener("click", () => {
            openModule(Number(button.dataset.module));
        });
    });
}

function openModule(index) {
    if (!Number.isInteger(index) || index < 0 || index >= modules.length) {
        return;
    }

    currentModule = index;
    progress.lastModule = index;
    saveProgress();

    const module = modules[index];

    $("lessonNumber").textContent =
        "MODULE " + (index + 1) + " OF " + modules.length;

    $("lessonTitle").textContent = module.title;
    $("lessonDescription").textContent = module.description;
    $("lessonContent").innerHTML = module.lesson;

    $("quizButton").textContent =
        progress.completed.includes(index)
            ? "Review module quiz →"
            : "Take the module quiz →";

    showPage("lessonPage");
}

// ------------------------------
// QUIZZES
// ------------------------------

function openQuiz() {
    currentQuestion = 0;
    selectedOption = null;
    answerChecked = false;
    quizAnswers = [];

    $("quizTitle").textContent = modules[currentModule].title;

    renderQuestion();
    showPage("quizPage");
}

function renderQuestion() {
    const questions = modules[currentModule].quiz;
    const question = questions[currentQuestion];

    selectedOption = null;
    answerChecked = false;

    $("quizCounter").textContent =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    $("quizQuestion").textContent = question.question;
    $("quizFeedback").textContent = "";
    $("quizFeedback").style.color = "";

    $("nextQuestionButton").disabled = true;
    $("nextQuestionButton").textContent = "Choose an answer";

    $("quizOptions").innerHTML = question.options.map((option, index) => `
        <button class="option-button" data-option="${index}">
            ${String.fromCharCode(65 + index)}. ${option}
        </button>
    `).join("");

    $("quizOptions").querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            if (answerChecked) return;

            selectedOption = Number(button.dataset.option);

            $("quizOptions").querySelectorAll("button").forEach(item => {
                item.classList.toggle("selected", item === button);
            });

            $("nextQuestionButton").disabled = false;
            $("nextQuestionButton").textContent = "Check answer";
        });
    });
}

function handleQuizButton() {
    const questions = modules[currentModule].quiz;
    const question = questions[currentQuestion];

    if (!answerChecked) {
        if (selectedOption === null) return;

        answerChecked = true;
        quizAnswers[currentQuestion] = selectedOption;

        const correct = selectedOption === question.answer;

        $("quizFeedback").textContent = correct
            ? "✓ Correct! " + question.explanation
            : "Not quite. " + question.explanation;

        $("quizFeedback").style.color = correct
            ? "#16794b"
            : "#b04444";

        $("quizOptions").querySelectorAll("button").forEach((button, index) => {
            button.disabled = true;

            if (index === question.answer) {
                button.style.borderColor = "#16794b";
                button.style.background = "#e2f5e9";
            } else if (index === selectedOption) {
                button.style.borderColor = "#c75b5b";
            }
        });

        $("nextQuestionButton").textContent =
            currentQuestion === questions.length - 1
                ? "See my result →"
                : "Next question →";

        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
        return;
    }

    const correctCount = questions.filter((item, index) =>
        item.answer === quizAnswers[index]
    ).length;

    finishQuiz(correctCount, questions.length);
}

function finishQuiz(correctCount, total) {
    const score = Math.round(correctCount / total * 100);
    const passed = score >= 70;

    progress.scores[currentModule] = Math.max(
        progress.scores[currentModule] || 0,
        score
    );

    if (passed && !progress.completed.includes(currentModule)) {
        progress.completed.push(currentModule);
    }

    saveProgress();
    renderDashboard();

    $("quizQuestion").textContent = passed
        ? "🎉 Module passed!"
        : "💪 Keep practising!";

    $("quizCounter").textContent =
        "Your score: " + correctCount + " / " +
        total + " (" + score + "%)";

    $("quizOptions").innerHTML = `
        <p>
            ${passed
                ? "Great work! You scored at least 70%, so this module is marked complete."
                : "Review the lesson or flashcards, then try the quiz again."}
        </p>
        <p>
            ${progress.completed.length} of ${modules.length} modules completed.
        </p>
    `;

    $("quizFeedback").textContent = passed
        ? "Your progress has been saved on this device."
        : "You need 70% to complete this module.";

    $("nextQuestionButton").textContent =
        passed && currentModule < modules.length - 1
            ? "Next module →"
            : "Back to lesson";

    // Replace the quiz handler with the result-screen action.
    $("nextQuestionButton").onclick = () => {
        $("nextQuestionButton").onclick = handleQuizButton;

        if (passed && currentModule < modules.length - 1) {
            openModule(currentModule + 1);
        } else {
            openModule(currentModule);
        }
    };
}

// ------------------------------
// FLASHCARDS
// ------------------------------

function openFlashcards() {
    currentCard = 0;
    cardRevealed = false;

    renderCard();
    showPage("flashcardPage");
}

function renderCard() {
    const cards = modules[currentModule].cards;
    const card = cards[currentCard];
    const known = progress.knownCards[currentModule] || [];

    $("cardCounter").textContent =
        "Card " + (currentCard + 1) + " of " + cards.length +
        " · " + known.length + " marked known";

    $("cardLabel").textContent = cardRevealed ? "ANSWER" : "QUESTION";
    $("cardText").textContent = cardRevealed ? card[1] : card[0];

    $("cardHint").textContent = cardRevealed
        ? "Try to explain the answer in your own words."
        : "Click the card to reveal the answer";

    $("cardFeedback").textContent = "";
}

$("flashcard").addEventListener("click", () => {
    cardRevealed = !cardRevealed;
    renderCard();
});

function moveToNextCard() {
    const total = modules[currentModule].cards.length;

    saveProgress();
    renderDashboard();

    if (currentCard < total - 1) {
        currentCard++;
        cardRevealed = false;
        renderCard();
        return;
    }

    $("cardFeedback").textContent =
        "🎉 You've reviewed every flashcard in this module!";

    $("cardLabel").textContent = "REVIEW COMPLETE";
    $("cardText").textContent = "Well done! 🎉";
    $("cardHint").textContent =
        "Click either button below to continue practising.";

    $("cardCounter").textContent =
        (progress.knownCards[currentModule] || []).length +
        " of " + total + " cards marked known.";

    currentCard = 0;
    cardRevealed = false;
}

$("knownCardButton").addEventListener("click", () => {
    if (!cardRevealed) {
        $("cardFeedback").textContent =
            "Reveal the answer first before marking it known.";
        return;
    }

    if (!progress.knownCards[currentModule]) {
        progress.knownCards[currentModule] = [];
    }

    if (!progress.knownCards[currentModule].includes(currentCard)) {
        progress.knownCards[currentModule].push(currentCard);
    }

    moveToNextCard();
});

$("unknownCardButton").addEventListener("click", () => {
    if (!cardRevealed) {
        cardRevealed = true;
        renderCard();
        return;
    }

    const known = progress.knownCards[currentModule] || [];

    progress.knownCards[currentModule] =
        known.filter(index => index !== currentCard);

    moveToNextCard();
});

// ------------------------------
// BUTTONS AND INITIAL SETUP
// ------------------------------

$("continueButton").addEventListener("click", () => {
    const next = modules.findIndex((module, index) =>
        !progress.completed.includes(index)
    );

    openModule(next === -1 ? progress.lastModule || 0 : next);
});

$("homeLink").addEventListener("click", event => {
    event.preventDefault();
    renderDashboard();
    showPage("dashboard");
});

$("dashboardButton").addEventListener("click", () => {
    renderDashboard();
    showPage("dashboard");
});

$("lessonBackButton").addEventListener("click", () => {
    openModule(currentModule);
});

$("flashcardBackButton").addEventListener("click", () => {
    openModule(currentModule);
});

$("flashcardButton").addEventListener("click", openFlashcards);
$("quizButton").addEventListener("click", openQuiz);

$("nextQuestionButton").addEventListener("click", handleQuizButton);

renderDashboard();
showPage("dashboard");
saveProgress();
