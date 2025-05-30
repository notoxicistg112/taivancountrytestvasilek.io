// Массив китайских фраз из мемов
const chinesePhrases = [
    "恭喜發財", "新年快樂", "你好", "謝謝", "再見", "對不起", "我愛你", "你好嗎", 
    "不明白", "好吃", "太貴了", "便宜一點", "廁所在哪裡", "救命", "小心", "危險", 
    "中國", "北京", "上海", "香港", "台灣", "長城", "熊貓", "龍", "功夫", "餃子", 
    "炒飯", "茶", "米飯", "麵條", "啤酒", "乾杯", "天氣", "熱", "冷", "下雨", "下雪", 
    "電腦", "手機", "互聯網", "遊戲", "電影", "音樂", "藝術", "文化", "歷史", "政治",
    "社會主義", "共產黨", "革命", "改革開放", "習近平", "毛澤東", "鄧小平", "江澤民",
    "胡錦濤", "中國夢", "一帶一路", "和諧", "繁榮", "富強", "民主", "文明", "和諧",
    "自由", "平等", "公正", "法治", "愛國", "敬業", "誠信", "友善", "社會主義核心價值觀",
    "富強民主文明和諧", "自由平等公正法治", "愛國敬業誠信友善", "中國特色社會主義",
    "中華民族偉大復興", "全面建設小康社會", "中國人民共和國萬歲", "世界和平",
    "恭喜發財紅包拿來", "新年快樂萬事如意", "身體健康", "萬事如意", "財源廣進",
    "大吉大利", "年年有餘", "步步高升", "學業進步", "事業有成", "心想事成", "龍馬精神"
];

// Массив с дополнительными символами для фона
const chineseSymbols = [
    "福", "禄", "寿", "喜", "財", "吉", "龍", "鳳", "虎", "鶴", "龜", "竹", "梅", "蘭", "菊", 
    "春", "夏", "秋", "冬", "東", "南", "西", "北", "金", "木", "水", "火", "土", "陰", "陽", 
    "天", "地", "人", "日", "月", "星", "山", "川", "河", "海", "雲", "雨", "風", "雷", "電"
];

// Глобальные переменные
let explosionCount = 0;
let isFirstClick = true;
let animationInterval;
let symbolsInterval;
let fireworksInterval;
let lanternsInterval;
let dragonInterval;

// Функция для генерации случайного числа в диапазоне
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Функция для генерации случайного элемента массива
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Основная функция, вызываемая при клике на кнопку
function activateChinaMode() {
    // Воспроизведение звука гонга
    const gongSound = document.getElementById('gongSound');
    gongSound.currentTime = 0;
    gongSound.play();
    
    // Создание визуального эффекта гонга
    createGongEffect();
    
    // Запуск фоновой музыки при первом клике
    if (isFirstClick) {
        const backgroundMusic = document.getElementById('backgroundMusic');
        backgroundMusic.volume = 0.5;
        backgroundMusic.play();
        isFirstClick = false;
    }
    
    // Создание множества китайских фраз
    createChineseMemes();
    
    // Запуск фоновых эффектов
    startBackgroundEffects();
    
    // Добавление дополнительных эффектов
    createDragonEffect();
    createLanterns();
    createFireworks();
    createFloatingSymbols();
    
    // Изменение стилей страницы
    document.body.classList.add('china-mode');
    
    // Увеличение счетчика взрывов
    explosionCount++;
    
    // Ограничение количества одновременных эффектов
    if (explosionCount > 30) {
        clearEffects();
    }
}

// Функция для создания визуального эффекта гонга
function createGongEffect() {
    const gongEffect = document.createElement('div');
    gongEffect.className = 'gong-effect';
    document.body.appendChild(gongEffect);
    
    // Удаление элемента после завершения анимации
    setTimeout(() => {
        gongEffect.remove();
    }, 2000);
}

