import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { filterActivitiesByDate, filterActivitiesByLocation, filterActivitiesByParticipants, filterActivitiesByPrice, resetFilters } from '../../Redux/Slice/ActivitiesSlice';

function HomeBannerTab() {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [person, setPerson] = useState(0);
  const [price, setPrice] = useState(0);
  const locations = ['Istanbul', 'Ankara', 'Bursa'];
  const [fromLocation, setFromLocation] = useState("Warsaw, Poland");
  const [toLocation, setToLocation] = useState("Paris, France");
  const [departureDate, setDepartureDate] = useState("2024-01-12");
  const [returnDate, setReturnDate] = useState("2024-01-19");
  const [promoCode, setPromoCode] = useState("");



  
  const handleSubmit = () => {
    dispatch(resetFilters());  
    if (price) {
      dispatch(filterActivitiesByPrice(price));
    }
    if (location) {
      dispatch(filterActivitiesByLocation(location));
    }
    if (date) {
      dispatch(filterActivitiesByDate(date));
    }
    if (person > 0) {
      dispatch(filterActivitiesByParticipants(person));
    }
  };

  return (
    <>
      <div class="banner-table">
        <div class="booking-section">
          <ul class="nav nav-tabs mb-3" id="bookingTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="flights-tab"
                data-bs-toggle="tab"
                href="#flights"
                role="tab"
                aria-controls="flights"
                aria-selected="true"
              >
                <i class="fa fa-plane" aria-hidden="true"></i> Flights
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="stays-tab"
                data-bs-toggle="tab"
                href="#stays"
                role="tab"
                aria-controls="stays"
                aria-selected="false"
              >
                <i class="fa fa-bed" aria-hidden="true"></i> Stays
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="activities-tab"
                data-bs-toggle="tab"
                href="#activities"
                role="tab"
                aria-controls="activities"
                aria-selected="false"
              >
                <i class="fas fa-binoculars"></i> Activities
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="cabs-tab"
                data-bs-toggle="tab"
                href="#cabs"
                role="tab"
                aria-controls="cabs"
                aria-selected="false"
              >
                <i class="fa fa-car" aria-hidden="true"></i> Cabs
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="offers-tab"
                data-bs-toggle="tab"
                href="#offers"
                role="tab"
                aria-controls="offers"
                aria-selected="false"
              >
                <i class="fa fa-car" aria-hidden="true"></i> Special Offers
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="lorem-tab"
                data-bs-toggle="tab"
                href="#lorem"
                role="tab"
                aria-controls="lorem"
                aria-selected="false"
              >
                <i class="fa fa-car" aria-hidden="true"></i> Lorem
              </a>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
      <div className="tab-pane flights-tabs fade show active" id="flights" role="tabpanel" aria-labelledby="flights-tab">
        <div className="row flights-content align-items-center tabs-divider">
          <div className="col-lg-2 col-sm-6 mb-3">
            <Form.Group controlId="fromLocation">
              <Form.Label>
                <i className="fa fa-map-marker" aria-hidden="true"></i> From
              </Form.Label>
              <Form.Control
                type="text"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="col-lg-2 col-sm-6 mb-3">
            <Form.Group controlId="toLocation">
              <Form.Label>
                <i className="fa fa-map-marker" aria-hidden="true"></i> To
              </Form.Label>
              <Form.Control
                type="text"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="col-lg-2 col-sm-6 mb-3">
            <Form.Group controlId="departureDate">
              <Form.Label>
                <i className="fa fa-calendar-plus-o" aria-hidden="true"></i> Departure
              </Form.Label>
              <Form.Control
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="col-lg-2 col-sm-6 mb-3">
            <Form.Group controlId="returnDate">
              <Form.Label>
                <i className="fa fa-calendar-plus-o" aria-hidden="true"></i> Return
              </Form.Label>
              <Form.Control
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
            <Form.Group controlId="promoCode">
              <span className="promo-code-link" onClick={() => alert('Add Promo Code')}>
                + Add Promo Code
              </span>
              <Form.Control
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
            <Button className="btn show-hotels-btn">Search Flights</Button>
          </div>
        </div>
      </div>

            <div
              class="tab-pane fade tabs-stays"
              id="stays"
              role="tabpanel"
              aria-labelledby="stays-tab"
            >
              <div class="row align-items-center tabs-divider">
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    From
                  </div>
                  <div class="location-value">Warsaw, Poland</div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    Check In
                  </div>
                  <div class="date-value">12 Jan, 2024</div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    Check Out
                  </div>
                  <div class="date-value">19 Jan, 2024</div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    Travelers
                  </div>
                  <div class="travelers-value">
                    2 adults · 0 children · 1 room
                  </div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                  <span class="promo-code-link">+ Add Promo Code</span>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                  <button class="btn show-hotels-btn">Show Hotels</button>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade tabs-activities"
              id="activities"
              role="tabpanel"
              aria-labelledby="activities-tab"
            >
                <Container>
      <Row className="align-items-center tabs-divider">
        <Col lg={2} sm={6} className="mb-3">
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              as="select"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Select location"
            >
              <option value="">Select location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>

        <Col lg={2} sm={6} className="mb-3">
          <Form.Group controlId="activityDate">
            <Form.Label>Activity Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col lg={2} sm={6} className="mb-3">
          <Form.Group controlId="participants">
            <Form.Label>Participants</Form.Label>
            <Form.Control
              type="number"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              placeholder="Enter number of participants"
            />
          </Form.Group>
        </Col>

        <Col lg={2} sm={6} className="mb-3">
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter maximum price"
            />
          </Form.Group>
        </Col>

        <Col lg={2} sm={6} className="mb-3 text-lg-end text-sm-start">
          <Button variant="primary" onClick={handleSubmit}>
            Search Activities
          </Button>
        </Col>
      </Row>
    </Container>
            </div>

            <div
              class="tab-pane fade tabs-cabs"
              id="cabs"
              role="tabpanel"
              aria-labelledby="cabs-tab"
            >
              <div class="row align-items-center tabs-divider">
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">Pick-up Location</div>
                  <div class="location-value">Warsaw, Poland</div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">Drop-off Location</div>
                  <div class="location-value">Krakow, Poland</div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">Pick-up Date</div>
                  <div class="date-value">12 Jan, 2024</div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                  <span class="promo-code-link">+ Add Promo Code</span>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                  <button class="btn show-hotels-btn">Search Cabs</button>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade tabs-offers"
              id="offers"
              role="tabpanel"
              aria-labelledby="offers-tab"
            >
              <div class="row align-items-center tabs-divider">
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">Offer Location</div>
                  <div class="location-value">Warsaw, Poland</div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">Offer Date</div>
                  <div class="date-value">12 Jan, 2024</div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                  <span class="promo-code-link">+ Add Promo Code</span>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                  <button class="btn show-hotels-btn">View Offers</button>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade tabs-lorem"
              id="lorem"
              role="tabpanel"
              aria-labelledby="lorem-tab"
            >
              <div class="row align-items-center tabs-divider">
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">Lorem Ipsum</div>
                  <div class="location-value">Dolor Sit Amet</div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3">
                  <div class="input-label">Lorem Date</div>
                  <div class="date-value">12 Jan, 2024</div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                  <span class="promo-code-link">+ Add Promo Code</span>
                </div>
                <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                  <button class="btn show-hotels-btn">Search Lorem</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBannerTab
