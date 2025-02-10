const dogFacts = [
    "Dogs have a sense of time and can predict future events, such as regular walk times.",
    "A dog's sense of smell is at least 40 times better than a human's.",
    "Dogs have been our companions for over 14,000 years.",
    "The Basenji dog is known as the 'barkless dog' because it doesn't bark like other dogs.",
    "Dogs can understand up to 250 words and gestures."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * dogFacts.length);
    const factElement = document.getElementById('fact');
    factElement.textContent = dogFacts[randomIndex];
}
