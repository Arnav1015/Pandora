
import React, { useEffect, useState } from 'react';

const SpeechRecognitionComponent = () => {
  const [texts, setTexts] = useState([]);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const initializeSpeechRecognition = () => {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      const recognition = new SpeechRecognition();
      recognition.interimResults = true;

      recognition.addEventListener('result', handleSpeechResult);
      recognition.addEventListener('end', () => recognition.start());

      setRecognition(recognition);
    };

    initializeSpeechRecognition();

    return () => {
      if (recognition) {
        recognition.removeEventListener('result', handleSpeechResult);
        recognition.removeEventListener('end', () => recognition.start());
        recognition.stop();
      }
    };
  }, []); // Only run this effect once when the component mounts

  const handleSpeechResult = (event) => {
    let newTexts = [...texts];

    for (let i = 0; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      newTexts.push(transcript);

      if (event.results[i].isFinal) {
        handleFinalTranscript(transcript);
      }
    }

    setTexts(newTexts);
  };

  const handleFinalTranscript = (text) => {
    if (text.includes('how are you')) {
      addResponse('I am fine');
    } else if (text.includes('what\'s your name') || text.includes('what is your name')) {
      addResponse('My Name is Pandora');
    } else if (text.includes('open YouTube')) {
      addResponse('Opening YouTube channel');
      window.open('https://www.youtube.com');
    }
  };

  const addResponse = (response) => {
    setTexts(prevTexts => [...prevTexts, response]);
  };

  return (
    <div className="texts">
      {texts.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};

export default SpeechRecognitionComponent;
