const summonButton = document.getElementById('summon-button');
const resultDiv = document.getElementById('result');
const clickCountSpan = document.getElementById('clickCount');
const displayOneResultButton = document.getElementById('display-one-result'); // New button

const characters = [
    { rarity: '3star', name: '3 star lightcone', odds: 94.3, avatar: '../10homemadegacha/3star.png'},
    { rarity: '4star', name: 'Arlan', odds: 0.17, avatar: '../10homemadegacha/Arlan.png' },
    { rarity: '4star', name: 'Asta', odds: 0.17, avatar: '../10homemadegacha/Asta.png' },
    { rarity: '4star', name: 'Dan Heng', odds: 0.17, avatar: '../10homemadegacha/DanHeng.png' },
    { rarity: '4star', name: 'Herta', odds: 0.17, avatar: '../10homemadegacha/Herta.png' },
    { rarity: '4star', name: 'Hook', odds: 0.17, avatar: '../10homemadegacha/Hook.png' },
    { rarity: '4star', name: 'March 7th', odds: 0.17, avatar: '../10homemadegacha/March7th.png' },
    { rarity: '4star', name: 'Natasha', odds: 0.17, avatar: '../10homemadegacha/Natasha.png' },
    { rarity: '4star', name: 'Pela', odds: 0.17, avatar: '../10homemadegacha/Pela.png' },
    { rarity: '4star', name: 'Qingque', odds: 0.17, avatar: '../10homemadegacha/Qingque.png' },
    { rarity: '4star', name: 'Sampo', odds: 0.17, avatar: '../10homemadegacha/Sampo.png' },
    { rarity: '4star', name: 'Serval', odds: 0.17, avatar: '../10homemadegacha/Serval.png' },
    { rarity: '4star', name: 'Sushang', odds: 0.17, avatar: '../10homemadegacha/Sushang.png' },
    { rarity: '4star', name: 'Tingyun', odds: 0.17, avatar: '../10homemadegacha/Tingyun.png' },
    { rarity: '4star', name: 'Yukong', odds: 0.17, avatar: '../10homemadegacha/Yukong.png' },
    { rarity: '4star', name: 'Luka', odds: 0.17, avatar: '../10homemadegacha/Luka.png' },
    { rarity: '5star', name: 'Bailu', odds: 0.04285714286, avatar: '../10homemadegacha/Bailu.png' },
    { rarity: '5star', name: 'Bronya', odds: 0.04285714286, avatar: '../10homemadegacha/Bronya.png' },
    { rarity: '5star', name: 'Clara', odds: 0.04285714286, avatar: '../10homemadegacha/Clara.png' },
    { rarity: '5star', name: 'Gepard', odds: 0.04285714286, avatar: '../10homemadegacha/Gepard.png' },
    { rarity: '5star', name: 'Himeko', odds: 0.04285714286, avatar: '../10homemadegacha/Himeko.png' },
    { rarity: '5star', name: 'Welt', odds: 0.04285714286, avatar: '../10homemadegacha/Welt.png' },
    { rarity: '5star', name: 'Yanqing', odds: 0.04285714286, avatar: '../10homemadegacha/Yanqing.png' },
    { rarity: '5star', name: 'But the Battle Is not Over', odds: 0.04285714286, avatar: '../10homemadegacha/LCBronya.png' },
    { rarity: '5star', name: 'In The Name of the World', odds: 0.04285714286, avatar: '../10homemadegacha/LCWelt.png' },
    { rarity: '5star', name: 'Moment of Victory', odds: 0.04285714286, avatar: '../10homemadegacha/LCGepard.png' },
    { rarity: '5star', name: 'Night on the Milky Way', odds: 0.04285714286, avatar: '../10homemadegacha/LCHimeko.png' },
    { rarity: '5star', name: 'Something Irreplaceable', odds: 0.04285714286, avatar: '../10homemadegacha/LCClara.png' },
    { rarity: '5star', name: 'Sleep Like the Dead', odds: 0.04285714286, avatar: '../10homemadegacha/LCYanqing.png' },
    { rarity: '5star', name: 'Time Waits for No One', odds: 0.04285714286, avatar: '../10homemadegacha/LCBailu.png' },
    { rarity: '4star', name: '4 Star lightcone (21 in total)', odds:2.55, avatar: '../10homemadegacha/4star.png'},
];

