import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import  { Link } from 'react-router-dom';
import './Home.scss';
import * as IconIo from 'react-icons/lib/io';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Contact from './components/Contact';
const HeaderText = ({title}) => (
  <div className="container-header-text">
    <h3 className="title-text">{title}</h3>
  </div>
);

const animationTiming = {
  enter: 400,
  exit: 600
};
class HomeIndex extends Component {
  state = {
    initialTab : 0,
  };
  _onChangeTab = ({initialTab}) => {
    if(initialTab === this.state.initialTab) return;
    this.setState(prevState => ({
      initialTab,
    }))
  }
  render() {
    const { animation, initialTab } = this.state;
    return (
      <div className="container-page">
        <div className="bg-linear-gradient">
          <ul className="bg-bubbles">
            { [1,2,3,4,5,6,7,8,9,10].map((ele) =>(
              <li></li>
            ))}
          </ul>
        </div>
        <div className="content-page">
          <div className="menu-list">
            <div className="menu-item" onClick={()=>{
              this._onChangeTab({initialTab : 0})
            }} >
              <span className="menu-item-text">About</span>
              <IconIo.IoIosContactOutline color="#ff9800" size={24}/>
            </div>
            <div className="menu-item" onClick={()=>{
              this._onChangeTab({initialTab : 1})
            }}>
              <span className="menu-item-text">Resume</span>
              <IconIo.IoIosCompose color="#ff9800" size={24}/>
            </div>
            <div className="menu-item" onClick={()=>{
              this._onChangeTab({initialTab : 2})
            }}>
              <span className="menu-item-text">Contact</span>
              <IconIo.IoEmail color="#ff9800" size={24}/>
            </div>
          </div>
          <div className="avatar-info">
            <div className="container-img-bg">
              <div className="avatar-img">
                <span className="name-me">T</span>
                {/* <img src="http://beshley.com/vcard/orange/images/profile.png"/> */}
              </div>
            </div>
            <div className="info-profile">
              <div className="info-name">Trần Tiến Thắng</div>
              <div className="info-job">Frontend Developer</div>
              <div className="socials-contact-links">
                <a href="https://www.facebook.com/profile.php?id=100009398149130" className="social-contact-item">
                  <IconIo.IoSocialFacebook size={24} />
                </a>
                <a href="https://github.com/tienthanght96" className="social-contact-item">
                  <IconIo.IoSocialGithub size={24}/>
                </a>
                <a className="social-contact-item">
                  <IconIo.IoSocialSkypeOutline size={24}/>
                </a>
              </div>
            </div>
            <div className="built-info-profile">
              <span style={{marginRight: 10}}>Build with </span>
              <span className="built-info-item">
                <IconIo.IoSocialSass size={28} color="#c6538c"/>
              </span>
              <span className="built-info-item">
                <svg style={{position : 'absolute'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                  <path fill="#61dafb" d="M16.495 14c0 1.378-1.117 2.495-2.495 2.495s-2.495-1.117-2.495-2.495c0-1.378 1.117-2.495 2.495-2.495s2.495 1.117 2.495 2.495z"></path>
                  <path fill="#61dafb" d="M7.009 18.964l-0.551-0.14c-4.104-1.037-6.459-2.798-6.459-4.829s2.354-3.792 6.459-4.829l0.551-0.139 0.155 0.546c0.477 1.628 1.017 3.012 1.662 4.337l-0.072-0.163 0.118 0.249-0.118 0.248c-0.574 1.163-1.115 2.548-1.541 3.982l-0.049 0.192-0.155 0.545zM6.203 10.442c-3.12 0.876-5.034 2.217-5.034 3.554 0 1.336 1.915 2.676 5.034 3.554 0.448-1.417 0.915-2.594 1.454-3.73l-0.075 0.177c-0.465-0.961-0.932-2.138-1.322-3.349l-0.057-0.204zM20.991 18.964l-0.155-0.547c-0.476-1.626-1.017-3.011-1.662-4.335l0.071 0.161-0.118-0.249 0.118-0.248c0.574-1.163 1.115-2.547 1.542-3.981l0.049-0.193 0.155-0.546 0.552 0.139c4.103 1.037 6.457 2.798 6.457 4.83s-2.354 3.792-6.457 4.829l-0.552 0.14zM20.418 13.995c0.56 1.212 1.023 2.403 1.379 3.554 3.121-0.877 5.034-2.218 5.034-3.554 0-1.337-1.915-2.676-5.034-3.554-0.447 1.416-0.914 2.593-1.454 3.729l0.075-0.175z"></path>
                  <path fill="#61dafb" d="M6.195 10.436l-0.155-0.545c-1.154-4.067-0.804-6.981 0.96-7.999 1.73-0.999 4.508 0.181 7.419 3.169l0.397 0.407-0.397 0.407c-1.003 1.041-1.931 2.172-2.766 3.372l-0.059 0.090-0.157 0.225-0.274 0.023c-1.64 0.132-3.147 0.384-4.606 0.752l0.191-0.041-0.551 0.139zM8.407 2.701c-0.313 0-0.589 0.068-0.822 0.202-1.16 0.669-1.365 2.992-0.566 6.128 1.059-0.249 2.346-0.456 3.657-0.576l0.115-0.008c0.782-1.106 1.568-2.074 2.412-2.988l-0.018 0.020c-1.82-1.772-3.543-2.778-4.777-2.778zM19.594 26.457c-0.001 0-0.001 0 0 0-1.663 0-3.798-1.252-6.013-3.527l-0.397-0.407 0.397-0.407c1.003-1.042 1.931-2.172 2.765-3.373l0.059-0.090 0.158-0.225 0.273-0.023c1.641-0.131 3.148-0.383 4.608-0.751l-0.19 0.041 0.551-0.139 0.156 0.546c1.151 4.065 0.803 6.98-0.961 7.996-0.393 0.226-0.864 0.36-1.367 0.36-0.014 0-0.028-0-0.041-0l0.002 0zM14.815 22.512c1.82 1.772 3.543 2.778 4.778 2.778h0.001c0.311 0 0.589-0.068 0.821-0.202 1.16-0.669 1.366-2.994 0.566-6.13-1.060 0.25-2.347 0.456-3.659 0.576l-0.114 0.008c-0.781 1.107-1.567 2.075-2.411 2.989l0.018-0.019z"></path>
                  <path fill="#61dafb" d="M21.805 10.436l-0.551-0.139c-1.271-0.329-2.778-0.581-4.321-0.705l-0.097-0.006-0.273-0.023-0.158-0.225c-0.893-1.29-1.821-2.42-2.833-3.47l0.008 0.008-0.397-0.407 0.397-0.407c2.91-2.987 5.686-4.166 7.419-3.169 1.764 1.017 2.114 3.932 0.961 7.998l-0.156 0.546zM17.208 8.447c1.332 0.121 2.598 0.319 3.773 0.585 0.8-3.136 0.594-5.46-0.566-6.128-1.153-0.666-3.319 0.355-5.6 2.576 0.825 0.894 1.611 1.862 2.332 2.878l0.060 0.090zM8.407 26.457c-0.012 0-0.026 0-0.040 0-0.502 0-0.974-0.133-1.38-0.367l0.014 0.007c-1.764-1.016-2.114-3.93-0.96-7.996l0.154-0.546 0.551 0.139c1.348 0.34 2.834 0.579 4.416 0.71l0.274 0.023 0.156 0.225c0.895 1.29 1.823 2.421 2.834 3.471l-0.008-0.009 0.397 0.407-0.397 0.407c-2.214 2.275-4.349 3.527-6.010 3.527zM7.019 18.958c-0.8 3.136-0.594 5.461 0.566 6.13 1.152 0.657 3.317-0.356 5.6-2.576-0.825-0.894-1.611-1.863-2.333-2.879l-0.061-0.090c-1.425-0.128-2.712-0.335-3.968-0.622l0.196 0.038z"></path>
                  <path fill="#61dafb" d="M14 19.691c-0.96 0-1.947-0.042-2.935-0.124l-0.274-0.023-0.158-0.225c-0.476-0.672-0.997-1.48-1.485-2.309l-0.090-0.166c-0.396-0.663-0.849-1.515-1.268-2.387l-0.092-0.212-0.117-0.248 0.117-0.249c0.511-1.084 0.964-1.936 1.451-2.766l-0.090 0.167c0.483-0.835 1.014-1.668 1.575-2.476l0.157-0.225 0.274-0.023c0.879-0.079 1.902-0.124 2.936-0.124s2.056 0.045 3.067 0.133l-0.131-0.009 0.273 0.023 0.156 0.225c1.030 1.458 2.008 3.121 2.846 4.865l0.091 0.21 0.118 0.248-0.118 0.248c-0.926 1.953-1.904 3.616-3.009 5.184l0.073-0.109-0.156 0.225-0.273 0.023c-0.988 0.082-1.976 0.124-2.937 0.124zM11.437 18.426c1.727 0.13 3.4 0.13 5.128 0 0.878-1.265 1.731-2.716 2.474-4.232l0.088-0.199c-0.828-1.713-1.682-3.165-2.636-4.541l0.072 0.11c-0.767-0.062-1.661-0.097-2.563-0.097s-1.796 0.035-2.68 0.104l0.117-0.007c-0.882 1.266-1.735 2.718-2.477 4.235l-0.087 0.196c0.832 1.715 1.685 3.167 2.637 4.544l-0.074-0.113z"></path>
                </svg>
              </span>
              <span className="built-info-item">
              <svg style={{position : 'absolute'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                <path fill="#8dd6f9" d="M24.518 21.14l-10.109 5.693v-4.434l6.298-3.449 3.81 2.191zM25.21 20.517v-11.906l-3.699 2.126v7.653l3.699 2.128zM3.413 21.14l10.109 5.693v-4.434l-6.298-3.449-3.81 2.191zM2.722 20.517v-11.906l3.699 2.126v7.653l-3.699 2.128zM3.155 7.84l10.367-5.84v4.287l-6.692 3.666-3.675-2.114zM24.777 7.84l-10.368-5.84v4.287l6.692 3.666 3.675-2.114zM13.522 21.391l-6.214-3.401v-6.74l6.214 3.572v6.569zM14.409 21.391l6.214-3.401v-6.74l-6.214 3.572v6.569zM7.729 10.469l6.238-3.416 6.238 3.416-6.238 3.587-6.238-3.587z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="container-content-profile-info" style={{overflowY : initialTab === 1 ? 'scroll' : 'hidden'}}>
            <div className="content-profile-info">
              <TransitionGroup>
                <CSSTransition
                  key={new Date().getTime() + initialTab}
                  classNames="fade"
                  timeout={300}
                >
                {
                  initialTab === 0 
                  ? <AboutMe /> : 
                  initialTab === 1 
                  ? <Resume /> : 
                  initialTab === 2 
                  ? <Contact /> : null
                }
                </CSSTransition>
              </TransitionGroup>        
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeIndex;