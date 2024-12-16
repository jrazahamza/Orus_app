import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import NavigationalHeader from "../components/NavigationalHeader";
import myImage from '../Images/bg.png';
import { Link } from "react-router-dom";

// IMAGES:
import SoloImage from '../Images/solo2.png';
import CoupleImage from '../Images/couple2.png';
import FamilyImage from '../Images/family2.png';
import FriendsImage from '../Images/friends2.png';
import JANImage from '../Images/jan.png';
import FEBImage from '../Images/feb.png';
import MARCHImage from '../Images/mar.png';
import DECImage from '../Images/apr.png';
import AdventureImage from '../Images/adventue.png';
import  Food from '../Images/foodandent.png';
import Sports from '../Images/sports.png';
import winter from '../Images/winter.png'
import LuxaryImage  from '../Images/Luxary.png';
 import backPacker from '../Images/bagpacker.png';
 import FamilyTraveller  from '../Images/Family tarviller.png';
 import AdventureSeeker  from '../Images/adventue.png';



// HOVERIMAGES
import SoloHoverImage from '../Images/solo.png';
import CoupleHoverImage from '../Images/couple.png';
import FamilyHoverImage from '../Images/family.png';
import FriendsHoverImage from '../Images/friends.png';
import JANHoverImage from '../Images/january.png'
import FEBHoverImage from '../Images/feburary.png'
import MARCHHoverImage from '../Images/march.png'
import DECHoverImage from '../Images/april.png';
import AdventureHoverImage from '../Images/advanture2.png';
import FoodHoverImage from '../Images/foodandent2.png';
import WinterHoverImage from '../Images/winter2.png';
import SportsHoverImage from '../Images/sports2.png';
import LuxaryHoverImage  from '../Images/luxary2.png';
import BackPackerHover  from '../Images/backpacker2.png';
 import FamilyTravellerHover  from '../Images/Familttravel.png';
import AdventureSeekerHover  from '../Images/advanture2.png';

// VIDEOS:
import SoloVideo from '../Images/Animations/Animations/Solo.mp4';
import CoupleVideo from '../Images/Animations/Animations/Couple.mp4';
import FamilyVideo from '../Images/Animations/Animations/Family.mp4';
import FriendsVideo from '../Images/Animations/Animations/Friends.mp4';
import  AdventureVideo from '../Images/Animations/Animations/Adventurer.mp4'
import  FoodVideo from '../Images/Animations/Animations/Food & Enter.mp4'
import WinterVideo  from '../Images/Animations/Animations/Winter Activities.mp4'
import SportsVideo  from '../Images/Animations/Animations/Sport.mp4'
import  LuxaryVideo from '../Images/Animations/Animations/Luxury traveler.mp4'
import  BackPackerVideo from '../Images/Animations/Animations/Backpacker.mp4'
import FamilyTravellerVideo  from '../Images/Animations/Animations/Family traveler.mp4'
import AdventureSeekerVideo  from '../Images/Animations/Animations/Adventure seeker.mp4'


