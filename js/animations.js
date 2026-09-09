/**
 * ==========================================================================
 *        MÓDULO DE ANIMACIONES - ZYRA TECH DASHBOARD (PREMIUM)
 * ==========================================================================
 */

class ZyraAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Asignar transiciones stagger en la carga
        const logs = document.querySelectorAll('.log-entry-block');
        logs.forEach((log, idx) => {
            log.style.opacity = '0';
            log.style.transform = 'translateX(-8px)';
            log.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            log.style.transitionDelay = `${0.35 + (idx * 0.08)}s`;
            
            setTimeout(() => {
                log.style.opacity = '1';
                log.style.transform = 'translateX(0)';
            }, 50);
        });
    }
}
window.ZyraAnimations = ZyraAnimations;
