const texts = document.querySelector(".texts");

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
  console.log("Hello");
  if (e.results[0].isFinal) {

    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (
      text.includes("hello") ||
      text.includes("Hello")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Hello";
      console.log("Hello2");
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Pandora";
      texts.appendChild(p);
    }
    if (text.includes("open YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube channel";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com");
    }
    if (text.includes("open for blind people page")||("open text to speech")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Text To Speech";
      texts.appendChild(p);
      console.log("opening Text To Speech");
      window.open("TextToSpeech.html");
    }
    if (text.includes("open about us")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening about us page";
      texts.appendChild(p);
      console.log("about us page");
      window.open("about.html");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();