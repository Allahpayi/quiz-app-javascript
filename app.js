const quizData = [
    {
        question: "Qubadlı nə vaxt işğaldan azad olundu?",
        a: "25 Oktyabr 2020",
        b: "30 Sentyabr 2020",
        c: "23 Oktyabr 2020",
        d: "1 Noyabr 2020",
        correct: "a",
    },
    {
        question: "Zəngilan nə vaxt işğaldan azad olundu?",
        a: "14 Oktyabr 2020",
        b: "27 Sentyabr 2020",
        c: "20 Oktyabr 2020",
        d: "8 Noyabr 2020",
        correct: "c",
    },
    {
        question: "Füzuli nə vaxt işğaldan azad olundu?",
        a: "4 Oktyabr 2020",
        b: "9 Noyabr 2020",
        c: "17 Oktyabr 2020",
        d: "4 Oktyabr 2020",
        correct: "c",
    },
    {
        question: "Cəbrayıl nə vaxt işğaldan azad olundu?",
        a: "4 Oktyabr 2020",
        b: "27 Sentyabr 2020",
        c: "12 Oktyabr 2020",
        d: "3 Noyabr 2020",
        correct: "a",
    },
    {
        question: "Şuşa nə vaxt işğaldan azad olundu?",
        a: "22 Oktyabr 2020",
        b: "9 Noyabr 2020",
        c: "11 Oktyabr 2020",
        d: "8 Noyabr 2020",
        correct: "d",
    },
];

const questionEl = document.getElementById("question");
const answers = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    diselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected() {

    let answer = undefined;

    answers.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }

    });
    return answer;
}
function diselectAnswer() {
    answers.forEach((answerEl) => {
        answerEl.checked = false;

    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;

        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();

        }
        else {
            quiz.innerHTML = `<h2>Sizin nətcəniz: ${score}/${quizData.length} ${score == quizData.length ? "Super!!!" : ""}</h2>
            <button onclick="location.reload()">Yenidən Başla</button>
            `;
        };
    }
});