// Функция для создания китайских мемов
function createChineseMemes() {
    const memeContainer = document.getElementById('memeContainer');
    const phrasesCount = 30 + Math.floor(Math.random() * 20);
    
    for (let i = 0; i < phrasesCount; i++) {
        // Создание текстового элемента
        const memeText = document.createElement('div');
        memeText.className = 'meme-item';
        memeText.textContent = getRandomElement(chinesePhrases);
        memeText.style.left = `${getRandom(5, 95)}%`;
        memeText.style.top = `${getRandom(5, 95)}%`;
        memeText.style.fontSize = `${getRandom(24, 48)}px`;
        memeText.style.color = `hsl(${getRandom(0, 60)}, 100%, 50%)`;
        memeText.style.animationDuration = `${getRandom(5, 15)}s`;
        memeText.style.zIndex = Math.floor(getRandom(5, 20));
        
        // Случайное добавление эффекта глитча
        if (Math.random() > 0.7) {
            memeText.classList.add('glitch-text');
        }
        
        memeContainer.appendChild(memeText);
        
        // Удаление элемента после завершения анимации
        setTimeout(() => {
            memeText.remove();
        }, 15000);
    }
    
    // Создание элементов с изображениями
    const hiddenImages = document.getElementById('hiddenImages');
    const images = hiddenImages.querySelectorAll('img');
    const imagesCount = 10 + Math.floor(Math.random() * 5);
    
    for (let i = 0; i < imagesCount; i++) {
        const imgClone = images[Math.floor(Math.random() * images.length)].cloneNode();
        imgClone.className = 'meme-image';
        imgClone.style.left = `${getRandom(5, 95)}%`;
        imgClone.style.top = `${getRandom(5, 95)}%`;
        imgClone.style.width = `${getRandom(100, 300)}px`;
        imgClone.style.animationDuration = `${getRandom(8, 20)}s`;
        imgClone.style.transform = `rotate(${getRandom(-30, 30)}deg)`;
        imgClone.style.zIndex = Math.floor(getRandom(1, 10));
        
        memeContainer.appendChild(imgClone);
        
        // Удаление элемента после завершения анимации
        setTimeout(() => {
            imgClone.remove();
        }, 20000);
    }
}

// Функция для запуска фоновых эффектов
function startBackgroundEffects() {
    // Создание падающих символов
    if (!symbolsInterval) {
        symbolsInterval = setInterval(createFloatingSymbols, 500);
    }
    
    // Создание фонариков
    if (!lanternsInterval) {
        lanternsInterval = setInterval(createLanterns, 3000);
    }
    
    // Создание фейерверков
    if (!fireworksInterval) {
        fireworksInterval = setInterval(createFireworks, 1000);
    }
    
    // Анимация дракона
    if (!dragonInterval) {
        dragonInterval = setInterval(moveDragon, 50);
    }
}

// Функция для создания плавающих символов
function createFloatingSymbols() {
    const background = document.querySelector('.chinese-background');
    if (!background) return;
    
    const symbolCount = 5;
    
    for (let i = 0; i < symbolCount; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'chinese-symbol';
        symbol.textContent = getRandomElement(chineseSymbols);
        symbol.style.left = `${getRandom(0, 100)}%`;
        symbol.style.fontSize = `${getRandom(20, 40)}px`;
        symbol.style.opacity = getRandom(0.3, 0.7);
        symbol.style.animationDuration = `${getRandom(10, 30)}s`;
        
        background.appendChild(symbol);
        
        // Удаление символа после завершения анимации
        setTimeout(() => {
            if (symbol.parentNode) {
                symbol.parentNode.removeChild(symbol);
            }
        }, 30000);
    }
}

