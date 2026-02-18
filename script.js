// ===== DATA STRUCTURE =====
const quizData = {
    Math: {
        'Grade 5': {
            'Fractions': [
                {
                    question: 'What is 1/2 + 1/4?',
                    options: ['1/6', '2/6', '3/4', '1/3'],
                    correct: 2
                },
                {
                    question: 'Which fraction is equivalent to 2/4?',
                    options: ['1/2', '3/6', '4/8', 'All of the above'],
                    correct: 3
                },
                {
                    question: 'What is 3/5 - 1/5?',
                    options: ['2/5', '2/0', '4/5', '1/5'],
                    correct: 0
                },
                {
                    question: 'Which is the largest fraction?',
                    options: ['1/2', '1/3', '1/4', '1/5'],
                    correct: 0
                },
                {
                    question: 'What is 2/3 × 3?',
                    options: ['6/3', '2', '6/9', '5/3'],
                    correct: 1
                },
                {
                    question: 'Convert 5/10 to simplest form:',
                    options: ['1/2', '5/5', '10/20', '2/4'],
                    correct: 0
                },
                {
                    question: 'What is 1/3 + 1/6?',
                    options: ['2/9', '1/2', '2/6', '1/9'],
                    correct: 1
                },
                {
                    question: '4/8 is equal to:',
                    options: ['1/4', '1/2', '2/3', '3/4'],
                    correct: 1
                },
                {
                    question: 'What is 5/6 - 1/3?',
                    options: ['4/3', '1/2', '2/3', '1/3'],
                    correct: 1
                },
                {
                    question: 'Which fraction is closest to 1?',
                    options: ['7/8', '1/2', '3/4', '2/3'],
                    correct: 0
                }
            ],
            'Decimals': [
                {
                    question: 'What is 0.5 + 0.3?',
                    options: ['0.8', '0.53', '8.0', '0.15'],
                    correct: 0
                },
                {
                    question: 'Convert 3/4 to a decimal:',
                    options: ['0.34', '0.75', '0.43', '0.25'],
                    correct: 1
                },
                {
                    question: 'What is 1.2 × 10?',
                    options: ['1.2', '12', '120', '0.12'],
                    correct: 1
                },
                {
                    question: 'Round 4.67 to the nearest tenth:',
                    options: ['4.6', '4.7', '5.0', '4.0'],
                    correct: 1
                },
                {
                    question: 'What is 0.9 - 0.45?',
                    options: ['0.45', '0.55', '1.35', '0.54'],
                    correct: 0
                },
                {
                    question: 'Which is larger: 0.6 or 0.59?',
                    options: ['0.59', '0.6', 'They are equal', 'Cannot determine'],
                    correct: 1
                },
                {
                    question: 'What is 2.5 ÷ 5?',
                    options: ['0.5', '5.0', '12.5', '0.25'],
                    correct: 0
                },
                {
                    question: 'Convert 0.25 to a fraction:',
                    options: ['1/2', '1/4', '2/5', '1/3'],
                    correct: 1
                },
                {
                    question: 'What is 0.1 + 0.01?',
                    options: ['0.11', '0.2', '1.1', '0.011'],
                    correct: 0
                },
                {
                    question: 'Round 3.14159 to 2 decimal places:',
                    options: ['3.14', '3.15', '3.1', '3.2'],
                    correct: 0
                }
            ]
        },
        'Grade 6': {
            'Ratios': [
                {
                    question: 'Simplify the ratio 12:8',
                    options: ['3:2', '6:4', '2:3', '4:3'],
                    correct: 0
                },
                {
                    question: 'If 3 apples cost $6, how much do 5 apples cost?',
                    options: ['$8', '$10', '$12', '$15'],
                    correct: 1
                },
                {
                    question: 'What is the ratio of 1 hour to 30 minutes?',
                    options: ['1:30', '2:1', '1:2', '60:30'],
                    correct: 1
                },
                {
                    question: 'In a class of 30 students, 18 are girls. What is the ratio of boys to girls?',
                    options: ['18:12', '2:3', '3:2', '12:18'],
                    correct: 1
                },
                {
                    question: 'If the ratio of cats to dogs is 3:4 and there are 12 cats, how many dogs are there?',
                    options: ['9', '12', '16', '20'],
                    correct: 2
                },
                {
                    question: 'Simplify 25:100',
                    options: ['1:4', '1:5', '5:20', '2:8'],
                    correct: 0
                },
                {
                    question: 'A recipe calls for flour and sugar in the ratio 5:2. If you use 10 cups of flour, how much sugar?',
                    options: ['2 cups', '4 cups', '5 cups', '20 cups'],
                    correct: 1
                },
                {
                    question: 'What percentage is 3:12 equivalent to?',
                    options: ['25%', '30%', '33%', '36%'],
                    correct: 0
                },
                {
                    question: 'The ratio of red to blue marbles is 7:5. If there are 35 red marbles, how many blue?',
                    options: ['20', '25', '30', '40'],
                    correct: 1
                },
                {
                    question: 'Which ratio is equivalent to 4:6?',
                    options: ['2:3', '3:4', '6:8', '8:10'],
                    correct: 0
                }
            ]
        }
    },
    Biology: {
        'Grade 7': {
            'Cells': [
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
                    correct: 1
                },
                {
                    question: 'Which organelle controls what enters and leaves the cell?',
                    options: ['Cell wall', 'Cell membrane', 'Cytoplasm', 'Vacuole'],
                    correct: 1
                },
                {
                    question: 'What do plant cells have that animal cells do not?',
                    options: ['Nucleus', 'Cell wall', 'Mitochondria', 'Ribosomes'],
                    correct: 1
                },
                {
                    question: 'Where is genetic material (DNA) stored in the cell?',
                    options: ['Cytoplasm', 'Nucleus', 'Ribosome', 'Golgi apparatus'],
                    correct: 1
                },
                {
                    question: 'What is the function of ribosomes?',
                    options: ['Energy production', 'Protein synthesis', 'Photosynthesis', 'Waste removal'],
                    correct: 1
                },
                {
                    question: 'Which organelle is responsible for photosynthesis?',
                    options: ['Mitochondria', 'Chloroplast', 'Nucleus', 'Vacuole'],
                    correct: 1
                },
                {
                    question: 'What is the jelly-like substance inside cells called?',
                    options: ['Cytoplasm', 'Nucleus', 'Membrane', 'Plasma'],
                    correct: 0
                },
                {
                    question: 'Which type of cell has a cell wall?',
                    options: ['Animal cell', 'Plant cell', 'Both', 'Neither'],
                    correct: 1
                },
                {
                    question: 'What packages and transports proteins in the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Golgi apparatus', 'Endoplasmic reticulum'],
                    correct: 2
                },
                {
                    question: 'The cell membrane is described as:',
                    options: ['Rigid', 'Semi-permeable', 'Impermeable', 'Fully permeable'],
                    correct: 1
                }
            ]
        }
    },
    Physics: {
        'Grade 8': {
            'Motion': [
                {
                    question: 'What is the SI unit of velocity?',
                    options: ['m/s²', 'm/s', 'km/h', 'mph'],
                    correct: 1
                },
                {
                    question: 'Speed with direction is called:',
                    options: ['Acceleration', 'Velocity', 'Distance', 'Displacement'],
                    correct: 1
                },
                {
                    question: 'What is the formula for speed?',
                    options: ['Distance ÷ Time', 'Time ÷ Distance', 'Distance × Time', 'Force × Mass'],
                    correct: 0
                },
                {
                    question: 'An object at rest has:',
                    options: ['Negative velocity', 'Zero velocity', 'Positive velocity', 'Infinite velocity'],
                    correct: 1
                },
                {
                    question: 'Acceleration is the rate of change of:',
                    options: ['Distance', 'Displacement', 'Velocity', 'Speed'],
                    correct: 2
                },
                {
                    question: 'If a car travels 100 km in 2 hours, what is its average speed?',
                    options: ['50 km/h', '100 km/h', '200 km/h', '25 km/h'],
                    correct: 0
                },
                {
                    question: 'Negative acceleration is also called:',
                    options: ['Speed', 'Velocity', 'Deceleration', 'Distance'],
                    correct: 2
                },
                {
                    question: 'Distance in a specific direction is:',
                    options: ['Speed', 'Velocity', 'Displacement', 'Acceleration'],
                    correct: 2
                },
                {
                    question: "Newton's first law is also called:",
                    options: ['Law of acceleration', 'Law of inertia', 'Law of action-reaction', 'Law of gravity'],
                    correct: 1
                },
                {
                    question: 'The slope of a distance-time graph represents:',
                    options: ['Acceleration', 'Velocity', 'Distance', 'Time'],
                    correct: 1
                }
            ]
        }
    }
};

