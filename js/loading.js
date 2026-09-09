/**
 * ==========================================================================
 *        MÓDULO DE FASES DE CARGA - ZYRA DASHBOARD (PREMIUM)
 * ==========================================================================
 */

class ZyraLoadingManager {
    constructor(config) {
        this.config = config || {};
        this.phases = this.config.phases || [];
        this.logText = document.getElementById('log-text');
        this.statusTag = document.getElementById('server-status-tag');
    }

    updatePhaseText(percentage) {
        const val = Math.min(Math.max(percentage, 0), 100);
        
        // Cargar texto de fase de forma secuencial
        const activePhase = this.phases.reduce((prev, curr) => {
            return (val >= curr.progress) ? curr : prev;
        }, this.phases[0]);

        if (activePhase && this.logText) {
            this.logText.innerText = activePhase.text;
        }

        if (this.statusTag) {
            if (val < 25) {
                this.statusTag.innerText = "SERVER STATUS: CONNECTING";
            } else if (val < 75) {
                this.statusTag.innerText = "SERVER STATUS: COMPILING_ASSETS";
            } else if (val < 100) {
                this.statusTag.innerText = "SERVER STATUS: SYNCHRONIZING";
            } else {
                this.statusTag.innerText = "SERVER STATUS: SYSTEM_ACTIVE";
            }
        }
    }
}
window.ZyraLoadingManager = ZyraLoadingManager;
