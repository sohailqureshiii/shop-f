import React from "react";

const NoProductFound = (props) => {
  return (
    <>
      <div style={{textAlign:'center'}}> 
        <div>
          <img
            style={{ borderBottom: "1px solid", padding: "30px" }}
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_c2xzwO99w_NBdxv5uuagHg7vYofuJJAiw&usqp=CAU"}
          />
        </div>
        <span>We couldn't find any matches</span>
      </div>
    </>
  );
};

export default NoProductFound;
