// Language translations
const translations = {
    en: {
        'hero-title': 'Angola Expo 2025 Osaka',
        'hero-subtitle': 'Projects saving lives',
        'card1-title': "Tchissola's Dream comic book",
        'card2-title': 'MapaZZZ mobile app website',
        'card2-quiz-title': 'MapaZZZ quiz game',
        'card3-title': "Tchissola's Dream full video",
        'card4-title': 'MapaZZZ mobile app introduction video',
        'play-now-btn': 'Play Now'
    },
    pt: {
        'hero-title': 'Angola Expo 2025 Osaka',
        'hero-subtitle': 'Projetos salvando vidas',
        'card1-title': 'Livro de quadrinhos O Sonho de Tchissola',
        'card2-title': 'Site do aplicativo móvel MapaZZZ',
        'card2-quiz-title': 'Jogo de quiz MapaZZZ',
        'card3-title': 'Vídeo completo O Sonho de Tchissola',
        'card4-title': 'Vídeo de introdução do aplicativo móvel MapaZZZ',
        'play-now-btn': 'Jogar Agora'
    },
    ja: {
        'hero-title': 'アンゴラ万博2025大阪',
        'hero-subtitle': '命を救うプロジェクト',
        'card1-title': 'チッソラの夢コミックブック',
        'card2-title': 'MapaZZZモバイルアプリウェブサイト',
        'card2-quiz-title': 'MapaZZZクイズゲーム',
        'card3-title': 'チッソラの夢フルビデオ',
        'card4-title': 'MapaZZZモバイルアプリ紹介ビデオ',
        'play-now-btn': '今すぐプレイ'
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
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update html lang attribute
    document.documentElement.lang = lang;
    
    // Hide the popup
    hideLanguagePopup();
}

// Function to show language popup
function showLanguagePopup() {
    const popup = document.getElementById('languagePopup');
    if (popup) {
        popup.classList.remove('hidden');
    }
}

// Function to hide language popup
function hideLanguagePopup() {
    const popup = document.getElementById('languagePopup');
    if (popup) {
        popup.classList.add('hidden');
    }
}

// Initialize language system
function initLanguageSystem() {
    // Always show the popup on page load
    showLanguagePopup();
    
    // Add click listeners to language options
    document.querySelectorAll('.lang-option').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLanguageSystem);