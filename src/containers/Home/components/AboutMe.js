import React from "react";
import * as IconIo from 'react-icons/lib/io';
import HeaderText from './HeaderText';
import './AboutMe.scss';

const AboutMe = () => (
  <div>
    <div className="about-me">
      <HeaderText title="About me"/>
      <div className="col-12">
        <p className="description-me">
          I am Tran Tien Thang, frontend web developer from HCM, VietName. I have
          6 moths experience in web site design and building and customization
          with <strong> HTML, CSS3, Bootstrap, SASS, JavaScript, ReactJS </strong> also I am some normal knowledge work with
          Java Backend. I love to talk with you about some lasted technologies.
        </p>
      </div>
      <div className="info-person">
        <div className="row">
          <div className="col-6">
            <div>
              <span className="text-bold-uppercase">AGE...</span>
              <span className="text-normal-light">22</span>
            </div>
            <div>
              <span className="text-bold-uppercase">RESIDENCE...</span>
              <span className="text-normal-light">Ha Tinh</span>
            </div>
          </div>
          <div className="col-6">
            <div>
              <span className="text-bold-uppercase">Phone...</span>
              <span className="text-normal-light">01675497675</span>
            </div>
            <div>
              <span className="text-bold-uppercase">ADDRESS...</span>
              <span className="text-normal-light">Q9 - HCM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hobbies">
      <HeaderText title="Hobbies"/>
      <div className="row">
        <div className="col-6">
          <div>
            <span className="circle-squre">
              <IconIo.IoCode size={28}/> 
            </span>
            <div>
              <strong>LEARN WEB DEVELOPMENT</strong>
            </div>
          </div>
          <div>
            Modern and mobile-ready website that will help you reach all of your marketing.
          </div>
          </div>
        <div className="col-6">
          <div>
            <span className="circle-squre">
              <IconIo.IoIosMusicalNotes size={28}/> 
            </span>
            <div>
              <strong>LISTEN TO MUSIC</strong>
            </div>
          </div>
          <div> Listent flute or others instrumental music</div>
        </div>
      </div>
    </div>
  </div>
);
AboutMe.displayName = 'AB';

export default AboutMe;