const QuestionsItinerary = () => {
  const questions = [
    {
      id: 1,
      question: "Will you be traveling with a companion?",
      options: [
        {
          label: "Solo",
          img: SoloImage,
          hoverImg: SoloHoverImage,
          description: "Traveling solo allows you to explore at your own pace.",
          video: SoloVideo
        },
        {
          label: "Couple",
          img: CoupleImage,
          hoverImg: CoupleHoverImage,
          description: "Enjoy a romantic getaway with your significant other.",
          video: CoupleVideo
        },
        {
          label: "Family",
          img: FamilyImage,
          hoverImg: FamilyHoverImage,
          description: "Perfect for family bonding and shared experiences.",
          video: FamilyVideo
        },
        {
          label: "Friends",
          img: FriendsImage,
          hoverImg: FriendsHoverImage,
          description: "A fun adventure with your closest friends.",
          video: FriendsVideo
        },
      ],
    },
    {
      id: 2,
      question: "Your preferred travel month?",
      options: [
        {
          label: "January", img: JANImage, hoverImg: JANHoverImage, description: "Cold and snowy adventures await in January."
        },
        { label: "Feburary",img: FEBImage, hoverImg: FEBHoverImage, description: "Perfect for warm, sunny summer travels.",  },
        { label: "March",img: MARCHImage, hoverImg: MARCHHoverImage,  description: "Enjoy the beauty of autumn and fall festivals." },
        { label: "April",img: DECImage, hoverImg: DECHoverImage, description: "Celebrate holidays with magical winter vibes." },
      ],
    },
    {
      id: 3,
      question: "Select the activities you’d like to include.",
      options: [
        { label: "Adventure", img: AdventureImage,  hoverImg: AdventureHoverImage,  description: "Thrilling activities for adrenaline junkies.",  video: AdventureVideo },
        { label: "Food & Entertainment", img: Food, hoverImg: FoodHoverImage, description: "Indulge in culinary delights and fun shows.",  video: FoodVideo },
        { label: "Winter Activities", img: winter, hoverImg: WinterHoverImage, description: "Enjoy vibrant nightlife with music and dancing.",  video: WinterVideo },
        { label: "Sports", img: Sports, hoverImg: SportsHoverImage, description: "Unwind and relax with serene surroundings.",  video: SportsVideo },
      ],
    },
    {
      id: 4,
      question: "How would you describe your travel personality?",
      options: [
        { label: "Luxury Traveler", img: LuxaryImage,  hoverImg: LuxaryHoverImage,  description: "Prefer comfort and high-end experiences.", video:LuxaryVideo  },
        { label: "Backpacker", img: backPacker, hoverImg: BackPackerHover, description: "Explore the world on a budget.", video:BackPackerVideo },
        { label: "Family-Oriented", img: FamilyTraveller, hoverImg: FamilyTravellerHover, description: "Focus on family-friendly trips.", video:FamilyTravellerVideo },
        { label: "Adventurer", img: AdventureSeeker, hoverImg: AdventureSeekerHover, description: "Seek out unique and daring experiences.", video:AdventureSeekerVideo },
      ],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selections, setSelections] = useState({});
  const [hoveredOption, setHoveredOption] = useState(null);
  const [suggestion, setSuggestion] = useState("");

  // Create refs for the video elements
  const videoRefs = useRef([]);

  const handleOptionClick = (option) => {
    setSelections((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setHoveredOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setHoveredOption(null);
    }
  };

  const handleFinish = () => {
    setSuggestion(generateSuggestion());
  };

  const generateSuggestion = () => {
    const selectedOptions = Object.values(selections);
    let suggestion = "Based on your choices, here's your travel suggestion:\n";

    if (selectedOptions[0]?.label === "Solo") {
      suggestion += "Enjoy a solo adventure, exploring new places at your own pace!\n";
    } else if (selectedOptions[0]?.label === "Couple") {
      suggestion += "A romantic getaway for you and your partner awaits!\n";
    } else if (selectedOptions[0]?.label === "Family") {
      suggestion += "A wonderful family vacation filled with bonding time!\n";
    } else {
      suggestion += "A fun trip with friends is the perfect way to make memories!\n";
    }

    suggestion += "Based on your personality, enjoy your travels and stay safe!";
    return suggestion;
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      {/* HEADER */}
      <NavigationalHeader />
      <Container
        fluid
        className="py-5"
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <style>
          {`
          .hover-card {
            transition: transform 0.3s ease, background 0.3s ease;
          }

          .hover-card:hover {
            transform: scale(1.1);
            background: rgba(255, 165, 0, 0.2);
          }
          `}
        </style>
        <Row className="justify-content-center text-center text-secondary">
          <Col md={8}>
            <h1 className="text-dark">{currentQuestion.question}</h1>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          {currentQuestion.options.map((option, idx) => (
            <Col key={idx} xs={6} sm={3} className="text-center mb-4">
              <Card
                className="hover-card border-0"
                style={{
                  background:
                    selections[currentQuestionIndex]?.label === option.label
                      ? "rgba(255, 165, 0, 0.8)"
                      : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => handleOptionClick(option)}
                onMouseEnter={() => {
                  setHoveredOption(option);
                  if (videoRefs.current[idx]) {
                    videoRefs.current[idx].play();
                  }
                }}
                onMouseLeave={() => {
                  if (videoRefs.current[idx]) {
                    videoRefs.current[idx].pause();
                  }
                }}
              >
                <Card.Body>
                  <img
                    src={
                      hoveredOption?.label === option.label
                        ? option.hoverImg
                        : option.img
                    }
                    alt={option.label}
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                  <div className="mt-2 text-white fw-bold">{option.label}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {hoveredOption && (
          <Row className="justify-content-center mt-4">
            <Col md={8} className="text-center">
              <video
                ref={(el) => (videoRefs.current[currentQuestionIndex] = el)}
                autoPlay
                muted
                loop
                style={{
                  width: "50%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <source src={hoveredOption.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        )}

        <Row className="justify-content-between mt-5">
          <Col xs="auto">
            <Button variant="light" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Previous
            </Button>
          </Col>
          <Col xs="auto">
            {currentQuestionIndex === questions.length - 1 ? (
              <Button variant="light" onClick={handleFinish}>
                Finish
              </Button>
            ) : (
              <Button variant="light" onClick={handleNext}>
                Next
              </Button>
            )}
          </Col>
        </Row>

        {suggestion && (
          <Row className="justify-content-center mt-5">
            <Col md={8} className="text-center">
              <Link to='/IntinaryCreated'>
                <h3 className="text-secondary">{suggestion}</h3>
              </Link>
            </Col>
          </Row>
        )}
      </Container>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default QuestionsItinerary;
