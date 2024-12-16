import React from 'react'

function CheckoutHeader() {
  return (
    <>
    
    <div class="card mb-3 border">
        <div class="card-body d-flex justify-content-between">
        <h5 class="card-title">Superior room - 1 double bed or 2 twin beds</h5>
        
        <div class="price-div">
            <p class="price">$240/night</p>
        </div>
        </div>
        <div class="card-header">
            <div class="row">
            <div class="col-lg-2">
                <img src="images/cvk.png" alt="" />
            </div>
            <div class="col-lg-10">
                <p class="card-text">
                <strong>CVK Park Bosphorus Hotel Istanbul</strong><br />
                <span class="svg-icon"><svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 0.695312C3.20467 0.695312 0.523438 3.25963 0.523438 6.4104C0.523438 7.91089 1.20738 9.90632 2.55622 12.3414C3.63947 14.2965 4.89268 16.0644 5.5445 16.9441C5.65464 17.0944 5.79865 17.2166 5.96485 17.3009C6.13106 17.3852 6.31478 17.4291 6.50112 17.4291C6.68746 17.4291 6.87118 17.3852 7.03739 17.3009C7.20359 17.2166 7.3476 17.0944 7.45774 16.9441C8.10844 16.0644 9.36277 14.2965 10.446 12.3414C11.7926 9.90706 12.4766 7.91164 12.4766 6.4104C12.4766 3.25963 9.79533 0.695312 6.5 0.695312ZM6.5 9.0625C6.02718 9.0625 5.56498 8.92229 5.17184 8.65961C4.7787 8.39692 4.47229 8.02356 4.29135 7.58673C4.11041 7.1499 4.06307 6.66922 4.15531 6.20549C4.24755 5.74175 4.47524 5.31578 4.80957 4.98145C5.14391 4.64711 5.56988 4.41943 6.03361 4.32719C6.49735 4.23494 6.97802 4.28228 7.41485 4.46323C7.85168 4.64417 8.22505 4.95058 8.48773 5.34372C8.75042 5.73685 8.89062 6.19905 8.89062 6.67188C8.88993 7.3057 8.63784 7.91336 8.18966 8.36154C7.74148 8.80972 7.13382 9.06181 6.5 9.0625Z" fill="#DDD507"></path>
                    </svg>
                    </span>  Gümüssuyu Mah. İnönü Cad. No:8, Istanbul 34437
                </p>
            </div>
            </div>
        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-between">
                <div class="svk-card-fo-lef">
                    <p>Thursday, Dec 8<br /><small>Check-in</small></p>
                </div>
                <div class="svk-card-fo-cen">
                    <img src="images/cvk-bulding-icon.png" alt="" />
                </div>
                <div class="svk-card-fo-righ">
                    <p>Friday, Dec 9<br /><small>Check-out</small></p>
                </div>
            </div>
        </div>
    </div>      
    </>
  )
}

export default CheckoutHeader
