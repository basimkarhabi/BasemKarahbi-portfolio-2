import React from 'react'
import './Works.css';
import Upwork from "../../img/Upwork.png";
import fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";




function Works() {
  return (
    <div className="works">
      {/**Left Side **/}
      <div className="awesome">
          <span>Works for All these</span>
          <span>Brands & clinets</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br/>
              Adipisci officiis illo cupiditate eaque 
          </span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br/>
              Adipisci officiis illo cupiditate eaque 
          </span>
              
          <button className="button s-button">Hier me</button>
          <div className="blur s-blur1" style={{background:'#ABF1FF94'}}  ></div>  
      </div>
    {/*Right side*/}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork"/>
          </div>

          <div className="w-secCircle">
            <img src={fiverr} alt="Upwork"/>
          </div>

          <div className="w-secCircle">
            <img src={Amazon} alt="Upwork"/>
          </div>

          <div className="w-secCircle">
            <img src={Shopify} alt="Upwork"/>
          </div>

          <div className="w-secCircle">
            <img src={Facebook} alt="Upwork"/>
          </div>

        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>

    </div>
  )
}

export default Works