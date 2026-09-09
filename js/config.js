/**
 * ==========================================================================
 *      CENTRAL CONFIGURATION - PREMIUM TECH DASHBOARD SCREEN
 * ==========================================================================
 * Configure your server brand, links, playlists, changelogs,
 * and keybind shortcuts for the loading screen.
 */

window.ZyraConfig = {
    // 1. Server Branding Identity
    branding: {
        serverName: "ZYRA CORP",
        logoUrl: "", // Add path to your logo if needed
        serverSubtitle: "SECURE ACCESS",
        claim: "ZYRA CORPORATION",
        description: "Next-generation software systems and resources for FiveM roleplay. Built for maximum performance and fluid visual aesthetics."
    },

    // 2. Default Enabled / Disabled Components
    components: {
        enableSocials: true,             // Show official social links
        enableMusic: true,               // Show minimal cassette player
        enableNews: true,                // Show server news feed
        enableBackgroundVideo: false,    // Show looping video background
        enableParticles: true            // Show floating cosmic dust particles
    },

    // 3. Official Links (Editorial Underlined Text Format)
    socials: [
        { name: "Discord Link", url: "https://discord.gg/zyra" },
        { name: "Official Site", url: "https://zyrastore.com" },
        { name: "YouTube Channel", url: "https://youtube.com/zyra" },
        { name: "TikTok Account", url: "https://tiktok.com/@zyra" },
        { name: "Instagram Profile", url: "https://instagram.com/zyra" },
        { name: "Twitter / X Feed", url: "https://x.com/zyra" }
    ],

    // 4. Music Playlist (Supports local files or direct audio URLs)
    music: {
        defaultVolume: 0.15,
        playlist: [
            { 
                title: "Shadows of the City", 
                artist: "Neon Syndicate", 
                url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
            },
            { 
                title: "Whispers of the Street", 
                artist: "Midnight Vibe", 
                url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
            },
            { 
                title: "Echoes of Roleplay", 
                artist: "Retro Wave", 
                url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" 
            }
        ]
    },

    // 5. Server News and Updates (Magazine Editorial Card Format)
    news: [
        {
            type: "update",
            date: "19 JUL 2026",
            title: "Clandestine Lab Discovery",
            description: "Unconfirmed reports point to a new hidden narcotics manufacturing facility in the north. Law enforcement is dispatching units."
        },
        {
            type: "evento",
            date: "15 JUL 2026",
            title: "15 Custom Cars Imported",
            description: "The luxury import car dealer has restocked 15 state-of-the-art vehicles with custom handling vectors."
        }
    ],

    // 6. Useful Server Key Shortcuts (Shown under the updates feed)
    controls: [
        { key: "F1", description: "Mobile Device" },
        { key: "F2", description: "Storage Box" },
        { key: "F3", description: "Gestures Panel" },
        { key: "K", description: "Vehicle Seatbelt" }
    ],

    // 7. Ambient Background Variables
    background: {
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-ink-swirling-background-43093-large.mp4",
        videoOpacity: 0.25,
        particleCount: 30,
        particleSpeed: 0.35
    },

    // 8. Connection Status Log Phrases
    loading: {
        musicTipText: "PRESS SPACE TO PLAY/PAUSE MUSIC",
        phases: [
            { progress: 0, text: "Initializing database connection sequence..." },
            { progress: 20, text: "Downloading system files and interface components..." },
            { progress: 50, text: "Compiling custom assets and vehicle handling configurations..." },
            { progress: 80, text: "Synchronizing player environment vectors with server host..." },
            { progress: 100, text: "Ready. Access granted." }
        ]
    },

    // 9. Global Accent Styling Theme (Neon Electric Cyan)
    theme: {
        colorPrimary: "#030303",
        colorSecondary: "#090909",
        colorAccent: "#00f5ff",
        colorTextPrimary: "#f8fafc",
        colorTextSecondary: "#94a3b8",
        colorTextMuted: "#475569",
        colorBorder: "rgba(255, 255, 255, 0.035)",
        colorBorderActive: "rgba(0, 245, 255, 0.25)",
        blurIntensity: "14px"
    },

    typography: {
        fontFamily: "'Inter', sans-serif",
        fontSizeBase: "16px"
    }
};
