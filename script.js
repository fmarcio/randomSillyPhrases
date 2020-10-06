const btn = document.getElementById('btn');
const container = document.getElementById('container');
const sentences = ["Hi! I'm a phrase", "I'm another random phrase", 
"I'll be gone soon", "Look! Another silly phrase"];

//Event

btn.addEventListener('click', () => {
    createPhrase();
});

//functions

function getRandomNum() {
    const pickNumber = Math.random() * sentences.length
    return Math.floor(pickNumber);
};

function createPhrase() {
    const phrase = document.createElement('p');
    phrase.classList.add('notification')
    container.appendChild(phrase);
    
    phrase.innerText = sentences[getRandomNum()];

   setTimeout(() => {
    phrase.remove();
   }, 3000)
}