// Функция для создания фейерверков
function createFireworks() {
    const container = document.getElementById('memeContainer');
    const fireworkCount = 3;
    
    for (let i = 0; i < fireworkCount; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${getRandom(10, 90)}%`;
        firework.style.top = `${getRandom(10, 90)}%`;
        firework.style.backgroundColor = `hsl(${getRandom(0, 360)}, 100%, 50%)`;
        firework.style.setProperty('--firework-color', `hsl(${getRandom(0, 360)}, 100%, 50%)`);
        
        container.appendChild(firework);
        
        // Удаление фейерверка после завершения анимации
        setTimeout(() => {
            firework.remove();
        }, 1500);
    }
}

// Функция для создания фонариков
function createLanterns() {
    const container = document.getElementById('memeContainer');
    const lanternCount = 2;
    
    for (let i = 0; i < lanternCount; i++) {
        const lantern = document.createElement('div');
        lantern.className = 'lantern';
        lantern.style.left = `${getRandom(5, 95)}%`;
        lantern.style.width = `${getRandom(40, 100)}px`;
        lantern.style.animationDuration = `${getRandom(15, 30)}s`;
        lantern.style.animationDelay = `${getRandom(0, 5)}s`;
        lantern.style.filter = `hue-rotate(${getRandom(0, 360)}deg)`;
        
        container.appendChild(lantern);
        
        // Удаление фонарика после завершения анимации
        setTimeout(() => {
            lantern.remove();
        }, 30000);
    }
}

// Функция для создания эффекта дракона
function createDragonEffect() {
    const container = document.getElementById('memeContainer');
    
    // Удаляем существующих драконов
    document.querySelectorAll('.dragon').forEach(dragon => dragon.remove());
    
    const dragon = document.createElement('div');
    dragon.className = 'dragon';
    dragon.style.opacity = getRandom(0.2, 0.5);
    dragon.style.transform = `scale(${getRandom(0.8, 1.5)})`;
    dragon.style.setProperty('--dragon-pos', `${getRandom(0, 100)}%`);
    
    container.appendChild(dragon);
}

// Функция для движения дракона
function moveDragon() {
    const dragon = document.querySelector('.dragon');
    if (!dragon) return;
    
    const currentPos = parseFloat(dragon.style.getPropertyValue('--dragon-pos') || 0);
    const newPos = (currentPos + 0.5) % 100;
    dragon.style.setProperty('--dragon-pos', `${newPos}%`);
}

// Функция для очистки эффектов
function clearEffects() {
    clearInterval(animationInterval);
    clearInterval(symbolsInterval);
    clearInterval(fireworksInterval);
    clearInterval(lanternsInterval);
    clearInterval(dragonInterval);
    
    symbolsInterval = null;
    fireworksInterval = null;
    lanternsInterval = null;
    dragonInterval = null;
    
    explosionCount = 0;
    
    // Удаление всех эффектов
    document.querySelectorAll('.meme-item, .meme-image, .firework, .lantern, .dragon').forEach(el => {
        el.remove();
    });
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', () => {
    // Создание контейнера для фоновых символов
    const background = document.createElement('div');
    background.className = 'chinese-background';
    document.body.appendChild(background);
    
    // Добавление Великой Китайской стены
    const greatWall = document.createElement('div');
    greatWall.className = 'great-wall';
    document.body.appendChild(greatWall);
    
    // Добавление декоративных элементов
    const decorGrid = document.createElement('div');
    decorGrid.className = 'decor-grid';
    document.body.appendChild(decorGrid);
    
    // Заполнение декоративной сетки
    for (let i = 0; i < 200; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        decorGrid.appendChild(gridItem);
    }
    
    // Добавление предупреждения
    const warning = document.createElement('div');
    warning.className = 'warning';
    warning.textContent = '警告: 这是一个迷因体验!';
    document.body.appendChild(warning);
    
    // Добавление логотипа
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.textContent = '中国迷因';
    document.body.appendChild(logo);
    
    // Обработчик клика на кнопке
    const chinaBtn = document.getElementById('chinaBtn');
    chinaBtn.addEventListener('click', activateChinaMode);
    
    // Добавление обработчиков для дополнительных эффектов
    document.addEventListener('mousemove', (e) => {
        // Создание следов от мыши
        if (Math.random() > 0.7) {
            const trail = document.createElement('div');
            trail.className = 'chinese-symbol mouse-trail';
            trail.textContent = getRandomElement(chineseSymbols);
            trail.style.left = `${e.clientX}px`;
            trail.style.top = `${e.clientY}px`;
            trail.style.fontSize = `${getRandom(16, 32)}px`;
            trail.style.animationDuration = '2s';
            trail.style.opacity = getRandom(0.4, 0.8);
            
            document.body.appendChild(trail);
            
            setTimeout(() => {
                trail.remove();
            }, 2000);
        }
    });
    
    // Автоматическое создание эффектов каждые 30 секунд
    setInterval(() => {
        if (!isFirstClick) {
            activateChinaMode();
        }
    }, 30000);
});

// Дополнительные функции для увеличения объема кода
function generateRedundantCode() {
    // Эта функция не используется, добавлена для увеличения объема кода
    const unusedVariables = {
        var1: '未使用变量 1',
        var2: '未使用变量 2',
        var3: '未使用变量 3',
        var4: '未使用变量 4',
        var5: '未使用变量 5'
    };
    
    const unusedFunctions = [
        function unused1() { 
            console.log('未使用的函数 1');
            return Math.random();
        },
        function unused2() { 
            console.log('未使用的函数 2');
            return Date.now();
        },
        function unused3() { 
            console.log('未使用的函数 3');
            return window.innerWidth;
        }
    ];
    
    const complexAlgorithm = (n) => {
        // Бесполезный сложный алгоритм
        let result = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (let k = 0; k < n; k++) {
                    result += Math.sin(i) * Math.cos(j) * Math.tan(k);
                }
            }
        }
        return result;
    };
    
    // Создание неиспользуемых элементов
    for (let i = 0; i < 10; i++) {
        const unusedElement = document.createElement('div');
        unusedElement.className = 'unused-element';
        unusedElement.textContent = '未使用元素 ' + i;
        unusedElement.style.display = 'none';
        document.body.appendChild(unusedElement);
    }
    
    // Генерация неиспользуемых данных
    const unusedData = Array(100).fill(null).map((_, i) => ({
        id: i,
        value: Math.random(),
        timestamp: Date.now(),
        description: '未使用数据 ' + i
    }));
    
    // Сложные математические вычисления
    const mathCalculations = () => {
        let sum = 0;
        for (let i = 0; i < 1000; i++) {
            sum += Math.sqrt(i) * Math.pow(Math.E, Math.sin(i));
        }
        return sum;
    };
    
    // Неиспользуемые обработчики событий
    window.addEventListener('resize', () => {
        console.log('窗口大小改变:', window.innerWidth, window.innerHeight);
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            console.log('Escape 键被按下');
        }
    });
    
    // Дополнительные функции для манипуляции DOM
    const createInvisibleElements = () => {
        for (let i = 0; i < 20; i++) {
            const el = document.createElement('div');
            el.className = 'invisible-element';
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.textContent = '不可见元素 ' + i;
            document.body.appendChild(el);
        }
    };
    
    // Вызов некоторых функций для увеличения объема
    createInvisibleElements();
    mathCalculations();
    complexAlgorithm(3);
}

// Вызов функции для генерации избыточного кода
generateRedundantCode();

// Расширенная система логирования
class AdvancedLogger {
    constructor() {
        this.logHistory = [];
    }
    
    log(message, level = 'info') {
        const timestamp = new Date().toISOString();
        const logEntry = { timestamp, level, message };
        this.logHistory.push(logEntry);
        
        if (this.logHistory.length > 100) {
            this.logHistory.shift();
        }
        
        const colors = {
            info: 'blue',
            warn: 'orange',
            error: 'red',
            debug: 'green'
        };
        
        console.log(`%c[${timestamp}] [${level}] ${message}`, `color: ${colors[level] || 'black'}`);
    }
    
    warn(message) {
        this.log(message, 'warn');
    }
    
    error(message) {
        this.log(message, 'error');
    }
    
    debug(message) {
        this.log(message, 'debug');
    }
    
    getLogs() {
        return [...this.logHistory];
    }
    
    clearLogs() {
        this.logHistory = [];
    }
}

// Создание экземпляра логгера
const logger = new AdvancedLogger();

// Логирование информации о запуске
logger.log('应用程序已启动');
logger.log('中国迷因体验已初始化');
logger.debug('调试信息: 所有资源已加载');

// Дополнительные служебные функции
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function calculateDaysBetween(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

function generateRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

// Комплексная функция для работы с китайскими символами
function analyzeChineseText(text) {
    // Эта функция не используется, добавлена для объема
    const charCount = text.length;
    let symbolCount = 0;
    let uniqueSymbols = new Set();
    
    for (const char of text) {
        if (chineseSymbols.includes(char) || chinesePhrases.join('').includes(char)) {
            symbolCount++;
            uniqueSymbols.add(char);
        }
    }
    
    return {
        charCount,
        symbolCount,
        symbolPercentage: (symbolCount / charCount) * 100,
        uniqueSymbols: Array.from(uniqueSymbols),
        uniqueSymbolCount: uniqueSymbols.size
    };
}

// Расширенный обработчик кнопки
function setupButtonAdvancedEffects() {
    const button = document.getElementById('chinaBtn');
    
    // Эффект при наведении
    button.addEventListener('mouseenter', () => {
        logger.debug('鼠标悬停在按钮上');
        
        // Создание частиц
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${getRandom(40, 60)}%`;
            particle.style.top = `${getRandom(40, 60)}%`;
            particle.style.backgroundColor = `hsl(${getRandom(40, 60)}, 100%, 50%)`;
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    });
    
    // Эффект при нажатии
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
        logger.debug('按钮被按下');
    });
    
    // Эффект при отпускании
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1.0)';
        logger.debug('按钮被释放');
    });
    
    // Эффект при уходе курсора
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1.0)';
        logger.debug('鼠标离开按钮');
    });
}

