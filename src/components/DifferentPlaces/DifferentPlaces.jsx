import React from 'react'

function DifferentPlaces() {
  return (
    <>
      <div class="different-place"> 
        <div class="section-2"> 
            <div class="sec2-heading"><h2 class="sec2-h2">Lorem Ipsum</h2></div> 
            <div class="sec2-tabs-content">
                <div class="tab-section">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="asia-tab" data-bs-toggle="tab" data-bs-target="#asia" type="button" role="tab" aria-controls="asia" aria-selected="true">Asia</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="europe-tab" data-bs-toggle="tab" data-bs-target="#europe" type="button" role="tab" aria-controls="europe" aria-selected="false">Europe</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="north-america-tab" data-bs-toggle="tab" data-bs-target="#north-america" type="button" role="tab" aria-controls="north-america" aria-selected="false">North America</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="middle-east-tab" data-bs-toggle="tab" data-bs-target="#middle-east" type="button" role="tab" aria-controls="middle-east" aria-selected="false">Middle East</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="australia-tab" data-bs-toggle="tab" data-bs-target="#australia" type="button" role="tab" aria-controls="australia" aria-selected="false">Australia</button>
                        </li>
                    </ul>
                    <div class="tab-content mt-4" id="myTabContent">
                        <div class="tab-pane fade show active" id="asia" role="tabpanel" aria-labelledby="asia-tab">
                            <div class="tabs-content">
                                <h1>Asia</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="#" class="btn-discover">Discover</a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="europe" role="tabpanel" aria-labelledby="europe-tab">
                            <div class="tabs-content">
                                <h1>Europe</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="#" class="btn-discover">Discover</a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="north-america" role="tabpanel" aria-labelledby="north-america-tab">
                            <div class="tabs-content">
                                <h1>North America</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="#" class="btn-discover">Discover</a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="middle-east" role="tabpanel" aria-labelledby="middle-east-tab">
                            <div class="tabs-content">
                                <h1>Middle East</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="#" class="btn-discover">Discover</a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="australia" role="tabpanel" aria-labelledby="australia-tab">
                            <div class="tabs-content">
                                <h1>Australia</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="#" class="btn-discover">Discover</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default DifferentPlaces
