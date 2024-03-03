let speech = new SpeechSynthesisUtterance();

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      // Enter key was pressed
      console.log("Enter key was pressed");
      speech.text = document.querySelector("input").value;
      window.speechSynthesis.speak(speech);
      document.getElementById('input').value = ''
    }
  });