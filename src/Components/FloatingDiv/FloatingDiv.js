import React from 'react'
import './FloatingDiv.css'


function FloatingDiv({image,txt1,txt2}) {
  return (
        <div className="floatingDiv">
            <img  src={image} alt="" />
            <spn>
                {txt1}
                <br/>
                {txt2}

            </spn>
        </div>


    )
}

export default FloatingDiv