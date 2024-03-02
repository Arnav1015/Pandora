import { SpeechToText } from "./SpeechRecognition.js";
const speechToText = new SpeechToText({
    micElementSelector: '.mic-btn',
    outputElementSelector: '.text',
    clearElementSelector: '.clear-everything',
    copyElementSelector: '.copy-text'
});