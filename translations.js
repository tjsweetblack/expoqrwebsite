// Language translations
const translations = {
    en: {
        'hero-title': 'Angola Expo 2025 Osaka',
        'hero-subtitle': 'Projects saving lives',
        'card1-title': "Tchissola's Dream comic book",
        'card2-title': 'MapaZZZ mobile app website',
        'card3-title': "Tchissola's Dream full video",
        'card4-title': 'MapaZZZ mobile app introduction video'
    },
    pt: {
        'hero-title': 'Angola Expo 2025 Osaka',
        'hero-subtitle': 'Projetos salvando vidas',
        'card1-title': 'Livro de quadrinhos O Sonho de Tchissola',
        'card2-title': 'Site do aplicativo móvel MapaZZZ',
        'card3-title': 'Vídeo completo O Sonho de Tchissola',
        'card4-title': 'Vídeo de introdução do aplicativo móvel MapaZZZ'
    },
    ja: {
        'hero-title': 'アンゴラ万博2025大阪',
        'hero-subtitle': '命を救うプロジェクト',
        'card1-title': 'チッソラの夢コミックブック',
        'card2-title': 'MapaZZZモバイルアプリウェブサイト',
        'card3-title': 'チッソラの夢フルビデオ',
        'card4-title': 'MapaZZZモバイルアプリ紹介ビデオ'
    }
};

// Current language (default to English)
let currentLanguage = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Initialize language system
function initLanguageSystem() {
    // Check if user has a preferred language stored
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    }
    
    // Add click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLanguageSystem);