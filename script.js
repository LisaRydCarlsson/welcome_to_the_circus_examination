// Hämta elementet med id "enter"
const enterSection = document.getElementById('enter');

// Skapa ett h2-element för "Welcome to the"
const h2Element = document.createElement('h2');
h2Element.textContent = 'welcome to the';

// Skapa ett h1-element för "CirkuS"
const h1Element = document.createElement('h1');
h1Element.textContent = 'CirkuS';

// Lägg till h2 och h1 i "enter"-sektionen
enterSection.appendChild(h2Element);
enterSection.appendChild(h1Element);
