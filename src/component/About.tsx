
import React from 'react';
import '../component/styles/styles.css'
import ReactIcon from '../assets/pngwing.com 1 .svg'

function About() {
  return (
    <section>
      <div className="">

        <div className="flex justify-center items-center">
          <div className="right">
            <img src={ReactIcon} className='spinning-image' alt="" width={360} height={20} />
          </div>
          <div className="left">
            <div className="about-header">
              <h1>Frontend Devloper </h1>
              <p>Currently at <b>Satwarth Soltion</b> </p>
            </div>
            <div className="about-content">
              <p>Hi! I’m Utkarsh Desai with 2.5 years of hands-on experience crafting sleek, responsive designs that look great on every screen.</p>
              <p> love transforming creative ideas into interactive realities using React, JS, HTML, and CSS plus a few other favorite tools along the way.</p>
              <p>Always open to collaborate and create something extraordinary 
                                                                            - Let’s build together!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
