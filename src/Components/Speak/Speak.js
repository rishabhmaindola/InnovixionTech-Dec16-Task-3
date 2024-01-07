import React from "react";
import microphone from "../../assets/mic.svg"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Speak = () => {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => 
    SpeechRecognition.startListening({ continuous: true });

  return (
    <div>
      <img src={microphone} alt="Speak" height="40px" width="20px" 
        onClick={startListening}
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
      />
      <p>{transcript}</p>
    </div>
  );
};
export default Speak;