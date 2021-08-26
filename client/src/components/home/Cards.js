import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image1 from '../assets/img-1.jpg'
import image2 from '../assets/img-2.jpg'
import image3 from '../assets/img-4.jpg'
import image4 from '../assets/img-9.jpg'
import image5 from '../assets/img-11.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Ready to get Started?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={ image1 }
              text='A CUSTOMIZED FITNESS PROGRAM – JUST FOR YOU'
              label='Your goals'
              path='/services'
            />
            <CardItem
              src={ image2 }
              text='Semi-Private Training Sessions'
              label='Coaching'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={ image3 }
              text='We work together to deliver results in a friendly, fun and supportive environment'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={ image4 }
              text='Individualized nutrition coaching based on a properly prepared, nutrient dense, whole food diet.'
              label='Kitchen'
              path='/products'
            />
            <CardItem
              src={ image5 }
              text='Athletic Performance Coaching Personalized sports performance and fitness programs'
              label='Advanced Wellness trainers'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;