// ===== STATE MANAGEMENT =====
let state = {
    currentPage: 'home',
    selectedSubject: '',
    selectedGrade: '',
    selectedUnit: '',
    timeGoal: 0,
    currentQuestionIndex: 0,
    userAnswers: [],
    answeredQuestions: new Set(),
    score: 0,
    startTime: null,
    endTime: null,
    timerInterval: null,
    timeRemaining: 0,
    currentTheme: 'light',
    questions: []
};

// ===== PAGE NAVIGATION =====
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`${pageName}-page`).classList.add('active');
    state.currentPage = pageName;
}

// ===== HOME PAGE LOGIC =====
function initializeHomePage() {
    const subjectSelect = document.getElementById('subject-select');
    const gradeSelect = document.getElementById('grade-select');
    const unitSelect = document.getElementById('unit-select');
    const proceedBtn = document.getElementById('proceed-btn');
    const gradeGroup = document.getElementById('grade-group');
    const unitGroup = document.getElementById('unit-group');

    // Populate subjects
    Object.keys(quizData).forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });

    // Subject selection
    subjectSelect.addEventListener('change', (e) => {
        state.selectedSubject = e.target.value;
        gradeSelect.innerHTML = '<option value="">Choose a grade</option>';
        unitSelect.innerHTML = '<option value="">Choose a unit</option>';
        state.selectedGrade = '';
        state.selectedUnit = '';
        unitGroup.style.display = 'none';
        
        if (state.selectedSubject) {
            const grades = Object.keys(quizData[state.selectedSubject]);
            grades.forEach(grade => {
                const option = document.createElement('option');
                option.value = grade;
                option.textContent = grade;
                gradeSelect.appendChild(option);
            });
            gradeGroup.style.display = 'block';
        } else {
            gradeGroup.style.display = 'none';
        }
        
        checkHomeFormComplete();
    });

    // Grade selection
    gradeSelect.addEventListener('change', (e) => {
        state.selectedGrade = e.target.value;
        unitSelect.innerHTML = '<option value="">Choose a unit</option>';
        state.selectedUnit = '';
        
        if (state.selectedGrade) {
            const units = Object.keys(quizData[state.selectedSubject][state.selectedGrade]);
            units.forEach(unit => {
                const option = document.createElement('option');
                option.value = unit;
                option.textContent = unit;
                unitSelect.appendChild(option);
            });
            unitGroup.style.display = 'block';
        } else {
            unitGroup.style.display = 'none';
        }
        
        checkHomeFormComplete();
    });

    // Unit selection
    unitSelect.addEventListener('change', (e) => {
        state.selectedUnit = e.target.value;
        checkHomeFormComplete();
    });

    function checkHomeFormComplete() {
        proceedBtn.disabled = !(state.selectedSubject && state.selectedGrade && state.selectedUnit);
    }

    proceedBtn.addEventListener('click', () => {
        showPage('setup');
    });
}

