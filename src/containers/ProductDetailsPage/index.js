import React from "react";
import { BiRupee } from "react-icons/bi";
import { Button } from "../../components/MaterialUI";
import "./style.css";
import NavBar from "../../components/Navbar";

/**
 * @author
 * @function ProductDetailsPage
 */

const ProductDetailsPage = (props) => {
  return (
    <>
      <NavBar />
      <div className="productDescriptionContainer" style={{paddingTop:'90px',justifyContent:'center'}}>
        <div className="productDescContainer">
          <div className="productDescImgContainer">
            <img src="https://m.media-amazon.com/images/I/41vqgX0c5EL.jpg" alt='https://m.media-amazon.com/images/I/41vqgX0c5EL.jpg'/>
          </div>
        </div>
        {/* home > category > subCategory > productName */}
        <div className=" detailsWrapper">
          <div className="prodDesc clearfix">
            <div className="productDetails" style={{ maxWidth: "525px" }}>
              <div>
                <div
                  className="Storename"
                  style={{ maxWidth: "521px", top: "-1px" }}
                >
                  <p style={{ display: "flex" }}>
                   One Plus store
                    {/* {renderButton(productDetails.storeId._id)} */}
                  </p>
                  <p
                    style={{
                      width: "130px",
                      fontSize: "12px",
                      color: "#878787",
                      fontWeight: "600",
                      marginRight: "20px",
                    }}
                  >
                    Viman Nagr
                  </p>
                </div>
              </div>
              <h1 className="productTitle" style={{ maxWidth: "509px" }}>
              OnePlus Nord CE 5G
              </h1>
              <div className="flexRow priceContainer price">
                Price : 
                <span
                // classNa me="price"
                >
                  <BiRupee />
                  24,999.00
                </span>
                {/* <span>i</span> */}
              </div>
              <div>
                <p style={{ display: "flex", maxWidth: "500px" }}>
                  <span
                    style={{
                      width: "100px",
                      fontSize: "12px",
                      color: "#878787",
                      fontWeight: "600",
                      marginRight: "20px",
                    }}
                  >
                    Description
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#212121",
                    }}
                  >
                    64MP+8MP+2MP triple rear camera with 1080p video at 30/60
                    fps, 4k 30 fps | 16MP front camera with 1080p video at 30/60
                    fps. 6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080
                    pixels resolution | 410ppi Memory, Storage & SIM: 8GB RAM |
                    128GB internal memory on UFS 2.1 storage system. Dual SIM
                    (nano + nano)  Alexa Hands-Free capable: Download the
                    Alexa app to use Alexa hands-free. Play music, make calls,
                    hear news, open apps, navigate and more, all using just your
                    voice, while on-the-go.
                  </span>
                </p>
                <div className="share-btn-container">
                  <div
                    id="addButtons"
                    style={{
                      float: "left",
                      width: "100%",
                      marginLeft: "85px",
                      display:'flex',
                      gap:'20px',
                      marginTop:'10px'
                    }}
                  >
                    <Button title="Add to cart"></Button>
                    <Button title="Share"></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
