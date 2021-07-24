import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

/**
 * @author Shopisthan
 * @function
 **/

   
  



const Button = (props) => {
  const {
    border,
    color,
    backgroundColor,
    children,
    height,
    onClick,
    radius,
    width,
    padding,
    title,
    font,
    justifyContent,
    marginBottom,
    marginTop,
    marginLeft,
    fontSize,
    zIndex
  } = props;

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor,
        border: "1px solid #d9d9d9",
        borderRadius: radius,
        height,
        width,
        color,
        padding,
        font,
        justifyContent,
        marginBottom,
        marginTop,
        marginLeft,
        fontSize,
        zIndex
      }}
    >
      {title}
    </button>
  );
};

const Modal = (props) => {
  if (!props.visible) {
    return null;
  }
  return (
    <>
      <div className="modalFixedBg">
        <div style={{ position: "relative" }}>
          <div className="modalClose" onClick={props.onClose}>
            X
          </div>
          <div className="modalContainer">{props.children}</div>
        </div>
      </div>
    </>
  );
};

const MaterialInput = (props) => {
  return (
    <div>
      <label className="spectrum-FieldLabel">{props.label}</label>
      <input
        className="spectrum-Textfield spectrum-Textfield--quiet"
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

// const Button = (props) => {
//   const onClick = () => {
//     props.onClick && props.onClick();
//   };
//   return (
//       <div className="button-group ml16 btn-primary section-text-5 btn-product-new">
//         <div className="btn-text" onClick={onClick}>
//           {props.title}
//         </div>
//       </div>
//   );
// };

const FollowingBtn = (props) => {
  const onClick = () => {
    props.onClick && props.onClick();
  };
  return (
    <div className="FollowButton-root-VgV ProfileCard-interactionButton-1gk ProfileCard-followButton-1N4 ProfileCard-follow-39e">
      <button
        type="button"
        className="Btn-button-BGn Btn-primary-1H3 Btn-mediumLarge-1uo ProfileCard-buttonWrapper-2kh"
      >
        <div className="Btn-labelWrapper-1jS ProfileCard-buttonLabel-2_O">
          <div className="Btn-icon-flr Btn-leading-29d">
            <svg
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              className="FollowButton-followMark-6kv"
            >
              <path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,8.5a.5.5,0,0,1-.5.5H10v3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V10H4.5A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8H8V4.5A.5.5,0,0,1,8.5,4h1a.5.5,0,0,1,.5.5V8h3.5a.5.5,0,0,1,.5.5Z"></path>
            </svg>
          </div>
          <div className="Btn-label-1Zf e2e-Btn-label" onClick={onClick}>
            {props.title}
          </div>
        </div>
      </button>
    </div>
  );
};

const DropdownMenu = (props) => {
  return (
    <div className="headerDropdownContainer">
      {props.menu}
      <div className="dropdown">
        <div className="upArrowContainer">
          <div className="upArrow"></div>
        </div>
        <div className="dropdownMenu">
          {props.firstMenu}
          <ul className="headerDropdownMenu">
            {props.menus &&
              props.menus.map((item, index) => (
                <li key={index}>
                  <Link
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick && item.onClick();
                      }
                    }}
                    to={`${item.to}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Anchor = (props) => {
  return (
    <button {...props} className="anchorButton">
      {props.name}
    </button>
  );
};

const Breed = (props) => {
  return (
    <div className="breed">
      <ul>
        {props.breed &&
          props.breed.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
              {props.breedIcon}
            </li>
          ))}
      </ul>
    </div>
  );
};

// const ProImg = (props) => {
//   return (
//     <div className="flexRow">
//       <div className="productDescContainer">
//         <div className="productDescImgContainer">
//         <img>{props.sr}</img>
//         </div>
//       </div>
//     </div>
//   );
// };

export {
  Modal,
  MaterialInput,
  Button,
  FollowingBtn,
  DropdownMenu,
  Anchor,
  Breed,

};
