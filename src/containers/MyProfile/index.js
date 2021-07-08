import React, { useEffect, useState } from "react";
import "./style.css";
import Profilepic from "../../img/profilepic.jpg";
import NavBar from "../../components/Navbar";
import { Link } from 'react-router-dom'
 

/**
 * @author
 * @function MyProfile
 **/

const MyProfile = (props) => {
  return (
    <>
      <NavBar />
      {/* ProfileHEader  starts*/}
      <main className="SCxLW o64aR " role="main" style={{ paddingTop: "55px" }}>
        <div className="v9tJq v9tJq">
          <header className="HVbug">
        
            <section
              className="CardLayout__content"
              style={{ paddingLeft: "100px" }}
            >
              <form>
              <section className="XjzKX">
              <section className="_4dMfM">
                <section className="M-jxE">
                  <img alt="Profile Pic" className="be6sr" src={Profilepic} />
                </section>
              </section>
            </section>
                <section className="EmailPage__email-field form-group">
                  <div>
                    <label className="spectrum-FieldLabel">
                      User Name : Sohail37
                    </label>
                   
                  </div>
                  <div>
                    <label className="spectrum-FieldLabel">
                      Name : Sohail Qurehsi
                    </label>
                    
                  </div>
                  <div>
                    <label className="spectrum-FieldLabel">
                    Email Address : Sohail@gmail.com
                    </label>
                   
                  </div>
                  <div>
                    <label className="spectrum-FieldLabel">
                    Mobile Number : 9119449383
                    </label>
                  </div>
                </section>
                <section className="EmailPage__submit mod-submit">
                  <div className="ta-left"></div>
                  <div className="ta-right">
                  <Link to='/editprofile'>
                  <button className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right">
                      <span className="spectrum-Button-label">edit</span>
                    </button>
                  </Link>
                  </div>
                </section>
              </form>
            </section>
          </header>
          {/* ProfileHEader  ends*/}
        </div>
      </main>
    </>
  );
};

export default MyProfile;
