import React from 'react'

function AiAssistant() {
  return (
    <>
    <div class="ai-assistant-container">
        <div class="expand-btn">
            <i class="bi bi-arrow-up-right"></i>
        </div>
        <div class="ai-assistant-logo">
            <img src="images/your-travel-ai-ass.png" alt="AI Assistant Logo" />
        </div>
        <h2 class="ai-assistant-heading">Your Travel AI Assistant</h2>
        
        <div class="ai-input-group">
            <input type="text" placeholder="Enter a prompt here" />
            <button class="input-group-btn">
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </div>      
    </>
  )
}

export default AiAssistant
