/**
 * ==========================================================================
 *        MÓDULO DE INTERFAZ DE USUARIO - ZYRA DASHBOARD (PREMIUM)
 * ==========================================================================
 */

class ZyraUI {
    constructor(config) {
        this.config = config || {};
        
        // Elementos DOM
        this.logoContainer = document.getElementById('logo-container');
        this.serverClaim = document.getElementById('server-claim');
        this.serverDescription = document.getElementById('server-description');
        this.socialsContainer = document.getElementById('social-links-grid');
        this.bgVideo = document.getElementById('bg-video');
        this.canvas = document.getElementById('particles-canvas');
        this.musicTipText = document.getElementById('music-tip-text');
        this.perspectiveLayer = document.getElementById('grid-perspective-layer');
        
        this.init();
    }

    init() {
        this.applyConfigToggles();
        this.renderBranding();
        this.renderSocials();
        this.renderBackgroundVideo();
        this.renderParticles();
        this.initPerspectiveGridTilt();
        this.applyDynamicStyles();
        
        if (this.musicTipText && this.config.loading.musicTipText) {
            this.musicTipText.innerText = this.config.loading.musicTipText;
        }
    }

    applyConfigToggles() {
        const comps = this.config.components;
        if (!comps) return;

        // Ocultar música si está desactivada
        const musicCard = document.getElementById('music-card-wrapper');
        if (musicCard && !comps.enableMusic) {
            musicCard.classList.add('hidden');
        }

        // Ocultar redes si está desactivado
        const socialsPanel = document.getElementById('socials-panel');
        if (socialsPanel && !comps.enableSocials) {
            socialsPanel.classList.add('hidden');
        }

        // Ocultar feed si está desactivado
        const feedPanel = document.querySelector('.widget-news');
        const brandPanel = document.querySelector('.widget-brand');
        if (feedPanel && brandPanel && !comps.enableNews && this.config.controls.length === 0) {
            feedPanel.classList.add('hidden');
            brandPanel.classList.add('full-width');
        }
    }

    renderBranding() {
        if (!this.logoContainer) return;
        const brand = this.config.branding;

        if (brand.logoUrl) {
            this.logoContainer.innerHTML = `<img src="${brand.logoUrl}" alt="${brand.serverName}">`;
        } else {
            this.logoContainer.innerHTML = `<h1>${brand.serverName}</h1>`;
        }

        if (this.serverClaim) {
            this.serverClaim.innerText = brand.claim;
        }

        if (this.serverDescription) {
            this.serverDescription.innerText = brand.description;
        }
    }

    renderSocials() {
        if (!this.socialsContainer || !this.config.components.enableSocials) return;
        const socialsList = this.config.socials || [];
        
        let html = "";
        socialsList.forEach(social => {
            html += `
                <a href="${social.url}" target="_blank" class="social-btn">
                    <span>${social.name}</span>
                </a>`;
        });
        
        this.socialsContainer.innerHTML = html;
    }

    renderBackgroundVideo() {
        if (!this.bgVideo) return;
        const bg = this.config.background;

        if (this.config.components.enableBackgroundVideo && bg.videoUrl) {
            this.bgVideo.src = bg.videoUrl;
            this.bgVideo.style.opacity = bg.videoOpacity;
            this.bgVideo.classList.remove('hidden');
            this.bgVideo.play().catch(() => {});
        } else {
            this.bgVideo.classList.add('hidden');
        }
    }

    renderParticles() {
        if (!this.canvas) return;
        if (!this.config.components.enableParticles) {
            this.canvas.classList.add('hidden');
            return;
        } else {
            this.canvas.classList.remove('hidden');
        }
        
        const ctx = this.canvas.getContext('2d');
        let particlesArray = [];
        const count = this.config.background.particleCount || 30;
        const speed = this.config.background.particleSpeed || 0.35;

        const resize = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor(width, height) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.0 + 0.3;
                this.speedX = (Math.random() - 0.5) * speed;
                this.speedY = (Math.random() - 0.5) * speed;
                this.opacity = Math.random() * 0.25 + 0.08;
            }

            update(width, height) {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > width) this.speedX = -this.speedX;
                if (this.y < 0 || this.y > height) this.speedY = -this.speedY;
            }

            draw() {
                ctx.fillStyle = `rgba(0, 245, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particlesArray = [];
            for (let i = 0; i < count; i++) {
                particlesArray.push(new Particle(this.canvas.width, this.canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            particlesArray.forEach(p => {
                p.update(this.canvas.width, this.canvas.height);
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        init();
        animate();
    }

    initPerspectiveGridTilt() {
        if (!this.perspectiveLayer) return;
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            this.perspectiveLayer.style.transform = `perspective(700px) rotateX(${40 + (y * 12)}deg) rotateY(${x * 12}deg) translateZ(${y * -8}px)`;
        });
    }

    applyDynamicStyles() {
        const theme = this.config.theme;
        const typo = this.config.typography;
        const root = document.documentElement;

        if (theme.colorPrimary) root.style.setProperty('--bg-pure-black', theme.colorPrimary);
        if (theme.colorSecondary) root.style.setProperty('--bg-panel-dark', theme.colorSecondary);
        if (theme.colorAccent) {
            root.style.setProperty('--accent-pure-white', theme.colorAccent);
            root.style.setProperty('--accent-glow', `rgba(${this.hexToRgb(theme.colorAccent)}, 0.2)`);
        }
        if (theme.colorTextPrimary) root.style.setProperty('--text-primary', theme.colorTextPrimary);
        if (theme.colorTextSecondary) root.style.setProperty('--text-secondary', theme.colorTextSecondary);
        if (theme.colorTextMuted) root.style.setProperty('--text-muted', theme.colorTextMuted);
        if (theme.colorBorder) root.style.setProperty('--border-glass', `1px solid ${theme.colorBorder}`);
        if (theme.colorBorderActive) root.style.setProperty('--border-glass-active', `1px solid ${theme.colorBorderActive}`);
        
        if (typo.fontFamily) root.style.setProperty('--font-body', typo.fontFamily);
        if (typo.fontSizeBase) root.style.setProperty('--font-size-base', typo.fontSizeBase);
    }

    hexToRgb(hex) {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
        }
        return '0,245,255';
    }
}
window.ZyraUI = ZyraUI;
