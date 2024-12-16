import React from 'react'

function PaymentOption() {
  return (
    <>
    <div class="card mb-3">
        <div class="card-body">
            <h5>Payment Option</h5>
            <hr />
            <div class="row mb-3 text-center">
                <div class="col cash-on-deliver">
                    <span><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3.43115V29.4312" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M23 11.4312C23 10.7745 22.8707 10.1244 22.6194 9.51774C22.3681 8.91111 21.9998 8.35991 21.5355 7.89562C21.0712 7.43133 20.52 7.06303 19.9134 6.81175C19.3068 6.56048 18.6566 6.43115 18 6.43115H13.5C12.1739 6.43115 10.9021 6.95794 9.96447 7.89562C9.02678 8.8333 8.5 10.1051 8.5 11.4312C8.5 12.7572 9.02678 14.029 9.96447 14.9667C10.9021 15.9044 12.1739 16.4312 13.5 16.4312H19C20.3261 16.4312 21.5979 16.9579 22.5355 17.8956C23.4732 18.8333 24 20.1051 24 21.4312C24 22.7572 23.4732 24.029 22.5355 24.9667C21.5979 25.9044 20.3261 26.4312 19 26.4312H13C11.6739 26.4312 10.4021 25.9044 9.46447 24.9667C8.52678 24.029 8 22.7572 8 21.4312" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </span>
                    <label for="cash-on-delivery">Cash on Delivery</label>
                    <input type="radio" id="cash-on-delivery" name="payment-method" />
                </div>
                <div class="col cash-on-deliver">
                    <span class="svg-icon"><svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.662 0.431152C24.6479 2.03468 25 3.63821 25 5.56244C25 11.9765 19.4131 20.6585 14.8122 26.4312H4.2723L0 1.73688L9.53052 1.09548L11.831 18.7571C13.8028 15.5501 16.4554 10.0752 16.4554 6.57036C16.4554 4.64613 16.1268 3.36331 15.4695 2.05759L23.662 0.431152Z" fill="#3D95CE"></path>
                    </svg>                                    
                    </span>
                    <label for="cash-on-delivery">Venmo</label>
                    <input type="radio" id="cash-on-delivery" name="payment-method" /> 
                </div>
                <div class="col cash-on-deliver">
                    <span><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3.43115V29.4312" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M23 11.4312C23 10.7745 22.8707 10.1244 22.6194 9.51774C22.3681 8.91111 21.9998 8.35991 21.5355 7.89562C21.0712 7.43133 20.52 7.06303 19.9134 6.81175C19.3068 6.56048 18.6566 6.43115 18 6.43115H13.5C12.1739 6.43115 10.9021 6.95794 9.96447 7.89562C9.02678 8.8333 8.5 10.1051 8.5 11.4312C8.5 12.7572 9.02678 14.029 9.96447 14.9667C10.9021 15.9044 12.1739 16.4312 13.5 16.4312H19C20.3261 16.4312 21.5979 16.9579 22.5355 17.8956C23.4732 18.8333 24 20.1051 24 21.4312C24 22.7572 23.4732 24.029 22.5355 24.9667C21.5979 25.9044 20.3261 26.4312 19 26.4312H13C11.6739 26.4312 10.4021 25.9044 9.46447 24.9667C8.52678 24.029 8 22.7572 8 21.4312" stroke="#FA8232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </span>
                    <label for="cash-on-delivery">Paypal</label>
                    <input type="radio" id="cash-on-delivery" name="payment-method" />
                </div>
                <div class="col cash-on-deliver">
                    <span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5486 26.2678C14.595 32.4326 6.5559 27.2747 1.40981 24.1419C1.09137 23.9444 0.550136 24.188 1.01973 24.7274C2.73415 26.8062 8.35267 31.8166 15.6865 31.8166C23.0253 31.8166 27.3913 27.8122 27.9374 27.1137C28.4799 26.421 28.0967 26.0389 27.5484 26.2678H27.5486ZM31.1865 24.2587C30.8387 23.8057 29.0713 23.7213 27.9591 23.8579C26.8451 23.9906 25.173 24.6714 25.3184 25.0802C25.393 25.2333 25.5453 25.1646 26.3105 25.0958C27.0779 25.0192 29.2275 24.748 29.6755 25.3335C30.1255 25.9231 28.9898 28.7318 28.7824 29.1848C28.582 29.6378 28.859 29.7546 29.2354 29.4529C29.6067 29.1513 30.2787 28.3703 30.7298 27.2651C31.1777 26.1538 31.4508 24.6036 31.1864 24.2587H31.1865Z" fill="#FF9900"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8434 13.6871C18.8434 15.3047 18.8843 16.6536 18.0667 18.0901C17.4068 19.2581 16.3615 19.9764 15.1937 19.9764C13.5994 19.9764 12.6709 18.7617 12.6709 16.969C12.6709 13.4301 15.8417 12.7878 18.8434 12.7878V13.6871ZM23.0304 23.8072C22.7559 24.0524 22.3588 24.07 22.0494 23.9064C20.6712 22.7619 20.4259 22.2305 19.6668 21.1385C17.3894 23.4627 15.7776 24.1575 12.8228 24.1575C9.33068 24.1575 6.60938 22.0027 6.60938 17.6872C6.60938 14.3179 8.43728 12.0228 11.0357 10.9017C13.2899 9.90883 16.4375 9.73368 18.8434 9.4593V8.92201C18.8434 7.93506 18.9193 6.76717 18.3412 5.91464C17.8331 5.14962 16.8638 4.83426 16.0111 4.83426C14.4286 4.83426 13.0154 5.64593 12.6709 7.32773C12.6007 7.70156 12.3264 8.06948 11.9527 8.08696L7.92325 7.65491C7.58463 7.57883 7.21092 7.30446 7.30435 6.78465C8.23283 1.90284 12.6416 0.431152 16.5891 0.431152C18.6097 0.431152 21.2491 0.968447 22.8434 2.49848C24.864 4.38461 24.6712 6.90146 24.6712 9.64025V16.1106C24.6712 18.0552 25.4771 18.9077 26.2362 19.9589C26.5048 20.3326 26.5632 20.7824 26.2245 21.0625C25.3778 21.7691 23.8711 23.0831 23.042 23.8189L23.0303 23.8072" fill="black"></path>
                    <path d="M27.5486 26.2678C14.595 32.4326 6.5559 27.2747 1.40981 24.1419C1.09137 23.9444 0.550136 24.188 1.01973 24.7274C2.73415 26.8062 8.35267 31.8166 15.6865 31.8166C23.0253 31.8166 27.3913 27.8122 27.9374 27.1137C28.4799 26.421 28.0967 26.0389 27.5484 26.2678H27.5486ZM31.1865 24.2587C30.8387 23.8057 29.0713 23.7213 27.9591 23.8579C26.8451 23.9906 25.173 24.6714 25.3184 25.0802C25.393 25.2333 25.5453 25.1646 26.3105 25.0958C27.0779 25.0192 29.2275 24.748 29.6755 25.3335C30.1255 25.9231 28.9898 28.7318 28.7824 29.1848C28.582 29.6378 28.859 29.7546 29.2354 29.4529C29.6067 29.1513 30.2787 28.3703 30.7298 27.2651C31.1777 26.1538 31.4508 24.6036 31.1864 24.2587H31.1865Z" fill="#FF9900"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8434 13.6871C18.8434 15.3047 18.8843 16.6536 18.0667 18.0901C17.4068 19.2581 16.3615 19.9764 15.1937 19.9764C13.5994 19.9764 12.6709 18.7617 12.6709 16.969C12.6709 13.4301 15.8417 12.7878 18.8434 12.7878V13.6871ZM23.0304 23.8072C22.7559 24.0524 22.3588 24.07 22.0494 23.9064C20.6712 22.7619 20.4259 22.2305 19.6668 21.1385C17.3894 23.4627 15.7776 24.1575 12.8228 24.1575C9.33068 24.1575 6.60938 22.0027 6.60938 17.6872C6.60938 14.3179 8.43728 12.0228 11.0357 10.9017C13.2899 9.90883 16.4375 9.73368 18.8434 9.4593V8.92201C18.8434 7.93506 18.9193 6.76717 18.3412 5.91464C17.8331 5.14962 16.8638 4.83426 16.0111 4.83426C14.4286 4.83426 13.0154 5.64593 12.6709 7.32773C12.6007 7.70156 12.3264 8.06948 11.9527 8.08696L7.92325 7.65491C7.58463 7.57883 7.21092 7.30446 7.30435 6.78465C8.23283 1.90284 12.6416 0.431152 16.5891 0.431152C18.6097 0.431152 21.2491 0.968447 22.8434 2.49848C24.864 4.38461 24.6712 6.90146 24.6712 9.64025V16.1106C24.6712 18.0552 25.4771 18.9077 26.2362 19.9589C26.5048 20.3326 26.5632 20.7824 26.2245 21.0625C25.3778 21.7691 23.8711 23.0831 23.042 23.8189L23.0303 23.8072" fill="black"></path>
                    </svg>
                    </span>
                    <label for="cash-on-delivery">Amazon Pay</label>
                    <input type="radio" id="cash-on-delivery" name="payment-method" />
                </div>
                <div class="col cash-on-deliver">
                    <span><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M4 13.5437H28V24.4312H4V13.5437Z" fill="#B0210D" stroke="#B0210D" stroke-width="2"></path>
                    <path d="M28 7.43115H4C3.44772 7.43115 3 7.87887 3 8.43115V24.4312C3 24.9834 3.44772 25.4312 4 25.4312H28C28.5523 25.4312 29 24.9834 29 24.4312V8.43115C29 7.87887 28.5523 7.43115 28 7.43115Z" fill="#FF4200" fill-opacity="0.12" stroke="#FE6326" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M21 21.4312H25" stroke="#FE6326" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M15 21.4312H17" stroke="#FE6326" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M3 12.5437H29" stroke="#FE6326" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>                                    
                    </span>
                    <label for="cash-on-delivery">Debid/Credit Card</label>
                    <input type="radio" id="cash-on-delivery" name="payment-method" />
                </div>                
            </div>

            <div class="row">
                <div class="col mb-3">
                    <input type="text" class="form-control" placeholder="Name on Card" required="" fdprocessedid="8oemh" />
                </div>
            </div>
            <div class="row">
                <div class="col mb-3">
                    <input type="text" class="form-control" placeholder="Card Number" required="" fdprocessedid="i7qseo" />
                </div>
            </div>
            <div class="row">
                <div class="col mb-3">
                    <input type="text" class="form-control" placeholder="Expire Date" required="" fdprocessedid="5r4zkf" />
                </div>
                <div class="col mb-3">
                    <input type="text" class="form-control" placeholder="CVC" required="" fdprocessedid="xcygcm" />
                </div>
            </div>
            <button type="submit" class="btn cvk-book" fdprocessedid="5lak4">Book now</button>
        </div>
    </div> 
    </>
  )
}

export default PaymentOption
