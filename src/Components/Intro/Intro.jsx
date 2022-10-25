import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv.js'


function Intro() {

    
  return (
<div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span>Hi! I Am</span>
            <span>Basem Karah bi</span>
            <span>
                Frontend devloper 
            </span>
        </div>
        <button className="button i-button">Hier me</button>
        <div className="i-icons">
            <a href="https://github.com/basimkarhabi">
                    <img src={Github}  alt="github.com/basimkarhabi" /> </a>
                <a href="https://www.linkedin.com/in/mohammad-basem-karha-bi-b1a14611a">
                    <img src={LinkedIn}  alt=""    /> </a>
            <img src={Instagram}  alt=""    />
        </div>
    </div>
    <div className="i-right">

        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="boy" />
        <img src={glassesimoji} alt="glassesimoji" />

        <div className="styleFloatingDiv">
            <FloatingDiv  image={Crown}  txt1='Web' txt2='Devloper'/>
        </div>
        <div className="styleFloatingDiv2">
        <FloatingDiv  image={thumbup}  txt1='Best Design' txt2='Award'/>
        </div>
        {/***********************blur divs**************/}
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{background:'#C1F5FF', top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}  ></div>    

    </div>
</div>  )
}

export default Intro