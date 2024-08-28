import React from 'react';
import Ab from '../../assets/About.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about">
    <div className='page'>
      <h1 className='heading'>ABOUT US</h1>
      <div className="main">

        <div className='mix'>
          <div className="image">
            <img src={Ab} alt="" />
          </div>
          <div className="slogan">
            P<br />
            U<br />
            N<br />
            A<br />
            M<br />
            S<br />
          </div>
        
        <div className="desc">
          <pre>
            {`
            Welcome to PUNAMS – your
            ultimate destination for
            elegant timepieces.From
            classic wall clocks to sleek
            desk companions, we offer a
            curated selection to suit every
            style.Committed to quality
            and sustainability,PUNAMS
            is where sophistication meets
            functionality. Join us in
            marking life's moments
            with timeless grace.
            `}
          </pre>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
