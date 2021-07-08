import React, { useState } from "react";
import "./style.css";
import NavBar from "../../components/Navbar";
import Newtable from "../../components/PlanSelection";

const Planselection = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <NavBar />
      <main id="Main">
        <section className="section pricing-page__top">
          <div className="pricing-page__hero">
            <div className="grid">
              <div className="grid__item">
                <div className="section-heading pricing__main-heading">
                  <h1 className="section-heading__heading heading--1 pricing__heading ">
                    Set up your store, pick a plan later
                  </h1>
                  <p className="section-heading__subhead heading--2 pricing__subhead okmggsysjsn">
                    Try Shopisthan free for 14 days, no credit card required
                  </p>
                </div>
              </div>
              <div className='class="grid__item grid__item--mobile-up-align-center"'></div>
            </div>
            <div className="grid pricing__cards">
              <div className="grid__item">
                <div className="pricing-cards__wrapper pricing-cards pricing-cards--skin-light">
                  <div
                    className="text-center pricing-card--basic pricing-card"
                    onClick={() => handleShow()}
                  >
                    <h2 className="pricing-card__plan-name text-major heading--4">
                      Basic Shopisthan
                    </h2>
                    <div className="text-center pricing-card-content">
                      <p className="pricing-card__plan-description color-gray-70 okmggsysjsn">
                        Best for new ecommerce businesses with occasional
                        in-person sales
                      </p>
                      <div className="pricing-card__monthly-content">
                        <span className="pricing-card__plan-price heading--1">
                          <span className="price">
                            <span className="visuallyhidden">$29</span>
                            <span arial-hidden="true">
                              <sup>$</sup>
                              <span
                                className="price__number"
                                style={{ fontSize: "35px" }}
                              >
                                29
                              </span>
                            </span>
                          </span>
                        </span>
                        <span>
                          <span className="pricing-card__plan-currency">
                            USD
                          </span>
                          <span className="visuallyhidden">per month</span>
                          <span
                            className="pricing-card__plan-billing-period"
                            arial-hidden="true"
                          >
                            /mo
                          </span>
                        </span>
                      </div>
                      <div
                            className="d-flex"
                            style={{
                              paddingTop:'20px',
                              justifyContent:'center'
                            }}

                          >
                            <div className="button-group ml16 btn-primary section-text-5 btn-product-new">
                              <div className="btn-text">Choose Plan</div>
                            </div>
                          </div>
                    </div>
                  </div>
                  <div className="text-center pricing-card--professional pricing-card">
                    <h2 className="pricing-card__plan-name text-major heading--4">
                      Shopisthan
                    </h2>
                    <div className="text-center pricing-card-content">
                      <p className="pricing-card__plan-description color-gray-70 okmggsysjsn">
                        Best for growing businesses selling online or in-store
                      </p>
                      <div className="pricing-card__monthly-content">
                        <span className="pricing-card__plan-price heading--1">
                          <span className="price">
                            <span className="visuallyhidden">$79</span>
                            <span arial-hidden="true">
                              <sup>$</sup>
                              <span className="price__number">79</span>
                            </span>
                          </span>
                        </span>
                        <span>
                          <span className="pricing-card__plan-currency">
                            USD
                          </span>
                          <span className="visuallyhidden">per month</span>
                          <span
                            className="pricing-card__plan-billing-period"
                            arial-hidden="true"
                          >
                            /mo
                          </span>
                        </span>
                      </div>
                      <div
                            className="d-flex"
                            style={{
                              paddingTop:'20px',
                              justifyContent:'center'
                            }}

                          >
                            <div className="button-group ml16 btn-primary section-text-5 btn-product-new">
                              <div className="btn-text">Choose Plan</div>
                            </div>
                          </div>
                    </div>
                  </div>
                  <div className="text-center pricing-card--unlimited pricing-card">
                    <h2 className="pricing-card__plan-name text-major heading--4">
                      Advanced Shopisthan
                    </h2>
                    <div className="text-center pricing-card-content">
                      <p className="pricing-card__plan-description color-gray-70 okmggsysjsn">
                        Best for scaling businesses that require advanced
                        reporting
                      </p>
                      <div className="pricing-card__monthly-content">
                        <span className="pricing-card__plan-price heading--1">
                          <span className="price">
                            <span className="visuallyhidden">$29</span>
                            <span arial-hidden="true">
                              <sup>$</sup>
                              <span className="price__number">299</span>
                            </span>
                          </span>
                        </span>
                        <span>
                          <span className="pricing-card__plan-currency">
                            USD
                          </span>
                          <span className="visuallyhidden">per month</span>
                          <span
                            className="pricing-card__plan-billing-period"
                            arial-hidden="true"
                          >
                            /mo
                          </span>
                        </span>
                      </div>
                    </div>
                    <div
                            className="d-flex"
                            style={{
                              paddingTop:'20px',
                              justifyContent:'center'
                            }}

                          >
                            <div className="button-group ml16 btn-primary section-text-5 btn-product-new">
                              <div className="btn-text">Choose Plan</div>
                            </div>
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Newtable show={show} handleclose={() => setShow(false)} />
      </main>
    </>
  );
};

export default Planselection;
