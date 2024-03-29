const texts = document.querySelector(".texts");
let speech = new SpeechSynthesisUtterance();
var sp = "";
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    console.log("I Hear You");
    console.log(text);
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      sp = "I am fine";
      texts.appendChild(p);
    }
    if (
      text.includes("hello") ||
      text.includes("Hello")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Hello";
      sp = "Hello";
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText  = "My Name is Pandora";
      sp = "My Name is Pandora";
      texts.appendChild(p);
    }
    if (text.includes("open YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube channel";
      sp = "opening youtube channel";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
    speech.text = sp.value;
    window.speechSynthesis.speak(speech);
  recognition.start();
});

recognition.start();
