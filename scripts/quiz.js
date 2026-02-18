export class QuizManager {
    constructor(questions) {
        this.questions = questions;
        this.currentIndex = 0;
        this.score = 0;
        this.history = []; // Stores { qIndex, userSelected, correct }
    }

    getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }

    getProgress() {
        return {
            current: this.currentIndex + 1,
            total: this.questions.length,
            percent: ((this.currentIndex + 1) / this.questions.length) * 100
        };
    }

    submitAnswer(selectedIndex) {
        const q = this.getCurrentQuestion();
        const isCorrect = selectedIndex === q.correct;
        
        // Prevent duplicate answers for same index logic if needed, 
        // but for this app, we just move forward after validation
        this.history[this.currentIndex] = {
            qId: q.id,
            selected: selectedIndex,
            correctIndex: q.correct,
            isCorrect: isCorrect
        };

        if (isCorrect) this.score++;
        
        return {
            isCorrect,
            correctIndex: q.correct
        };
    }

    next() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            return true;
        }
        return false;
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return true;
        }
        return false;
    }

    getFinalStats() {
        return {
            scorePercent: Math.round((this.score / this.questions.length) * 100),
            totalQuestions: this.questions.length
        };
    }
}