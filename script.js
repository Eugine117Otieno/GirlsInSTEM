
/* ==============================
   MOBILE NAVIGATION
================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


/* ==============================
   EXPLORE STEM FIELDS
================================= */

function exploreField(field) {
    const information = {
        Science: "Science helps us understand life, the environment, matter, energy and the universe. You could become a scientist, doctor, biologist, chemist or astronomer. Start by asking questions and experimenting!",
        
        Technology: "Technology is where creativity meets computers and innovation. You could become a software developer, AI engineer, cybersecurity expert, robotics programmer or data scientist. Try coding your first website!",
        
        Engineering: "Engineering turns ideas into reality! Engineers design bridges, machines, robots, buildings and solutions to everyday problems. You could become a civil, electrical, mechanical, aerospace or robotics engineer.",
        
        Mathematics: "Mathematics is the language of problem-solving. It powers science, technology, finance, AI and engineering. You could become a mathematician, statistician, actuary, data analyst or financial analyst."
    };

    alert(information[field]);
}


/* ==============================
   CAREER FINDER
================================= */

function findCareer() {
    const interest = document.getElementById("interest").value;
    const result = document.getElementById("careerResult");

    const careers = {
        building: {
            title: "🏗️ Future Engineer!",
            text: "You may enjoy Civil Engineering, Architecture, Robotics, Mechanical Engineering or Product Design. You are a builder and problem-solver!"
        },

        computers: {
            title: "💻 Future Tech Leader!",
            text: "Explore Software Engineering, AI, Cybersecurity, Web Development, Computer Science or Data Science. The digital world needs your creativity!"
        },

        nature: {
            title: "🌿 Future Scientist!",
            text: "Explore Biology, Medicine, Environmental Science, Veterinary Science, Genetics or Marine Science. You can help protect life and our planet!"
        },

        numbers: {
            title: "🧠 Future Mathematics Genius!",
            text: "Explore Mathematics, Statistics, Data Science, Economics, Actuarial Science or AI. Your ability to think logically can solve big challenges!"
        },

        space: {
            title: "🚀 Future Space Explorer!",
            text: "Explore Astronomy, Astrophysics, Aerospace Engineering, Planetary Science or Satellite Technology. The universe is waiting for your discoveries!"
        },

        helping: {
            title: "❤️ Future World Changer!",
            text: "Explore Medicine, Biomedical Engineering, Nursing Science, Public Health, Biotechnology or Health Technology. You can use STEM to improve people's lives!"
        }
    };

    if (!interest) {
        result.innerHTML = "⚠️ Please choose an interest first.";
        result.classList.add("show");
        return;
    }

    const career = careers[interest];

    result.innerHTML = `
        <h3>${career.title}</h3>
        <p>${career.text}</p>
        <br>
        <strong>🌟 Your mission:</strong>
        Start learning, stay curious and never stop believing in yourself!
    `;

    result.classList.add("show");
}


/* ==============================
   MOTIVATIONAL QUOTES
================================= */

const motivationalQuotes = [
    "You don't need permission to be brilliant. 💡",
    "Your ideas could change the world. 🌍",
    "A girl with a dream can become an engineer, scientist or inventor. 🚀",
    "Mistakes are proof that you are trying. Keep learning! 💪",
    "You belong in STEM. Your voice, your ideas and your talent matter. 💖",
    "Be curious. Be brave. Be unstoppable. ✨",
    "The future is not something you wait for. It is something you create. 🌈",
    "Dream beyond limits. Build beyond expectations. 🌟",
    "You could be the next great inventor. Start today! 🧪",
    "Girls can code, calculate, design, discover and lead. 👩🏽‍💻"
];

function newMotivation() {
    const text = document.getElementById("motivationText");

    let randomIndex = Math.floor(Math.random() * motivationalQuotes.length);

    text.textContent = `"${motivationalQuotes[randomIndex]}"`;

    text.style.animation = "none";
    void text.offsetWidth;
    text.style.animation = "appear 0.4s ease";
}


