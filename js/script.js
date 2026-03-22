const element = document.querySelector('.typing-text');

if (element) {
    const textToType = element.getAttribute('data-text') || "";
    let charIndex = 0;
    const typingSpeed = 50;

    element.innerHTML = "";

    function startTyping() {
        if (charIndex < textToType.length) {
            const currentChar = textToType.charAt(charIndex);

            if (currentChar === '|') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += currentChar;
            }

            charIndex++;
            setTimeout(startTyping, typingSpeed);
        }
    }

    startTyping();
} else {
    console.error("Erro: A classe '.typing-text' não foi encontrada no HTML.");
}