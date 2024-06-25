    document.addEventListener("DOMContentLoaded", function () {
        const typedTextElement = document.getElementById('typed-text');
        const textToType = "Kanak Tanwar";
        let index = 0;

        function type() {
            if (index < textToType.length) {
                typedTextElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 150); 
            }

        }
                
        type();
    });