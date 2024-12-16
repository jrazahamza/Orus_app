import React, { useState } from 'react';

function AiAssistant() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      let generatedResponse = '';
      switch (input.toLowerCase().trim()) {
        case 'hello':
          generatedResponse = 'Hello! How can I assist you today?';
          break;
        case 'what is your name?':
          generatedResponse = 'I am your Travel AI Assistant.';
          break;
        case 'tell me about travel tips':
          generatedResponse = 'Here are some travel tips: Always pack light, carry a power bank, and keep your passport handy!';
          break;
        case 'what is the best time to visit paris?':
          generatedResponse = 'The best time to visit Paris is from April to June or September to November when the weather is pleasant and the crowds are manageable.';
          break;
        case 'how can i book a flight?':
          generatedResponse = 'You can book a flight through online travel agencies like Expedia, Kayak, or directly through airline websites.';
          break;
        case 'recommend a travel destination':
          generatedResponse = 'I recommend visiting Kyoto, Japan! It has beautiful temples, gardens, and a rich cultural history.';
          break;
        case 'what should i pack for a beach vacation?':
          generatedResponse = 'For a beach vacation, pack sunscreen, swimwear, sunglasses, a hat, flip-flops, and a beach towel!';
          break;
        case 'how do i stay safe while traveling?':
          generatedResponse = 'Stay safe by keeping your valuables secure, avoiding unfamiliar or risky areas, and always keeping a copy of important documents.';
          break;
        case 'what is the weather like in london?':
          generatedResponse = 'The weather in London is typically mild, with cool winters and moderate summers. Always carry an umbrella, as it rains often!';
          break;
        case 'can you help me plan a trip?':
          generatedResponse = 'I can help you plan your trip by recommending destinations, creating itineraries, and suggesting things to pack.';
          break;
        default:
          generatedResponse = 'Sorry, I didn’t understand that. Could you please try again?';
          break;
      }

      setResponse(generatedResponse);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="ai-assistant-container">
        <div className="expand-btn">
          <i className="bi bi-arrow-up-right"></i>
        </div>
        <div className="ai-assistant-logo">
          <img src="images/your-travel-ai-ass.png" alt="AI Assistant Logo" />
        </div>
        <h2 className="ai-assistant-heading">Your Travel AI Assistant</h2>

        <div className="ai-input-group">
          <input
            type="text"
            placeholder="Enter a prompt here"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}  
          />
          <button className="input-group-btn" onClick={handleSubmit}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        {response && (
          <div className="ai-response">
            <p>{response}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default AiAssistant;