/* ==============================
   STEM QUIZ
================================= */

const questions = [
    {
        question: "What does STEM stand for?",
        answers: [
            "Science, Technology, Engineering and Mathematics",
            "Sports, Training, Energy and Medicine",
            "Social Technology and Media",
            "Science, Teaching and Education"
        ],
        correct: 0,
        explanation: "STEM stands for Science, Technology, Engineering and Mathematics."
    },

    {
        question: "Who was the first Black woman to travel into space?",
        answers: [
            "Katherine Johnson",
            "Mae Jemison",
            "Wangari Maathai",
            "Ada Lovelace"
        ],
        correct: 1,
        explanation: "Mae Jemison became the first Black woman in space in 1992."
    },

    {
        question: "Which STEM career focuses on creating computer programs?",
        answers: [
            "Botanist",
            "Geologist",
            "Software Developer",
            "Oceanographer"
        ],
        correct: 2,
        explanation: "Software developers build programs, applications and digital systems."
    },

    {
        question: "Which engineer designs machines and mechanical systems?",
        answers: [
            "Mechanical Engineer",
            "Marine Biologist",
            "Chemist",
            "Mathematician"
        ],
        correct: 0,
        explanation: "Mechanical engineers design and develop machines and mechanical systems."
    },

    {
        question: "Can girls become successful scientists, engineers and technology leaders?",
        answers: [
            "No, STEM is only for boys",
            "Only if they are perfect at mathematics",
            "Yes! Girls can succeed in every STEM field",
            "Only when they are adults"
        ],
        correct: 2,
        explanation: "Absolutely! Girls can succeed in every STEM career through curiosity, learning, practice and determination."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;

    const question = questions[currentQuestion];

    document.getElementById("question").textContent = question.question;
    document.getElementById("quizFeedback").textContent = "";
    document.getElementById("quizProgress").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";

    document.getElementById("nextBtn").disabled = true;

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer-btn";
        button.textContent = answer;

        button.addEventListener("click", () => selectAnswer(index, button));

        answersContainer.appendChild(button);
    });
}

function selectAnswer(selected, button) {
    if (answered) return;

    answered = true;

    const question = questions[currentQuestion];
    const allButtons = document.querySelectorAll(".answer-btn");
    const feedback = document.getElementById("quizFeedback");

    allButtons.forEach(btn => btn.disabled = true);

    if (selected === question.correct) {
        score++;
        button.classList.add("correct");
        feedback.textContent = "🎉 Correct! " + question.explanation;
        feedback.style.color = "#159957";
    } else {
        button.classList.add("wrong");
        allButtons[question.correct].classList.add("correct");

        feedback.textContent = "💡 Not quite! " + question.explanation;
        feedback.style.color = "#e04b69";
    }

    document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const quizBox = document.querySelector(".quiz-box");

    let message = "";

    if (score === questions.length) {
        message = "STEM Superstar! You got everything correct! 👑";
    } else if (score >= 3) {
        message = "Amazing work! You have a brilliant STEM mind! 🌟";
    } else {
        message = "Great effort! Every great scientist starts by learning. Keep growing! 💪";
    }

    quizBox.innerHTML = `
        <div style="text-align:center;padding:20px;">
            <div style="font-size:70px;">${score === questions.length ? "🏆" : "🌟"}</div>
            <h2>Quiz Complete!</h2>
            <h3>You scored ${score} out of ${questions.length}</h3>
            <p style="margin:20px 0;color:#5d5874;">${message}</p>
            <button class="btn primary" onclick="restartQuiz()">Try Again 🔄</button>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    document.querySelector(".quiz-box").innerHTML = `
        <h3 id="question"></h3>
        <div id="answers" class="answers"></div>
        <p id="quizFeedback"></p>
        <div class="quiz-bottom">
            <span id="quizProgress"></span>
            <button id="nextBtn" class="btn primary" onclick="nextQuestion()" disabled>
                Next Question →
            </button>
        </div>
    `;

    loadQuestion();
}

/* START QUIZ */
loadQuestion();
