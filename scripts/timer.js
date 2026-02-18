export class SessionTimer {
    constructor(callback, onComplete) {
        this.totalSeconds = 0;
        this.elapsedSeconds = 0;
        this.interval = null;
        this.callback = callback; // Updates UI
        this.onComplete = onComplete;
    }

    start(minutes) {
        this.totalSeconds = minutes * 60;
        this.elapsedSeconds = 0;
        this.tick(); // Immediate update
        
        this.interval = setInterval(() => {
            this.totalSeconds--;
            this.elapsedSeconds++;
            
            this.tick();

            if (this.totalSeconds <= 0) {
                this.stop();
                if (this.onComplete) this.onComplete();
            }
        }, 1000);
    }

    stop() {
        if (this.interval) clearInterval(this.interval);
    }

    tick() {
        const m = Math.floor(this.totalSeconds / 60);
        const s = this.totalSeconds % 60;
        const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        this.callback(formatted);
    }

    getElapsedFormatted() {
        const m = Math.floor(this.elapsedSeconds / 60);
        const s = this.elapsedSeconds % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
}