// Initialize click count
let clickCount = 0;

summonButton.addEventListener('click', () => {
    resultDiv.innerHTML = ''; // Clear previous results

    //Can't believe all I spent 2 hour to make the result only 10 not 11, all I have to do is to make 'i < 10' to 'i < 9'
    for (let i = 0; i < 9; i++) {
        
        const randomNumber = Math.random() * 100;
        let accumulatedOdds = 0;

        for (const character of characters) {
            accumulatedOdds += character.odds;

            if (randomNumber <= accumulatedOdds) {
                 // Define a CSS class based on the rarity
            let rarityClass = '';
            switch (character.rarity) {
                case '3star':
                    rarityClass = 'rarity-3star';
                    break;
                case '4star':
                    rarityClass = 'rarity-4star';
                    break;
                case '5star':
                    rarityClass = 'rarity-5star';
                    break;
                default:
                    rarityClass = '';
                    break;
            }
                resultDiv.innerHTML += `
                <div class="${rarityClass}">
                <p>You summoned ${character.name}</p>
                <img src="${character.avatar}">
                </div>
                `;
                
                break;
            }
        }
    }
    // Increment the click count by 10
    clickCount += 10;

    // Update the click count displayed on the page
    clickCountSpan.textContent = clickCount;

    // You can add additional logic here for character summoning if needed
  // Check if the clickCount is a multiple of 10 and summon a 4star character if available
  if (clickCount >= 10 && clickCount % 10 === 0 && clickCount % 90 !== 0) {
    const fourStarCharacters = characters.filter(character => character.rarity === '4star');
    const randomIndex = Math.floor(Math.random() * fourStarCharacters.length);
    const character = fourStarCharacters[randomIndex];

    if (character) {
                 // Define a CSS class based on the rarity
                 let rarityClass = '';
                 switch (character.rarity) {
                     case '3star':
                         rarityClass = 'rarity-3star';
                         break;
                     case '4star':
                         rarityClass = 'rarity-4star';
                         break;
                     case '5star':
                         rarityClass = 'rarity-5star';
                         break;
                     default:
                         rarityClass = '';
                         break;
                 }
                     resultDiv.innerHTML += `
                     <div class="${rarityClass}">
                     <p>You summoned ${character.name}</p>
                     <img src="${character.avatar}">
                     </div>
        `;
        }
     }

     // Check if the clickCount is a multiple of 90 and summon a 5star character if available
  if (clickCount >= 90 && clickCount % 90 === 0) {
    const fiveStarCharacters = characters.filter(character => character.rarity === '5star');
    const randomIndex = Math.floor(Math.random() * fiveStarCharacters.length);
    const character = fiveStarCharacters[randomIndex];

    if (character) {
                 // Define a CSS class based on the rarity
                 let rarityClass = '';
                 switch (character.rarity) {
                     case '3star':
                         rarityClass = 'rarity-3star';
                         break;
                     case '4star':
                         rarityClass = 'rarity-4star';
                         break;
                     case '5star':
                         rarityClass = 'rarity-5star';
                         break;
                     default:
                         rarityClass = '';
                         break;
                 }
                     resultDiv.innerHTML += `
                     <div class="${rarityClass}">
                     <p>You summoned ${character.name}</p>
                     <img src="${character.avatar}">
                     </div>
        `;
        }
     }
});

