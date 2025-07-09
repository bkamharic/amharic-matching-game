document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    // The master vocabulary list, including special entries for UI sounds.
    const masterVocabulary = [
        // Title Sound
        { id: 'main-title', amharic: 'የሰውነት ክፍሎች ጨዋታ', audioSrc: 'audio/title.mp3' },
        { id: 'game-intro', amharic: 'ቃላቱን ከምስሎቹ ጋር አዛምድ!', audioSrc: 'audio/intro.mp3' },

        // Head
        { id: 'hair', amharic: 'ፀጉር', english: 'Hair', category: 'Head', audioSrc: 'audio/hair.mp3', imageSrc: 'images/hair.jpg' },
        { id: 'forehead', amharic: 'ግንባር', english: 'Forehead', category: 'Head', audioSrc: 'audio/forehead.mp3', imageSrc: 'images/forehead.jpg' },
        { id: 'eyebrow', amharic: 'ቅንድብ', english: 'Eyebrow', category: 'Head', audioSrc: 'audio/eyebrow.mp3', imageSrc: 'images/eyebrow.jpg' },
        { id: 'eye', amharic: 'አይን', english: 'Eye', category: 'Head', audioSrc: 'audio/eye.mp3', imageSrc: 'images/eye.jpg' },
        { id: 'ear', amharic: 'ጆሮ', english: 'Ear', category: 'Head', audioSrc: 'audio/ear.mp3', imageSrc: 'images/ear.jpg' },
        { id: 'nose', amharic: 'አፍንጫ', english: 'Nose', category: 'Head', audioSrc: 'audio/nose.mp3', imageSrc: 'images/nose.jpg' },
        { id: 'cheek', amharic: 'ጉንጭ', english: 'Cheek', category: 'Head', audioSrc: 'audio/cheek.mp3', imageSrc: 'images/cheek.jpg' },
        { id: 'mouth', amharic: 'አፍ', english: 'Mouth', category: 'Head', audioSrc: 'audio/mouth.mp3', imageSrc: 'images/mouth.jpg' },
        { id: 'tooth', amharic: 'ጥርስ', english: 'Tooth', category: 'Head', audioSrc: 'audio/tooth.mp3', imageSrc: 'images/tooth.jpg' },
        { id: 'tongue', amharic: 'ምላስ', english: 'Tongue', category: 'Head', audioSrc: 'audio/tongue.mp3', imageSrc: 'images/tongue.jpg' },
        { id: 'head', amharic: 'ራስ', english: 'Head', category: 'Head', audioSrc: 'audio/head.mp3', imageSrc: 'images/head.jpg' },
        
        // Upper Body
        { id: 'neck', amharic: 'አንገት', english: 'Neck', category: 'Upper Body', audioSrc: 'audio/neck.mp3', imageSrc: 'images/neck.jpg' },
        { id: 'shoulder', amharic: 'ትከሻ', english: 'Shoulder', category: 'Upper Body', audioSrc: 'audio/shoulder.mp3', imageSrc: 'images/shoulder.jpg' },
        { id: 'chest', amharic: 'ደረት', english: 'Chest', category: 'Upper Body', audioSrc: 'audio/chest.mp3', imageSrc: 'images/chest.jpg' },
        { id: 'back', amharic: 'ጀርባ', english: 'Back', category: 'Upper Body', audioSrc: 'audio/back.mp3', imageSrc: 'images/back.jpg' },
        { id: 'belly', amharic: 'ሆድ', english: 'Belly', category: 'Upper Body', audioSrc: 'audio/belly.mp3', imageSrc: 'images/belly.jpg' },
        { id: 'waist', amharic: 'ወገብ', english: 'Waist', category: 'Upper Body', audioSrc: 'audio/waist.mp3', imageSrc: 'images/waist.jpg' },
        
        // Arms and Hands
        { id: 'arm', amharic: 'ክንድ', english: 'Arm', category: 'Arms and Hands', audioSrc: 'audio/arm.mp3', imageSrc: 'images/arm.jpg' },
        { id: 'elbow', amharic: 'ክርን', english: 'Elbow', category: 'Arms and Hands', audioSrc: 'audio/elbow.mp3', imageSrc: 'images/elbow.jpg' },
        { id: 'wrist', amharic: 'የእጅ አንጓ', english: 'Wrist', category: 'Arms and Hands', audioSrc: 'audio/wrist.mp3', imageSrc: 'images/wrist.jpg' },
        { id: 'hand', amharic: 'እጅ', english: 'Hand', category: 'Arms and Hands', audioSrc: 'audio/hand.mp3', imageSrc: 'images/hand.jpg' },
        { id: 'finger', amharic: 'ጣት', english: 'Finger', category: 'Arms and Hands', audioSrc: 'audio/finger.mp3', imageSrc: 'images/finger.jpg' },
        { id: 'fingernail', amharic: 'ጥፍር', english: 'Fingernail', category: 'Arms and Hands', audioSrc: 'audio/fingernail.mp3', imageSrc: 'images/fingernail.jpg' },

        // Legs and Feet
        { id: 'hip', amharic: 'ዳሌ', english: 'Hip', category: 'Legs and Feet', audioSrc: 'audio/hip.mp3', imageSrc: 'images/hip.jpg' },
        { id: 'buttocks', amharic: 'መቀመጫ', english: 'Back Seat', category: 'Legs and Feet', audioSrc: 'audio/buttocks.mp3', imageSrc: 'images/back_seat.jpg' },
        { id: 'thigh', amharic: 'ታፋ', english: 'Thigh', category: 'Legs and Feet', audioSrc: 'audio/thigh.mp3', imageSrc: 'images/thigh.jpg' },
        { id: 'knee', amharic: 'ጉልበት', english: 'Knee', category: 'Legs and Feet', audioSrc: 'audio/knee.mp3', imageSrc: 'images/knee.jpg' },
        { id: 'calf', amharic: 'ባት', english: 'Calf', category: 'Legs and Feet', audioSrc: 'audio/calf.mp3', imageSrc: 'images/calf.jpg' },
        { id: 'ankle', amharic: 'ቁርጭምጭሚት', english: 'Ankle', category: 'Legs and Feet', audioSrc: 'audio/ankle.mp3', imageSrc: 'images/ankle.jpg' },
        { id: 'foot', amharic: 'እግር', english: 'Foot', category: 'Legs and Feet', audioSrc: 'audio/foot.mp3', imageSrc: 'images/foot.jpg' },
        { id: 'toe', amharic: 'የእግር ጣት', english: 'Toe', category: 'Legs and Feet', audioSrc: 'audio/toe.mp3', imageSrc: 'images/toe.jpg' }
    ];

    // --- DOM ELEMENTS ---
    const appContainer = document.getElementById('amharic-match-game');
    const gameBoard = appContainer.querySelector('#game-board');
    const gameOverScreen = appContainer.querySelector('#game-over-screen');
    const categoryNav = appContainer.querySelector('#category-nav');
    const playAgainBtn = appContainer.querySelector('#play-again-btn');
    const nextLevelBtn = appContainer.querySelector('#next-level-btn');
    const gameOverMessage = appContainer.querySelector('#game-over-message');
    const wordColumn = appContainer.querySelector('#word-column');
    const imageColumn = appContainer.querySelector('#image-column');
    const mainTitle = appContainer.querySelector('#main-title');
    const gameIntroText = appContainer.querySelector('#game-intro-text');

    // --- GAME STATE ---
    let selectedWordCard = null;
    let matchesFound = 0;
    let totalMatches = 0;
    let isChecking = false;
    let currentCategory = '';
    const categories = [...new Set(masterVocabulary.filter(item => item.category).map(item => item.category))];

    // --- AUDIO ---
    const correctSound = new Audio('audio/correct-match.mp3'); 
    const incorrectSound = new Audio('audio/incorrect-match.mp3');
    const winSound = new Audio('audio/level-complete.mp3');
    const titleAudio = new Audio(masterVocabulary.find(item => item.id === 'main-title').audioSrc);
    const introAudio = new Audio(masterVocabulary.find(item => item.id === 'game-intro').audioSrc);

    // --- FUNCTIONS ---

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    function showScreen(screenToShow) {
        appContainer.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        screenToShow.classList.add('active');
    }

    function renderCategoryNav() {
        categoryNav.innerHTML = '';
        categories.forEach(category => {
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.textContent = category;
            button.dataset.category = category;
            if (category === currentCategory) {
                button.classList.add('active');
            }
            categoryNav.appendChild(button);
        });
    }

    function renderCards(category) {
        const gameData = masterVocabulary.filter(item => item.category === category);
        totalMatches = gameData.length;

        let words = [...gameData];
        let images = [...gameData];
        shuffleArray(words);
        shuffleArray(images);

        // Generate HTML for word cards
        let wordsHTML = words.map(item => `
            <div class="card word-card" data-id="${item.id}">
                ${item.amharic}
            </div>
        `).join('');

        // Generate HTML for image cards
        let imagesHTML = images.map(item => `
            <div class="card image-card" data-id="${item.id}">
                <img src="${item.imageSrc}" alt="${item.english}">
            </div>
        `).join('');

        // **ADDED**: Add a placeholder if the number of items is odd for symmetry
        if (gameData.length % 2 !== 0) {
            wordsHTML += `<div class="card-placeholder"></div>`;
            imagesHTML += `<div class="card-placeholder"></div>`;
        }

        wordColumn.innerHTML = wordsHTML;
        imageColumn.innerHTML = imagesHTML;
    }

    function startGame(category) {
        currentCategory = category;
        isChecking = false;
        matchesFound = 0;
        selectedWordCard = null;
        showScreen(gameBoard);
        renderCategoryNav();
        renderCards(category);
    }

    function handleCardClick(e) {
        const clickedCard = e.target.closest('.card');
        if (isChecking || !clickedCard || clickedCard.classList.contains('matched')) {
            return;
        }

        if (clickedCard.classList.contains('word-card')) {
            // Play audio on first click
            const wordId = clickedCard.dataset.id;
            const item = masterVocabulary.find(v => v.id === wordId);
            if (item && item.audioSrc) {
                new Audio(item.audioSrc).play();
            }

            if (selectedWordCard) {
                selectedWordCard.classList.remove('selected');
            }
            selectedWordCard = clickedCard;
            selectedWordCard.classList.add('selected');
        } 
        else if (clickedCard.classList.contains('image-card') && selectedWordCard) {
            checkMatch(selectedWordCard, clickedCard);
        }
    }

    function checkMatch(wordCard, imageCard) {
        isChecking = true;
        imageCard.classList.add('selected');

        const wordId = wordCard.dataset.id;
        const imageId = imageCard.dataset.id;
        const item = masterVocabulary.find(v => v.id === wordId);

        if (wordId === imageId) {
            // **UPDATED**: Play audio again on correct match with a slight delay
            correctSound.play();
            if (item && item.audioSrc) {
                setTimeout(() => {
                    new Audio(item.audioSrc).play();
                }, 150);
            }
            
            wordCard.classList.add('correct-animation');
            imageCard.classList.add('correct-animation');

            setTimeout(() => {
                wordCard.classList.remove('selected', 'correct-animation');
                imageCard.classList.remove('selected', 'correct-animation');
                wordCard.classList.add('matched');
                imageCard.classList.add('matched');
                
                selectedWordCard = null;
                matchesFound++;
                isChecking = false;

                if (matchesFound === totalMatches) {
                    endGame();
                }
            }, 800);
        } else {
            incorrectSound.play();
            wordCard.classList.add('incorrect-animation');
            imageCard.classList.add('incorrect-animation');

            setTimeout(() => {
                wordCard.classList.remove('selected', 'incorrect-animation');
                imageCard.classList.remove('selected', 'incorrect-animation');
                selectedWordCard = null;
                isChecking = false;
            }, 800);
        }
    }

    function endGame() {
        winSound.play();
        confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
        
        const currentCategoryIndex = categories.indexOf(currentCategory);
        const isLastLevel = currentCategoryIndex === categories.length - 1;

        gameOverMessage.textContent = `"${currentCategory}" ምድብን ጨርሰዋል!`;
        nextLevelBtn.style.display = isLastLevel ? 'none' : 'inline-block';

        setTimeout(() => showScreen(gameOverScreen), 1000);
    }
    
    function loadNextLevel() {
        const currentCategoryIndex = categories.indexOf(currentCategory);
        const nextCategoryIndex = currentCategoryIndex + 1;
        if (nextCategoryIndex < categories.length) {
            startGame(categories[nextCategoryIndex]);
        }
    }

    // --- EVENT LISTENERS ---
    categoryNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            const category = e.target.dataset.category;
            if (category !== currentCategory) {
                startGame(category);
            }
        }
    });
    
    mainTitle.addEventListener('click', () => {
        titleAudio.play();
    });

    gameIntroText.addEventListener('click', () => { 
        introAudio.play();
    });

    playAgainBtn.addEventListener('click', () => startGame(currentCategory));
    nextLevelBtn.addEventListener('click', loadNextLevel);
    gameBoard.addEventListener('click', handleCardClick);

    // --- INITIALIZATION ---
    function init() {
        startGame(categories[0]); // Start the game with the first category
    }

    init();
});