import React from 'react';
import './index.css'; // Import your CSS file
import video1 from './video/video1.mp4';
import image3 from './image/image3.webp';
import image2 from './image/image2.webp';
import image1 from './image/image1.webp';
import { faMagnifyingGlass,faCartShopping,faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header>

      <div id="menu-bar" class="fas fa-bars"></div>
      <a href="#" class="logo"><span>T</span>ravel</a>


      <nav class="navbar">
          <a href="#home">Home</a>
          <a href="#book">Book</a>
          <a href="#package">Packages</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
      </nav>

      <div class="icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} id="search-btn" />
          <FontAwesomeIcon icon={faCartShopping} id="cart-btn"/>
      </div>

      <form action="" class="search-bar-container">
          <input type="search" id="search-bar" placeholder="Search here..."></input>
          <label for="search-bar" FontAwesomeIcon icon={faMagnifyingGlass}></label>
      </form>

    </header>
  );
}

function HomeSection() {
  return (
    <section class="home" id="home">
      <div class="content">
          <h3>Adventure is Worthwhile</h3>
          <p>Discover New Places With Us, Adventure Awaits</p>
          <a href="#" class="btn">Discover more</a>
      </div>

      <div class="controls">
          <span class="vid-btn active" source src={video1}></span>
      </div>

      <div class="video-container">
          <video src={video1} id="video-slider" loop autoplay muted></video>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section class="packages" id="packages">

      <h1 class="heading">
          <span>P</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <span>S</span>
      </h1>

      <div class="box-container">

        <div class="box">
            <img src={image3} alt=""></img>
            <div class="content">
                <h3><i class="fas fa-map-marker-alt"></i>mumbai</h3>
                <p>Mumbai, often referred to as the "City of Dreams," is a bustling metropolis on the western coast of India. </p>
                <div class="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div class="price">Rs7500 <span>Rs15000</span></div>
                <a href="#" class="btn">book now</a>
            </div>
        </div>

        <div class="box">
            <img src={image2} alt=""></img>
            <div class="content">
                <h3><i class="fas fa-map-marker-alt"></i>Delhi</h3>
                <p>Delhi, the capital city of India, is a captivating blend of ancient history and modernity. </p>
                <div class="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div class="price">Rs7500 <span>Rs15000</span></div>
                <a href="#" class="btn">book now</a>
            </div>
        </div>

        <div class="box">
            <img src={image1} alt=""></img>
            <div class="content">
                <h3><i class="fas fa-map-marker-alt"></i>Banglore</h3>
                <p>Bangalore, known as the "Silicon Valley of India," is a dynamic city that seamlessly blends its rich cultural heritage with modern innovation. </p>
                <div class="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div class="price">Rs7500 <span>Rs15000</span></div>
                <a href="#" class="btn">book now</a>
            </div>
        </div>
    </div>
    </section>
  );
}

function ReviewSection() {
  return (
    <section class="review" id="review">
        <h1 class="heading">
            <span>R</span>
            <span>E</span>
            <span>V</span>
            <span>I</span>
            <span>E</span>
            <span>W</span>
        </h1>
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import star from './star.png';

const RatingComponent = ({ message }) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

function BasicExample() {
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');
    const [review, setReview] = useState('');

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        switch (newRating) {
            case 1:
                setMessage('I just hated.');
                break;
            case 2:
                setMessage('I dont like it.');
                break;
            case 3:
                setMessage('Average.');
                break;
            case 4:
                setMessage('Very Good.');
                break;
            case 5:
                setMessage('I just love It.');
                break;
            default:
                setMessage('');
        }
    };

    const handleCancel = () => {
        setRating(0);
        setMessage('');
        setText('');
        setReview('');
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = () => {
      setReview(`Rating: ${rating}, Review: ${text}`);
    };

    return (
        <Container fluid >
            <Row className='justify-content-center'>
                <Col></Col>
                <Col className='title justify-content-center'>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            style={{
                                cursor: 'pointer',
                                color: star <= rating ? 'gold' : 'white',
                                fontSize: '40px', // Increase font size for larger stars
                                marginRight: '5px', // Add spacing between stars
                                animation: 'starAnimation 0.5s'
                            }}
                            onClick={() => handleRatingChange(star)}
                        >
                            &#9733;
                        </span>
                    ))}
                    <p className='msg'>{message}</p>
                    <textarea placeholder='Describe your experience' value={text} onChange={handleTextChange}></textarea>
                    <RatingComponent />
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                </Col>

                <Col>

                </Col>

            </Row>
            <Row>
                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Always use travel online to book our holidays so easy to use and they have some great value packages </p>


                </Col>
                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Great services..</p>


                </Col>

                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Very fast responses and easy to deal with.</p>

                </Col>
            </Row>
            <Row>
                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Booking got Cancelled but was rescheduled no complaints and everything was good.</p>
 

                </Col>
                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>

                    <br></br>
                    <p className='xt'>Very responsive are holiday run so smoothly without any hassels and we had a fantastic time.</p>


                </Col>

                <Col className='titlee'>
                    <span className='rate'><img className='rate' src={star} /></span>
                    {/* <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span>
                    <span className='rate'><img className='rate' src={star} /></span> */}

                    <br></br>
                    <p className='xt'>Not Satisfied.</p>

                </Col>
            </Row>
        </Container>
    );
}

export default BasicExample;
    </section>
  );
}

function Footer() {
  return (
    <section class="footer">

        <div class="box-container">
            
            <div class="box">
                <h3>about us</h3>
                <p>Welcome to our travel booking website, your one-stop destination for planning and booking your next adventure. Whether you're dreaming of a tropical escape, a city break, or a cultural journey, we're here to make your travel aspirations a reality.
                </p>
            </div>
            <div class="box">
                <h3>branch locations</h3>
                <a href="#">india</a>
                <a href="#">USA</a>
                <a href="#">japan</a>
                <a href="#">france</a>
            </div>
            <div class="box">
                <h3>quick links</h3>
                <a href="#">home</a>
                <a href="#">book</a>
                <a href="#">packages</a>
                <a href="#">services</a>
                <a href="#">gallery</a>
                <a href="#">review</a>
                <a href="#">contact</a>
            </div>
            <div class="box">
                <h3>follow us</h3>
                <a href="#">home</a>
                <a href="#">book</a>
                <a href="#">facebook</a>
                <a href="#">instagram</a>
                <a href="#">twitter</a>
                <a href="#">linkedin</a>
            </div>
        </div>
        <h1 class="credit"> created by <span> Neeshu/Nandini/Muskan </span> | all rights reserved! </h1>
    </section>
  );
}

function App() {
  return (
    <div>
      <Header />
      <HomeSection />
      <PackagesSection />
      <ReviewSection />
      <Footer />
    </div>
  );
}

export default App;

