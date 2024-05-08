import React from 'react'
import Img from '../../..//assets/frame-27.png'
import myImg from '../../../assets/prodimg/our (2).jpg'
import myImg1 from '../../../assets/prodimg/our (3).jpg'
import myImg2 from '../../../assets/prodimg/our (4).jpg'
import myImg3 from '../../../assets/prodimg/our (5).jpg'
import './OurClientStyles.css';

const OurClient = () => {
  return (
    <div className='client-container'>
        <h3 className='head-font'>Our Clients</h3>
        <div className='card-container'>
            <div className='client-card'>
                <img src={myImg}></img>
                <p>Venus Star</p>
            </div>
            <div className='client-card'>
                <img src={myImg1}></img>
                <p>AIC Bihar Vidyapith</p>
            </div>
            <div className='client-card'>
                <img src={myImg2}></img>
                <p>Nabard</p>
            </div>
            <div className='client-card'>
                <img src={myImg3}></img>
                <p>Govt Bihar</p>
            </div>
        </div>
    </div>
  )
}

export default OurClient