/**
 * ==========================================================================
 *        MÓDULO DE PROGRESO DE BARRA DIGITAL - ZYRA DASHBOARD (PREMIUM)
 * ==========================================================================
 */

class ZyraProgress {
    constructor(config) {
        this.config = config || {};
        this.progressBar = document.getElementById('progress-bar');
        this.progressValText = document.getElementById('progress-val-text');
    }

    updateProgress(percentage) {
        const val = Math.min(Math.max(percentage, 0), 100);

        if (this.progressBar) {
            this.progressBar.style.width = `${val}%`;
        }

        if (this.progressValText) {
            this.progressValText.innerText = `${Math.round(val)}%`;
        }
    }
}
window.ZyraProgress = ZyraProgress;
