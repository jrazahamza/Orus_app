import React from 'react'

function PayFullPart() {
  return (
    <>
    <div class="card mb-3">
        <div class="card-body">
            <div class="payment-option">
                <div class="form-check form-pay">
                    <div class="form-check-lab">
                    <label class="form-check-label" for="pay-full">Pay in full<br />
                        <small>Pay the total and you are all set.</small></label>
                    </div>
                    <div class="form-check-in">
                    <input class="form-check-input" type="radio" name="payment" id="pay-full" checked="" />
                    </div>                                  
                </div>
                <div class="form-check form-pay-se">
                    <div class="form-check-lab">
                    <label class="form-check-label" for="pay-full">Pay part now, part later <br />
                        <small>Pay $207.43 now, and the rest ($207.43) will be automatically charged on Nov 14, 2022. No extra fees.</small></label>
                    </div>
                    <div class="form-check-in">
                    <input class="form-check-input" type="radio" name="payment" id="pay-full" checked="" />
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default PayFullPart