// Add a click event listener to the "Display One Result" button
displayOneResultButton.addEventListener('click', () => {
    // Clear previous results
    resultDiv.innerHTML = '';

    // Simulate summoning one character
    const randomNumber = Math.random() * 100;
    let accumulatedOdds = 0;

    for (const character of characters) {
        accumulatedOdds += character.odds;

        if (randomNumber <= accumulatedOdds) {
                 // Define a CSS class based on the rarity
                 let rarityClass = '';
                 switch (character.rarity) {
                     case '3star':
                         rarityClass = 'rarity-3star';
                         break;
                     case '4star':
                         rarityClass = 'rarity-4star';
                         break;
                     case '5star':
                         rarityClass = 'rarity-5star';
                         break;
                     default:
                         rarityClass = '';
                         break;
                 }
                     resultDiv.innerHTML += `
                     <div class="${rarityClass}">
                     <p>You summoned ${character.name}</p>
                     <img src="${character.avatar}">
                     </div>
            `;
            break;
        }
    }
    // Increment the click count by 1
    clickCount ++;

    // Update the click count displayed on the page
    clickCountSpan.textContent = clickCount;

  // Check if the clickCount is a multiple of 10 and summon a 4star character if available
  if (clickCount % 10 === 0 && clickCount % 90 !== 0) {
        // Clear previous results
        resultDiv.innerHTML = '';
    const fourStarCharacters = characters.filter(character => character.rarity === '4star');
    const randomIndex = Math.floor(Math.random() * fourStarCharacters.length);
    const character = fourStarCharacters[randomIndex];

    if (character) {
                 // Define a CSS class based on the rarity
                 let rarityClass = '';
                 switch (character.rarity) {
                     case '3star':
                         rarityClass = 'rarity-3star';
                         break;
                     case '4star':
                         rarityClass = 'rarity-4star';
                         break;
                     case '5star':
                         rarityClass = 'rarity-5star';
                         break;
                     default:
                         rarityClass = '';
                         break;
                 }
                     resultDiv.innerHTML += `
                     <div class="${rarityClass}">
                     <p>You summoned ${character.name}</p>
                     <img src="${character.avatar}">
                     </div>
        `;
        }
     }

     // Check if the clickCount is a multiple of 90 and summon a 5star character if available
  if (clickCount % 90 === 0) {
        // Clear previous results
        resultDiv.innerHTML = '';
    const fiveStarCharacters = characters.filter(character => character.rarity === '5star');
    const randomIndex = Math.floor(Math.random() * fiveStarCharacters.length);
    const character = fiveStarCharacters[randomIndex];

    if (character) {
                 // Define a CSS class based on the rarity
                 let rarityClass = '';
                 switch (character.rarity) {
                     case '3star':
                         rarityClass = 'rarity-3star';
                         break;
                     case '4star':
                         rarityClass = 'rarity-4star';
                         break;
                     case '5star':
                         rarityClass = 'rarity-5star';
                         break;
                     default:
                         rarityClass = '';
                         break;
                 }
                     resultDiv.innerHTML += `
                     <div class="${rarityClass}">
                     <p>You summoned ${character.name}</p>
                     <img src="${character.avatar}">
                     </div>
        `;
        }
     }
});

const audio = document.getElementById('audio');
const playStopButton = document.getElementById('playStopButton');

playStopButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playStopButton.style.backgroundImage = "url('../10homemadegacha/playbutton.png')";
  } else {
    audio.pause();
    audio.currentTime = 0;
    playStopButton.style.backgroundImage = "url('../10homemadegacha/stopbutton.png')";
  }
});

// Sfx for button 
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");

displayOneResultButton.addEventListener("mouseover", () => {
    hoverSound.currentTime = 0; // Rewind sound to the beginning
    hoverSound.play();
});

displayOneResultButton.addEventListener("click", () => {
    clickSound.currentTime = 0; // Rewind sound to the beginning
    clickSound.play();
});

summonButton.addEventListener("mouseover", () => {
    hoverSound.currentTime = 0; // Rewind sound to the beginning
    hoverSound.play();
});

summonButton.addEventListener("click", () => {
    clickSound.currentTime = 0; // Rewind sound to the beginning
    clickSound.play();
});

playStopButton.addEventListener('click', () => {
    hoverSound.currentTime = 0; // Rewind sound to the beginning
    hoverSound.play();
});