const text = "HuyuNeon";
const textContainer = document.getElementById("name");
let currentIndex = 0;

function typeText() {
    if (currentIndex < text.length) {
        textContainer.innerText += text.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeText, 100);
    }
}

typeText();