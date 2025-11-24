import React, { useState, useEffect, useRef, useCallback } from 'react';
import './VoiceAssistant.css';

// Define types for Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
  error: unknown;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  lang: string;
  interimResults: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onstart: ((this: ISpeechRecognition, ev: Event) => void) | null;
  onend: ((this: ISpeechRecognition, ev: Event) => void) | null;
  onresult: ((this: ISpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
  onerror: ((this: ISpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
}

interface IWindow extends Window {
  webkitSpeechRecognition: new () => ISpeechRecognition;
  SpeechRecognition: new () => ISpeechRecognition;
}

// Knowledge base for the website
const knowledgeBase = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: "Hello! I am the voice assistant for Shreyas's portfolio. Ask me about his projects, skills, or experience."
  },
  {
    keywords: ['who is shreyas', 'about', 'introduction', 'who are you'],
    response: "Shreyas is a developer passionate about building innovative solutions. He specializes in full-stack development, AI, and robotics. You can find more details in the About Me section."
  },
  {
    keywords: ['projects', 'work', 'portfolio', 'what has he built'],
    response: "Shreyas has worked on several exciting projects, including a Connect 4 AI, a robotic arm simulation, and this interactive portfolio website. Check out the Projects section for demos and code."
  },
  {
    keywords: ['skills', 'technologies', 'stack', 'languages'],
    response: "Shreyas is proficient in Python, TypeScript, React, C++, and various AI frameworks. He also has experience with robotics and embedded systems."
  },
  {
    keywords: ['contact', 'email', 'reach out', 'hire'],
    response: "You can contact Shreyas via email or connect with him on LinkedIn. The links are available in the Contact section at the bottom of the page."
  },
  {
    keywords: ['resume', 'cv', 'experience', 'job'],
    response: "Shreyas's resume details his professional experience and education. You can view or download it from the Resume section."
  },
  {
    keywords: ['robot', 'robotics', 'arm'],
    response: "The Robots section showcases 3D models of robotic projects, including a PlugBot and a StretchBot. Feel free to interact with them!"
  },
  {
    keywords: ['stop', 'quiet', 'shh'],
    response: "Okay, I'll stop talking.",
    action: 'stop'
  }
];

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [statusText, setStatusText] = useState('');
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const synth = window.speechSynthesis;

  const speak = useCallback((text: string) => {
    if (synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => {
        setIsSpeaking(true);
        setStatusText("Speaking...");
    };
    utterance.onend = () => {
        setIsSpeaking(false);
        setStatusText('');
    };
    
    // Select a nice voice if available
    const voices = synth.getVoices();
    const preferredVoice = voices.find(voice => voice.name.includes('Google US English') || voice.name.includes('Samantha'));
    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }

    synth.speak(utterance);
  }, [synth]);

  const handleCommand = useCallback((command: string) => {
    let response = "I'm not sure about that. Try asking about projects, skills, or contact info.";
    let action: string | undefined = undefined;

    // Simple keyword matching
    for (const item of knowledgeBase) {
      if (item.keywords.some(keyword => command.includes(keyword))) {
        response = item.response;
        action = item.action;
        break;
      }
    }

    if (action === 'stop') {
        synth.cancel();
        setIsSpeaking(false);
        setStatusText('');
        return;
    }

    speak(response);
  }, [speak, synth]);

  useEffect(() => {
    // Initialize Speech Recognition
    const { webkitSpeechRecognition, SpeechRecognition } = window as unknown as IWindow;
    const SpeechRecognitionConstructor = SpeechRecognition || webkitSpeechRecognition;

    if (SpeechRecognitionConstructor) {
      recognitionRef.current = new SpeechRecognitionConstructor();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setStatusText("Listening...");
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        // Only clear status if we're not about to speak
        if (!synth.speaking) {
            setTimeout(() => setStatusText(''), 2000);
        }
      };

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        setStatusText(`"${transcript}"`);
        handleCommand(transcript);
      };

      recognitionRef.current.onerror = (event: SpeechRecognitionEvent) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
        setStatusText("Error listening. Try again.");
        setTimeout(() => setStatusText(''), 3000);
      };
    } else {
      console.warn("Speech Recognition API not supported in this browser.");
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      synth.cancel();
    };
  }, [handleCommand, synth]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Voice assistant is not supported in this browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      // Stop speaking if currently speaking
      if (isSpeaking) {
        synth.cancel();
        setIsSpeaking(false);
      }
      recognitionRef.current.start();
    }
  };

  return (
    <div className="voice-assistant-container">
      <div className={`voice-status ${statusText ? 'visible' : ''}`}>
        {statusText}
      </div>
      <button 
        className={`voice-btn ${isListening ? 'listening' : ''} ${isSpeaking ? 'speaking' : ''}`}
        onClick={toggleListening}
        title="AI Assistant"
      >
        {isListening ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* Robot Base */}
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <circle cx="12" cy="5" r="2"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="16" x2="8" y2="16"></line>
              <line x1="16" y1="16" x2="16" y2="16"></line>
              {/* Microphone Overlay */}
              <g transform="translate(14, 14) scale(0.4)">
                <circle cx="12" cy="12" r="14" fill="rgba(255, 50, 50, 0.8)" stroke="none" />
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="white" strokeWidth="3"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="3"></path>
                <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="3"></line>
                <line x1="8" y1="23" x2="16" y2="23" stroke="white" strokeWidth="3"></line>
              </g>
            </svg>
        ) : isSpeaking ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <circle cx="12" cy="5" r="2"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="16" x2="8" y2="16"></line>
              <line x1="16" y1="16" x2="16" y2="16"></line>
              <path d="M9 19h6"></path>
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* Robot Base */}
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <circle cx="12" cy="5" r="2"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="16" x2="8" y2="16"></line>
              <line x1="16" y1="16" x2="16" y2="16"></line>
              {/* Microphone Icon (Small, top right) */}
              <g transform="translate(12, -2) scale(0.5)">
                 <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor" fillOpacity="0.2"></path>
                 <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                 <line x1="12" y1="19" x2="12" y2="23"></line>
              </g>
            </svg>
        )}
      </button>
    </div>
  );
};

export default VoiceAssistant;
