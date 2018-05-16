import React from "react";
import * as IconIo from "react-icons/lib/io";
import HeaderText from "./HeaderText";
import "./Resume.scss";
const HeaderIconResume = ({ title, icon }) => (
  <div className="header-icon">
    <span className="icon">{icon}</span>
    <span className="title-icon">{title}</span>
  </div>
);
HeaderIconResume.displayName = "h";
const ColTopResume = (props) => (
  <div className="col-top-r">
    <div className="yeah text-uppercase mb-5">{props.yeah}</div>
    <div className="job-top-r text-uppercase">{props.job}</div>
    { props.company &&
      <div className="job-company text-uppercase mb-5">{props.company}</div>
    }
    {
      props.projects &&  
      <div className="some-projects">
        <div className="text-project"><IconIo.IoXbox size={28}  color="#999"/> <span style={{marginLeft: 10}}> Projects </span></div>
        {
            props.projects.map((project) => (
              <div className="item-some-project"><strong>- </strong>{project}</div>
            ))
        }
      </div>
    }
    {
      props.desciptions && 
      <div className="desciptions">
        <p>{props.desciptions}</p>
      </div>
    }
  </div>
);
ColTopResume.displayName = 'c';
const SkillInfo = ({percent , name, lastChild}) => (
  <div className="skill-info">
    <div className="skill-name">{name}</div>
    <div className="progress">
      <div className="percentage" style={{width : percent > 0 ? `${percent}%` : 0}}></div>
    </div>
  </div>
);
SkillInfo.displayName = 's';
const Resume = () => (
  <div>
    <div className="resume">
      <div className="top-resume">
        <HeaderText title="Resume" />
        <div className="row">
          <div className="col-6 con-top-res">
            <HeaderIconResume
              icon={<IconIo.IoIosBriefcase size={28} color="#ff9800" />}
              title="EXPERIENCE"
            />
            <ColTopResume 
              yeah="10/2017 - PRESENT"
              job="Frontend"
              company="FI-COMPANY"
              projects={["CMS (REACTJS)", "Website 123 Giao (REACTJS)", "Website Dien may gia khang (REACTJS)"]}
            />
            <ColTopResume 
              yeah="6/2017 - 10/2017"
              job="Frontend"
              projects={["Build some Responsive website HTML5-CSS3-Bootstrap 4", "Convert PSD to HTML5, CSS3"]}
            />
            <ColTopResume 
              yeah="5/2016 - 6/2017"
              job="Backend"
              projects={["Library Management System (J2EE)", "Shopping Carts (J2EE)", "Asian History Blog (J2EE)"]}
            />
            <ColTopResume 
              yeah="7/2015-5/2016"
              job="Backend"
              projects={["Sell Management System (C#)", "Student Management System (C#)"]}
            />
          </div>
          <div className="col-6 con-top-res">
            <HeaderIconResume
              icon={<IconIo.IoUniversity size={28} color="#ff9800" />}
              title="EDUCATION"
            />
            <ColTopResume 
              yeah="2014 - PRESENT"
              job="MASTER DEGREE BEFORE JANUARY 2019"
              company="UNIVERSITY OF INFORMATION TECHNOLOGY"
              desciptions="Senior of UIT . I have studied at UIT since 2014 and my major is Software Enginneering. I will graduate in June , 2019 ."
            />
          </div>
        </div>
      </div>
      <div className="bottom-resume">
        <HeaderText title="My Skills" />
        <div className="row">
          <div className="col-6 con-top-res">
            <HeaderIconResume
              icon={<IconIo.IoAndroidDesktop size={28} color="#ff9800" />}
              title="DESIGN"
            />
            <SkillInfo name="Photoshop" percent={60}/>
            <SkillInfo name="Web Design" percent={50}/>
          </div>
          <div className="col-6 con-top-res">
            <HeaderIconResume
              icon={<IconIo.IoCodeWorking size={28} color="#ff9800" />}
              title="CODING"
            />
            <SkillInfo name="React / JavaScript" percent={65}/>
            <SkillInfo name="Webpack" percent={55}/>
            <SkillInfo name="HTML / CSS / SCSS" percent={80}/>
            <SkillInfo name="Bootstrap" percent={80}/>
            <SkillInfo name="Git" percent={40}/>
          </div>
        </div>
      </div>
    </div>
  </div>
);
Resume.displayName = "r";

export default Resume;
