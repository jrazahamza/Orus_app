import React from 'react'

function SuggestedOrus() {
  return (
    <>
    <div class="suggested-section">
        <h6 class="sugested-h6">Suggested By ORUS</h6>
        <div class="suggested-box">
            <SuggestedCard />
            <ShowDetailsCard />
            <SuggestedCard /> 
            <AiAssistant />                                   
        </div>                                    
    </div>
    </>
  )
}

export default SuggestedOrus
