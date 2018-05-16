import React from "react";
import * as IconIo from "react-icons/lib/io";
import HeaderText from "./HeaderText";
import "./Resume.scss";
const Contact = () => (
  <div>
    <div className="resume">
      <div className="top-resume">
        <HeaderText title="Contact me" />
        <div className="row">
          <div className="col-12">
            <div style={{marginBottom : 10}}>
              <span className="text-bold-uppercase">
                <span style={{marginRight: 10}}>
                  <IconIo.IoIphone color="#999" size={28}/>
                </span>
                Phone
              </span>
              <div className="text-normal-light">01675497675 / 0933678884</div>
            </div>
            <div style={{marginBottom : 10}}>
              <span className="text-bold-uppercase">
                <span style={{marginRight: 10}}>
                  <IconIo.IoIosLocation color="#999" size={28}/>
                </span>
                Address
              </span>
              <div className="text-normal-light">Phuoc Long B, District 9, HCM</div>
            </div>
          </div>
          <div className="col-12">
            <div style={{marginBottom : 10}}>
              <span className="text-bold-uppercase">
                <span style={{marginRight: 10}}>
                  <IconIo.IoEmail color="#999" size={28}/>
                </span>
                Email
              </span>
              <div className="text-normal-light">trantienthanght6996@gmail.com</div>
            </div>
            <div style={{marginBottom : 10}}>
              <span className="text-bold-uppercase">
                <span style={{marginRight: 10}}>
                  <IconIo.IoSocialSkype color="#999" size={28}/>
                </span>
                Skype
              </span>
              <div className="text-normal-light">trantienthanght6996@gmail.com</div>
            </div>
          </div>
          <div className=" col-12 text-bold-uppercase">Thanks you very much !</div>
        </div>
      </div>
    </div>
  </div>
);
Contact.displayName = "r";

export default Contact;
