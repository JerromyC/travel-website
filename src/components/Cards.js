import React from 'react'
import './component-styles/Cards.css';
import CardItem from './CardItem.js';
import image02 from '../images/img-2.jpg';
import image03 from '../images/img-3.jpg';
import image04 from '../images/img-4.jpg';
import image08 from '../images/img-8.jpg';
import image09 from '../images/img-9.jpg';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={image02}
                    text='Travel through the island of Bali in a Private cruise' 
                    label='Luxury' 
                    path='/services'/>
                    <CardItem 
                    src={image09} 
                    text='Explore the hidden waterfall deep within the Amazonian rain forest' 
                    label='Adventure' 
                    path='/services'/>
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src={image03}
                    text='Enjoy the sights with a private scuba tour of the reef' 
                    label='Luxury' 
                    path='/services'/>
                    <CardItem 
                    src={image04} 
                    text='Play soccer on your own private island' 
                    label='Adventure' 
                    path='/services'/>
                    <CardItem 
                    src={image08} 
                    text='Take a private carravan tour through the desert' 
                    label='Adventure' 
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;