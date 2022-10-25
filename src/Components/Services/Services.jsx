import React from 'react'
import './Services.css'
import Card from "../Card/Card" 
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './CV_Basem_karahbi.pdf'
function Services() {
  return (
<div className="services">

{/**Left Side **/}
    <div className="awesome">
        <span>My Awasome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br/>
            Adipisci officiis illo cupiditate eaque 
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background:'#ABF1FF94'}}  ></div>  

    </div>
{/**Right Side **/}
<div className="cards"> 
    <div style={{left:'24rem'}}>
        {/*first Card*/}
        <Card 
            emoji={HeartEmoji}
            heading={'SAP'}
            detail = {"SAP HANA2.0 , SAP FIORI , ABAP , SAP UI5 "}  
        />
    </div>
    {/*Secand Card*/}
    <div style={{left:'4rem',top:'12rem'}}>
        <Card 
            emoji={Glasses}
            heading={'Developer'}
            detail = {"Html , Css , JaveScript, React.js,Nood.js"}  
        />
    </div>
    {/*3rd Card*/}
    <div style={{left:'27rem',top:'19rem'}}>
        <Card 
            emoji={Humble}
            heading={'UI/Ux'}
            detail = {"Html , Css , JaveScript, React.js,Nood.js"}  
        />
    </div>    
    <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>

</div>
</div>  )
}

export default Services