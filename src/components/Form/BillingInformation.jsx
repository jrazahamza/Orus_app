import React from 'react'

function BillingInformation() {
  return (
    <>
        <div class="card mb-3">
            <div class="card-body">
                <h5>Billing Information</h5>
                <form>
                    <div class="row mb-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First Name" required="" fdprocessedid="htk8vm" /> 
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last Name" required="" fdprocessedid="zcu6x" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <input type="tel" class="form-control" placeholder="Contact Number" required="" fdprocessedid="7vkw7l" />
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email Address" required="" fdprocessedid="80k3u7" />
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" id="text-alerts" />
                        <label class="form-check-label" for="text-alerts">
                            Receive text alerts about this trip.
                        </label>
                    </div>
                </form>
            </div>
        </div>      
    </>
  )
}

export default BillingInformation
