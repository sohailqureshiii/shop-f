import React from "react";
import "./style.css";
import NavBar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Planselection = (props) => {
  const storePlanLists = useSelector((state) => state.storePlans.storePlans);
  const history = useHistory();


  if (storePlanLists.length < 0) {
    return null;
  }

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
                </div>
              </div>
              <div className='class="grid__item grid__item--mobile-up-align-center"'></div>
            </div>
            <div className="grid pricing__cards">
              <div className="grid__item">
                <div className="pricing-cards__wrapper pricing-cards pricing-cards--skin-light">
                  {storePlanLists && storePlanLists.length > 0
                    ? storePlanLists.map((plan, index) => (
                        <div
                          className="text-center pricing-card--basic pricing-card"
                          key={plan._id}
                        >
                          <h2 className="pricing-card__plan-name text-major heading--4">
                            {plan.planName}
                          </h2>
                          <div className="text-center pricing-card-content">
                            <p className="pricing-card__plan-description color-gray-70 okmggsysjsn">
                              {plan.planDescription}
                            </p>
                            <div className="pricing-card__monthly-content">
                              <span className="pricing-card__plan-price heading--1">
                                <span className="price">
                                  <span className="visuallyhidden">
                                    ₹ {plan.planPrice}
                                  </span>
                                  <span arial-hidden="true">
                                    <sup>₹</sup>
                                    <span
                                      className="price__number"
                                      style={{ fontSize: "35px" }}
                                    >
                                      {plan.planPrice}
                                    </span>
                                  </span>
                                </span>
                              </span>
                              <span>
                                <span className="pricing-card__plan-currency">
                                  Rs.
                                </span>
                                <span className="visuallyhidden">per year</span>
                                <span
                                  className="pricing-card__plan-billing-period"
                                  arial-hidden="true"
                                >
                                  /yr
                                </span>
                              </span>
                            </div>
                            <div
                              className="d-flex"
                              style={{
                                paddingTop: "20px",
                                justifyContent: "center",
                              }}
                            >
                              <div className="button-group ml16 btn-primary section-text-5 btn-product-new">
                                <button
                                  className="btn-text"
                                  onClick={() => {
                                    history.push({
                                      pathname: "/storeForm",
                                      state: { storePlanId:plan, storePlan: true },
                                    });
                                  }}
                                >
                                  Choose Plan
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Planselection;