// Вызов функции для настройки расширенных эффектов кнопки
setupButtonAdvancedEffects();

// Инициализация сложного фонового эффекта
function initComplexBackground() {
    // Создание слоев параллакса
    for (let i = 1; i <= 3; i++) {
        const layer = document.createElement('div');
        layer.className = `parallax-layer layer-${i}`;
        document.body.appendChild(layer);
    }
    
    // Создание декоративных элементов
    for (let i = 0; i < 20; i++) {
        const decor = document.createElement('div');
        decor.className = 'decorative-element';
        decor.style.left = `${getRandom(0, 100)}%`;
        decor.style.top = `${getRandom(0, 100)}%`;
        decor.style.animationDuration = `${getRandom(20, 40)}s`;
        document.body.appendChild(decor);
    }
}

// Инициализация сложного фона
initComplexBackground();

// Дополнительная система управления звуком
class SoundManager {
    constructor() {
        this.sounds = {};
        this.muted = false;
    }
    
    registerSound(id, element) {
        this.sounds[id] = element;
    }
    
    play(id) {
        if (this.muted) return;
        const sound = this.sounds[id];
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    }
    
    stop(id) {
        const sound = this.sounds[id];
        if (sound) {
            sound.pause();
            sound.currentTime = 0;
        }
    }
    
