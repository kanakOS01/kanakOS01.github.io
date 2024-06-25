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

    const scriptURL = 'https://script.google.com/macros/s/AKfycbySf-7B7HI0X97czxemyGA72-4ZuD3Acp4DuJdwsT2Wpf4PKMSMdZAL6IT1qn9p23Jxeg/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    })

    const sendBtn = document.getElementsByClassName('send-btn')[0];
    console.log(sendBtn.innerText)
    function showMessage() {
        const message = "Thanks for reaching out. Will respond ASAP.";
        sendBtn.innerText = message;
        setTimeout(() => {
            sendBtn.innerHTML = 'Send Message &ThickSpace; <i class="fa-solid fa-paper-plane"></i>'
        }, 2000);
    }

    sendBtn.onclick = showMessage;
});


