import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useEffect, useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

//Funktion för att acceptera en voice input, så att användaren kan tala istället för att skriva
const VoiceRecognition = ({ onVoiceSubmit }: { onVoiceSubmit: (text: string) => void }) => {
    const [isListening, setIsListening] = useState<boolean>(false);

    const {
        transcript,
        resetTranscript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        if (!listening && transcript.trim()) {
            onVoiceSubmit(transcript.trim());
            resetTranscript();
        }
    }, [listening])

    const handleMicClick = () => {
        if (listening) {
            SpeechRecognition.stopListening();
            setIsListening(false);
            if (transcript.trim()) {
                onVoiceSubmit(transcript);
                resetTranscript();
            }
        } else {
            setIsListening(true);
            resetTranscript();
            SpeechRecognition.startListening({ continuous: false, language: "sv-SE" });
        }


    }
    if (!browserSupportsSpeechRecognition) {
        return <span>Your webbrowser does not support voice-recognition</span>
    }
    return (
        <button onClick={handleMicClick} className="ml-2 p-3 rounded-full bg-indigo-600 text-white">
            {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
        </button>
    )

}

export default VoiceRecognition