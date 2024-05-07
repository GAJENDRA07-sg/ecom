import React from 'react'
// import Img from '../assets/frame-341-18.png'
import './OurClientStyles.css';

const OurClient = () => {
  return (
    <div className='client-container'>
        <h3>Our Clients</h3>
        <div className='card-container'>
            <div className='client-card'>
                {/* <img src={Img}></img> */}
                <p>Parle Industries</p>
            </div>
            <div className='client-card'>
                {/* <img src={Img}></img> */}
                <p>Parle Industries</p>
            </div>
            <div className='client-card'>
                {/* <img src={Img}></img> */}
                <p>Parle Industries</p>
            </div>
            <div className='client-card'>
                {/* <img src={Img}></img> */}
                <p>Parle Industries</p>
            </div>
        </div>
    </div>
  )
}

export default OurClient