/**
 * ==========================================================================
 *        MÓDULO DE LOGS DE NOVEDADES Y ACCESOS - ZYRA DASHBOARD (PREMIUM)
 * ==========================================================================
 */

class ZyraNewsSlider {
    constructor(config) {
        this.config = config || {};
        this.newsContainer = document.getElementById('timeline-feed-wrapper');
        this.init();
    }

    init() {
        if (!this.newsContainer) return;
        
        let html = "";

        // 1. Añadir Novedades como lineas de log
        if (this.config.components.enableNews && this.config.news) {
            this.config.news.forEach(item => {
                const badgeText = item.type === 'update' ? 'UPD' : 'EVT';
                html += `
                    <div class="log-entry-block">
                        <div class="log-header-row">
                            <span class="log-tag-badge">[${badgeText}]</span>
                            <span class="log-time">${item.date}</span>
                        </div>
                        <h4 class="log-title-text">${item.title}</h4>
                        <p class="log-body-desc">${item.description}</p>
                    </div>`;
            });
        }

        // 2. Añadir Teclas Útiles
        if (this.config.controls && this.config.controls.length > 0) {
            let keysHtml = "";
            this.config.controls.forEach(ctrl => {
                keysHtml += `
                    <div class="tech-key-item">
                        <kbd>${ctrl.key}</kbd>
                        <span>${ctrl.description}</span>
                    </div>`;
            });

            html += `
                <div class="log-entry-block">
                    <div class="log-header-row">
                        <span class="log-tag-badge">[SYS]</span>
                        <span class="log-time">KEYBINDS</span>
                    </div>
                    <h4 class="log-title-text">Useful Controls</h4>
                    <div class="tech-keys-box">
                        ${keysHtml}
                    </div>
                </div>`;
        }

        this.newsContainer.innerHTML = html;
    }
}
window.ZyraNewsSlider = ZyraNewsSlider;
