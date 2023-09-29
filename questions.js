// Aqui se hicieron las preguntas
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["London", "Berlin", "Madrid", "Paris"],
        correctAnswer: "Paris"
    },
    {
        question: "How many days are in a week?",
        answers: ["6", "7", "8", "5"],
        correctAnswer: "7"
    },
    // Agregar más preguntas aquí
    {
        question: "How many fingers do you have in your hand?",
        answers: ["5", "4", "7", "8"],
        correctAnswer: "5"
    },

    {
        question: "Which of these is the number of days in two weeks?",
        answers: ["8", "12", "7", "14"],
        correctAnswer: "14"
    },

    {
        question: "How many minutes are there in a quarter of an hour?",
        answers: ["30", "20", "14", "15"],
        correctAnswer: "15"
    },

    {
        question: "What is the opposite of 'happy'?",
        answers: ["Sad", "Excited", "Joyful", "Content"],
        correctAnswer: "Sad"
    },
    {
        question: "Which of these is a synonym for 'beautiful'?",
        answers: ["Ugly", "Gorgeous", "Plain", "Attractive"],
        correctAnswer: "Gorgeous"
    },
    {
        question: "Complete the following sentence: 'She _____ to the store yesterday.'",
        answers: ["Going", "Gone", "Goes", "Went"],
        correctAnswer: "Went"
    },
    {
        question: "Which of these is a past tense verb for 'sing'?",
        answers: ["Sung", "Sing", "Sang", "Singed"],
        correctAnswer: "Sang"
    },
    {
        question: "What is the plural form of 'child'?",
        answers: ["Childs", "Children", "Childes", "Childs"],
        correctAnswer: "Children"
    }
    

];

// Aqui hice una funcion para crear el cuestionario
function createQuiz() {
    const quizContainer = document.getElementById("quiz-container");

    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <p><strong>Pregunta ${index + 1}:</strong> ${question.question}</p>
            <ul>
                ${question.answers.map(answer => `
                    <li>
                        <input type="radio" name="question${index}" value="${answer}" id="q${index}a${question.answers.indexOf(answer)}">
                        <label for="q${index}a${question.answers.indexOf(answer)}">${answer}</label>
                    </li>
                `).join("")}
            </ul>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

// Y aqui se tuvo que crear otra funcion para evaluar las respuestas
function evaluateAnswers() {
    const resultElement = document.getElementById("result");
    let correctAnswers = 0;

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
            correctAnswers++;
        }
    });

    // Esta parte calcula el nivel de ingles de la persona
    let level = "";
    if (correctAnswers >= 7) {
        level = "B1";
    } else if (correctAnswers >= 4) {
        level = "A2";
    } else {
        level = "A1";
    }

    resultElement.textContent = level;
}


document.getElementById("submit-button").addEventListener("click", evaluateAnswers);


createQuiz();
