function validate()
{
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.getElementById('input').value;
    window.speechSynthesis.speak(speech);
    document.getElementById('input').value = '';
};