// ===== SETUP PAGE LOGIC =====
function initializeSetupPage() {
    const timeInput = document.getElementById('time-input');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const backBtn = document.getElementById('back-to-home-btn');
    const errorMsg = document.getElementById('time-error');

    timeInput.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        errorMsg.textContent = '';
        
        if (value < 1) {
            errorMsg.textContent = 'Minimum 1 minute required';
            startQuizBtn.disabled = true;
        } else if (value > 180) {
            errorMsg.textContent = 'Maximum 180 minutes allowed';
            startQuizBtn.disabled = true;
        } else if (value) {
            state.timeGoal = value;
            startQuizBtn.disabled = false;
        } else {
            startQuizBtn.disabled = true;
        }
    });

    startQuizBtn.addEventListener('click', () => {
        startQuiz();
    });

    backBtn.addEventListener('click', () => {
        showPage('home');
    });
}

// ===== QUIZ LOGIC =====
function startQuiz() {
    // Get questions for selected subject/grade/unit
    state.questions = quizData[state.selectedSubject][state.selectedGrade][state.selectedUnit];
    state.currentQuestionIndex = 0;
    state.userAnswers = new Array(state.questions.length).fill(null);
    state.answeredQuestions = new Set();
    state.score = 0;
    state.startTime = Date.now();
    state.timeRemaining = state.timeGoal * 60; // Convert to seconds

    showPage('quiz');
    displayQuestion();
    startTimer();
    updateProgress();
}

function displayQuestion() {
    const question = state.questions[state.currentQuestionIndex];
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const questionCounter = document.getElementById('question-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Update question display
    questionNumber.textContent = `Question ${state.currentQuestionIndex + 1} of ${state.questions.length}`;
    questionText.textContent = question.question;
    questionCounter.textContent = `${state.currentQuestionIndex + 1} / ${state.questions.length}`;

    // Clear and populate answers
    answersContainer.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    
    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.dataset.index = index;
        
        // Check if this question was already answered
        const isAnswered = state.answeredQuestions.has(state.currentQuestionIndex);
        const userAnswer = state.userAnswers[state.currentQuestionIndex];
        
        if (isAnswered) {
            answerDiv.classList.add('disabled');
            // Show correct answer in green
            if (index === question.correct) {
                answerDiv.classList.add('correct');
            }
            // Show user's wrong answer in red
            if (userAnswer === index && index !== question.correct) {
                answerDiv.classList.add('incorrect');
            }
        } else if (userAnswer === index) {
            answerDiv.classList.add('selected');
        }
        
        answerDiv.innerHTML = `
            <div class="answer-label">${labels[index]}</div>
            <div class="answer-text">${option}</div>
        `;
        
        if (!isAnswered) {
            answerDiv.addEventListener('click', () => selectAnswer(index));
        }
        
        answersContainer.appendChild(answerDiv);
    });

    // Update navigation buttons
    prevBtn.disabled = state.currentQuestionIndex === 0;
    
    // Change Next to Submit on last question
    if (state.currentQuestionIndex === state.questions.length - 1) {
        nextBtn.textContent = 'Submit Quiz';
        nextBtn.className = 'btn btn-primary';
    } else {
        nextBtn.textContent = 'Next';
        nextBtn.className = 'btn btn-primary';
    }
}