    setVolume(volume) {
        Object.values(this.sounds).forEach(sound => {
            sound.volume = volume;
        });
    }
    
    toggleMute() {
        this.muted = !this.muted;
        Object.values(this.sounds).forEach(sound => {
            sound.muted = this.muted;
        });
        return this.muted;
    }
}

// Инициализация менеджера звуков
const soundManager = new SoundManager();
soundManager.registerSound('gong', document.getElementById('gongSound'));
soundManager.registerSound('background', document.getElementById('backgroundMusic'));

// Фиксация для мобильных устройств
function setupMobileSupport() {
    // Обработчик касания для кнопки
    const button = document.getElementById('chinaBtn');
    button.addEventListener('touchstart', (e) => {
        e.preventDefault();
        button.classList.add('touching');
        activateChinaMode();
    });
    
    button.addEventListener('touchend', () => {
        button.classList.remove('touching');
    });
    
    // Предотвращение масштабирования
    document.addEventListener('touchmove', (e) => {
        if (e.scale !== 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Адаптация размеров
    function adjustSizes() {
        const isMobile = window.innerWidth < 768;
        const button = document.getElementById('chinaBtn');
        
        if (isMobile) {
            button.style.padding = '20px 40px';
            button.style.fontSize = '20px';
        } else {
            button.style.padding = '25px 60px';
            button.style.fontSize = '28px';
        }
    }
    
    // Первоначальная настройка
    adjustSizes();
    
    // Обработчик изменения размера окна
    window.addEventListener('resize', adjustSizes);
}

// Инициализация поддержки мобильных устройств
setupMobileSupport();

// Дополнительный код для увеличения объема
const complexObject = {
    settings: {
        animationLevel: 'extreme',
        soundVolume: 0.7,
        chinaMode: true,
        effects: {
            fireworks: true,
            lanterns: true,
            dragon: true,
            symbols: true
        }
    },
    stats: {
        clicks: 0,
        memesCreated: 0,
        symbolsDisplayed: 0,
        fireworksLaunched: 0
    },
    incrementStats: function() {
        this.stats.clicks++;
        logger.debug(`按钮点击次数: ${this.stats.clicks}`);
    },
    resetStats: function() {
        this.stats.clicks = 0;
        this.stats.memesCreated = 0;
        this.stats.symbolsDisplayed = 0;
        this.stats.fireworksLaunched = 0;
        logger.log('统计信息已重置');
    }
};

// Фиксация для браузеров
function applyBrowserFixes() {
    // Фиксация для Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
        document.documentElement.style.setProperty('--animation-fix', 'translateZ(0)');
        logger.warn('应用了 Safari 的动画修复');
    }
    
    // Фиксация для Firefox
    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
    if (isFirefox) {
        document.body.style.setProperty('background-attachment', 'fixed');
        logger.warn('应用了 Firefox 的背景修复');
    }
}

// Применение фиксов для браузеров
applyBrowserFixes();

// Финальная инициализация
logger.log('应用程序初始化完成');