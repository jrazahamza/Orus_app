import React from 'react'

function FlightListCard() {
  return (
    <>
    <div class="card flight-card">

        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img src="https://hailogics-ours.netlify.app/images/emirate.png" alt="Airline Logo" class="airline-logo" />
                <div class="ms-3">
                    <h5 class="airline-name">Emirates Airlines</h5>
                    <small class="text-muted">Operated by XYZ Airlines</small>
                </div>
            </div>
            <div class="text-end d-flex">
                <p class="m-0 stops-info">2 Stops <span class="travel-time">2h 12m</span></p>
                <span class="badge fastest-badge">Fastest</span>
            </div>
        </div>

        <div class="route-section mt-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="text-start">
                    <p class="city-name m-0">Cairo<br /><small class="flight-time">02:00 am</small></p>                                                        
                </div>
                <div class="plane-icon flight-icon-between">
                    <i class="fas fa-plane-departure bet-line">                                                        
                        <img class="line-flight-between" src="https://hailogics-ours.netlify.app/images/flight-between-line.png" alt="" />                                                                
                    </i>
                    <small class="layover">Belgium</small>
                </div>
                <div class="flight-icon">
                    <span class="flight-icon-svg"><svg width="30" height="39" viewBox="0 0 30 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.49699 18.8779C4.98183 18.2585 5.71646 18.0072 6.67208 17.9071L5.84388 12.4543C5.75926 12.1521 5.86231 12.0288 6.07022 12.0006L7.06064 12.1096C7.21672 12.16 7.34371 12.2628 7.42108 12.4505L9.92349 17.2795L15.3415 17.0242L13.6278 3.58206C13.5705 3.25989 13.6623 3.10875 13.9379 3.16285L15.507 3.40503L20.945 16.8148L25.783 16.6275C27.2425 16.7747 28.2963 17.3855 28.719 18.3502C28.9517 18.8823 28.9641 19.1593 28.7516 19.6889C28.3329 20.7249 27.2241 21.375 25.6925 21.5137L20.8624 21.2739L14.929 34.6219L13.3512 34.847C13.0749 34.8966 12.9887 34.7445 13.0567 34.4245L15.2655 21.0037L9.8592 20.6881L7.17848 25.489C7.09537 25.6742 6.96575 25.7772 6.8055 25.8258L5.81124 25.9241C5.60555 25.8951 5.50594 25.7692 5.60174 25.468L6.63169 20.0253C5.67648 19.9133 4.9513 19.6541 4.48841 19.0249C4.44732 18.9658 4.45378 18.9334 4.49699 18.8779Z" fill="#FE6326"></path>
                        </svg>
                    </span>
                </div>
                <div class="plane-icon flight-icon-between">
                    <i class="fas fa-plane-departure">
                        <img class="line-flight-between" src="https://hailogics-ours.netlify.app/images/flight-between-line.png" alt="" />                                                                
                    </i>
                    <small class="layover">Belgium</small>
                </div>                                                    
                <div class="text-end">
                    <p class="city-name m-0">Los Angeles<br /><small class="flight-time">02:00 am</small></p>                                                        
                </div>
            </div>

            <div class="d-flex justify-content-between align-items-center">
                <div class="text-start">
                    <p class="city-name m-0">Los Angeles<br /><small class="flight-time">02:00 am</small></p>                                                        
                </div>
                <div class="plane-icon flight-icon-between">
                    <i class="fas fa-plane-departure bet-line">                                                        
                        <img class="line-flight-between" src="https://hailogics-ours.netlify.app/images/flight-between-line.png" alt="" />                                                                
                    </i>
                    <small class="layover">Belgium</small>
                </div>
                <div class="flight-icon">
                    <svg width="26" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2178 16.6717C24.7269 16.0444 23.9829 15.7899 23.0152 15.6886L23.8539 10.1667C23.9396 9.86069 23.8352 9.7359 23.6247 9.70727L22.6217 9.8177C22.4637 9.8687 22.3351 9.97282 22.2567 10.1629L19.7226 15.0531L14.2359 14.7945L15.9714 1.18212C16.0294 0.85587 15.9364 0.702811 15.6574 0.757603L14.0684 1.00285L8.56147 14.5825L3.66224 14.3928C2.18418 14.5419 1.11706 15.1604 0.689004 16.1374C0.453363 16.6761 0.44076 16.9567 0.655964 17.493C1.08001 18.5421 2.20281 19.2004 3.75386 19.3409L8.64508 19.0981L14.6537 32.6152L16.2515 32.8431C16.5312 32.8933 16.6186 32.7393 16.5497 32.4153L14.3129 18.8244L19.7877 18.5048L22.5024 23.3665C22.5865 23.5541 22.7178 23.6584 22.8801 23.7076L23.8869 23.8071C24.0952 23.7778 24.1961 23.6503 24.0991 23.3453L23.0561 17.8336C24.0234 17.7202 24.7578 17.4577 25.2265 16.8205C25.2681 16.7607 25.2616 16.7279 25.2178 16.6717Z" fill="#FE6326"></path>
                        </svg>                                                            
                    
                </div>
                <div class="plane-icon flight-icon-between">
                    <i class="fas fa-plane-departure">
                        <img class="line-flight-between" src="https://hailogics-ours.netlify.app/images/flight-between-line.png" alt="" />                                                                 
                    </i>
                    <small class="layover">Belgium</small>
                </div>                                                    
                <div class="text-end">
                    <p class="city-name m-0">Cairo<br /><small class="flight-time">02:00 am</small></p>                                                        
                </div>
            </div>
        </div>                           
        <div class="flight-price-detai-select d-flex justify-content-between align-items-center mt-4">
            <div class="flight-price">
                <h4 class="price">$130.95</h4>
            </div>
            <div class="flight-detail">
                <p class="flight-details">Wed 12 | Economy | 2 seats | Round trip</p>
            </div>                                                
            <button class="btn btn-select" fdprocessedid="xb271so">Select</button>
        </div>
    </div>

    </>
  )
}

export default FlightListCard