function selectAnswer(selectedIndex) {
    const question = state.questions[state.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Store the answer
    state.userAnswers[state.currentQuestionIndex] = selectedIndex;
    state.answeredQuestions.add(state.currentQuestionIndex);
    
    if (isCorrect) {
        state.score++;
    }
    
    // Update UI to show immediate feedback
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => {
        const index = parseInt(option.dataset.index);
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
        
        // Highlight correct answer in green
        if (index === question.correct) {
            option.classList.add('correct');
        }
        
        // Highlight selected wrong answer in red
        if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    updateProgress();
}

function updateProgress() {
    const progress = ((state.currentQuestionIndex + 1) / state.questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function startTimer() {
    const timerDisplay = document.getElementById('timer-display');
    const timerElement = document.getElementById('timer');
    
    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        
        const minutes = Math.floor(state.timeRemaining / 60);
        const seconds = state.timeRemaining % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Warning when less than 1 minute
        if (state.timeRemaining <= 60) {
            timerElement.classList.add('warning');
        }
        
        // Time's up
        if (state.timeRemaining <= 0) {
            clearInterval(state.timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(state.timerInterval);
    state.endTime = Date.now();
    showResults();
}

// ===== NAVIGATION =====
function initializeQuizNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.addEventListener('click', () => {
        if (state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
            displayQuestion();
            updateProgress();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (state.currentQuestionIndex < state.questions.length - 1) {
            state.currentQuestionIndex++;
            displayQuestion();
            updateProgress();
        } else {
            endQuiz();
        }
    });
}

// ===== RESULTS =====
function showResults() {
    const scoreDisplay = document.getElementById('score-display');
    const percentageDisplay = document.getElementById('percentage-display');
    const timeSpentDisplay = document.getElementById('time-spent-display');
    const feedbackMessage = document.getElementById('feedback-message');

    const totalQuestions = state.questions.length;
    const percentage = Math.round((state.score / totalQuestions) * 100);
    const timeSpent = state.endTime - state.startTime;
    const minutes = Math.floor(timeSpent / 60000);
    const seconds = Math.floor((timeSpent % 60000) / 1000);

    scoreDisplay.textContent = `${state.score}/${totalQuestions}`;
    percentageDisplay.textContent = `${percentage}%`;
    timeSpentDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Feedback message
    if (percentage >= 90) {
        feedbackMessage.textContent = 'Excellent work! You have mastered this topic! 🌟';
    } else if (percentage >= 70) {
        feedbackMessage.textContent = 'Great job! You have a solid understanding! 👍';
    } else if (percentage >= 50) {
        feedbackMessage.textContent = 'Good effort! Keep practicing to improve! 📚';
    } else {
        feedbackMessage.textContent = 'Keep studying and try again. You can do it! 💪';
    }

    showPage('results');
}

function initializeResults() {
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');

    restartBtn.addEventListener('click', () => {
        startQuiz();
    });

    homeBtn.addEventListener('click', () => {
        showPage('home');
        // Reset selections
        document.getElementById('subject-select').value = '';
        document.getElementById('grade-select').value = '';
        document.getElementById('unit-select').value = '';
        document.getElementById('time-input').value = '';
        document.getElementById('grade-group').style.display = 'none';
        document.getElementById('unit-group').style.display = 'none';
        document.getElementById('proceed-btn').disabled = true;
    });
}

// ===== THEME SWITCHER =====
function initializeTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const themes = ['light', 'dark', 'minimal', 'soft-paper'];
    let currentThemeIndex = 0;

    // Load saved theme
    const savedTheme = localStorage.getItem('quiz-theme');
    if (savedTheme) {
        currentThemeIndex = themes.indexOf(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
        state.currentTheme = savedTheme;
    }

    themeBtn.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const newTheme = themes[currentThemeIndex];
        document.documentElement.setAttribute('data-theme', newTheme);
        state.currentTheme = newTheme;
        localStorage.setItem('quiz-theme', newTheme);
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeHomePage();
    initializeSetupPage();
    initializeQuizNavigation();
    initializeResults();
    initializeTheme();
    showPage('home');
});
